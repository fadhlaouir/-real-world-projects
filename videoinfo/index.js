// import electron from 'electron'
const electron = require("electron");
const { app, BrowserWindow } = electron; // represent the overall running process of electron on our machine

// event-based programming
app.on("ready", () => {
    const mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});