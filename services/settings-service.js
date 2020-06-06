const fs = require("fs");
const path = require("path");
const settingsFilePath = path.join(__dirname, "../json/settings.json");
function getSettings() {
  const settingsDate = fs.readFileSync(settingsFilePath);
  return JSON.parse(settingsDate);
}

function writeSettings(newSettings) {}

function getDefaultDir() {}

function isValidDir(dirPath) {}

module.exports = {
  getSettings,
  writeSettings,
  getDefaultDir,
  isValidDir,
};
