/* eslint-disable */
const fs = require("fs");
const path = require("path");

// Path to your settings.json file
const settingsDirectoryPath = "./.vscode";
const settingsFilePath = path.join(settingsDirectoryPath, "settings.json");

// Ensure .vscode directory exists
if (!fs.existsSync(settingsDirectoryPath)) {
    fs.mkdirSync(settingsDirectoryPath);
}

// Ensure settings.json file exists and parse it safely
let settings = {};
if (fs.existsSync(settingsFilePath)) {
    try {
        settings = JSON.parse(fs.readFileSync(settingsFilePath, "utf8"));
    } catch (err) {
        console.error("Error parsing settings.json: ", err);
        // Handle error as needed, e.g., exit the script
        process.exit(1);
    }
} else {
    fs.writeFileSync(settingsFilePath, JSON.stringify(settings));
}

// Ensure a file named "root" exists
const rootFileName = "./root";
if (!fs.existsSync(rootFileName)) {
    fs.writeFileSync(rootFileName, "");
}

// Ensure that the "explorer.fileNesting.enabled" is set to true
if (!settings["explorer.fileNesting.enabled"]) {
    settings["explorer.fileNesting.enabled"] = true;
}

// Ensure that the "explorer.fileNesting.expand" is set to false, unless it already exists and is true
if (settings["explorer.fileNesting.expand"] !== true) {
    settings["explorer.fileNesting.expand"] = false;
}

// Ensure that the "explorer.fileNesting.patterns" object and "root" key exist
if (!settings["explorer.fileNesting.patterns"]) {
    settings["explorer.fileNesting.patterns"] = {};
}
if (!settings["explorer.fileNesting.patterns"]["root"]) {
    settings["explorer.fileNesting.patterns"]["root"] = "";
}

// Read all files in the root directory
const rootFiles = fs.readdirSync("./");

// Filter out directories and 'root' file, if any
const rootFileNames = rootFiles.filter(
    (file) => fs.lstatSync(file).isFile() && file !== "root",
);

// Construct the value for the "root" key
const rootGroupValue = rootFileNames.join(", ");

// Update the "root" key in the settings object
settings["explorer.fileNesting.patterns"]["root"] = rootGroupValue;

// Write settings back to the settings.json file
fs.writeFileSync(settingsFilePath, JSON.stringify(settings, null, 2));