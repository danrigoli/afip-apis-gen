const del = require("del");
(async () => {
  const distPath = await del (["./dist/**"]);
  console.log('Deleted files and folders:\n', distPath.join('\n'));
})();
