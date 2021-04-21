// import electron from 'electron'
const electron = require("electron");
const { app } = electron; // represent the overall running process of electron on our machine

// event-based programming
app.on("ready", () => {
    console.log("app is now ready");
});