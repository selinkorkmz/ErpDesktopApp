// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            // if you’re not using a preload.js yet, you can remove this line:
            // preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
        }
    });
    win.loadFile('index.html');
}



app.whenReady().then(createWindow);
