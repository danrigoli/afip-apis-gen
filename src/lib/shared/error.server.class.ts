/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export class BaseError extends Error {
    public code: number;
    public id: string;
    public extra: any;
    // public message: string;
    constructor(code: number, id: string, message: string, extra: any) {
        super();
        Object.setPrototypeOf(this, BaseError.prototype);
        this.message = message;
        this.name = this.constructor.name;
        this.id = id;
        this.code = code;
        this.extra = extra;
        Error.captureStackTrace(this, this.constructor);
    }
    getJson(): {
        name: string;
        id: string;
        code: number;
        message: string;} {
        return {
            name: this.name,
            id: this.id,
            code: this.code,
            message: this.message,
        };
    }
}
