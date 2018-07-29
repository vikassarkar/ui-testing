const EasyZip = require("easy-zip").EasyZip;
const zip = new EasyZip();
zip.zipFolder(folderName, function () {
    zip.writeToFile((folderName + ".zip"));
});