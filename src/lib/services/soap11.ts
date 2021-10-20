import * as request from "request";
import * as Url from "url";
import * as xml2js from "xml2js";

import debugModule from "debug";
const debug = debugModule("afip-apis:soap11");

import { BaseError } from "../shared/error.server.class";

export interface SoapFault {
    fault: {
        faultcode?: string;
        faultstring?: string;
        detail?: {
            "ns2:exceptionName": string;
            "ns3:hostname": string;
        };
        statusCode: number;
    };
    [key: string]: string | number | Record<string, unknown>;
}

export class SoapFaultError extends BaseError {
    constructor(code: number, id: string, message: string, extra: SoapFault) {
        super(code, id, message, extra);
        this.name = "SoapFaultError";
    }
}

function tagNameProcessor(name: string): string {
    return name.substring(0, 8).toLocaleLowerCase() === "soapenv:" ? name.substring(8, name.length).toLocaleLowerCase() : name.substring(0, 5).toLocaleLowerCase() === "soap:" ? name.substring(5, name.length).toLocaleLowerCase() : name.substring(0, 2).toLocaleLowerCase() === "s:" ? name.substring(2, name.length).toLocaleLowerCase() : name;
}

function errorTagNameProcessor(name: string): string {
    return name.substring(0, 9).toLocaleLowerCase() === "ns2:fault" ? name.substring(4, name.length).toLocaleLowerCase() : name;
}

const defaultParserOptions = {
    explicitRoot: false, explicitArray: false, ignoreAttrs: true,
    tagNameProcessors: [tagNameProcessor, errorTagNameProcessor],
};

export class SoapService {
    private _url!: string;
    get url(): string {
        return this._url!;
    }
    set url(value: string) {
        const __url = Url.parse(value);
        this._url = `${__url.protocol}//${__url.host}${__url.pathname}`;
    }

    constructor(wsdlUrl?: string) {
        this.url = wsdlUrl!;
        debug("url:%s", this.url);
    }

    public invoke<T>(soapEnvelope: string, options?: any, extraHeaders?: any): Promise<T> {
        const headers = {
            "User-Agent": "request",
            "Content-Type": "text/xml;charset=UTF-8"
        };
        // Agrego los headers opcionales
        if (extraHeaders) {
            Object.keys(extraHeaders).forEach((key: string) => {
                const value: string = (<any>extraHeaders)[key];
                (<any>headers)[key] = value;
            });
        }
        debug("invoke;url:%s", this._url);
        debug("invoke;headers:%s", JSON.stringify(headers));
        debug("invoke;body:%s", soapEnvelope);
        const p = new Promise<T>((resolve, reject) => {
            return request.post({
                url: this._url,
                headers: headers,
                body: soapEnvelope
            }, (err, httpResponse, body) => {
                if (err) {
                    return reject(new BaseError(500, "http-action-error", "Ocurrio un error en una acción http", err));
                }
                const parser = new xml2js.Parser(defaultParserOptions);
                debug("invoke;httpResponse.statusCode:%s", httpResponse.statusCode);
                debug("invoke;body:%s", body);
                if (httpResponse.statusCode < 400) {
                    return parser.parseString(body, (err: any, result: any) => {
                        if (err) {
                            return reject(new BaseError(500, "xml-parser-error", "Error al procesar datos xml", err));
                        }
                        const r = <T>result.body;
                        debug("invoke;success;result:%s", JSON.stringify(r));
                        return resolve(r);
                    });
                } else {
                    return parser.parseString(httpResponse.body, (err: any, result: any) => {
                        if (err) {
                            return reject(new BaseError(500, "xml-parser-error", "Error al procesar datos xml", err));
                        }
                        debug("invoke;error;result:%s", JSON.stringify(result));
                        const r: SoapFault = <SoapFault>result.body || { fault: { statusCode: httpResponse.statusCode } };
                        r.fault.statusCode = httpResponse.statusCode;
                        return reject(new SoapFaultError(500, "soap-fault-error", "El servicio devolvió un error", r));
                    });
                }
            });
        });
        return p;
    }
}

