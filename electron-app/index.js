const { app, BrowserWindow } = require("electron/main");
const path = require("node:path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  const starturl = "http://localhost:3000";
  if (starturl) {
    mainWindow.loadURL(starturl);
  } else {
    mainWindow.loadFile("index.html");
  }
  mainWindow.on("closed", () => (mainWindow = null));
}
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
