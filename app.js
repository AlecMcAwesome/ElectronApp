const {
  app,
  BrowserWindow
} = require('electron');
const path = require('path');
const url = require('url');

let win;

// creates new window for app
function createWindow() {

  // set size of app window
  win = new BrowserWindow({width: 1600, height: 1200});

  win.loadURL(url.format({
    pathname: path.join(__dirname, '/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  })
}

  app.on('ready', createWindow);

  app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  })

  app.on('activate', () => {
    if(win == null){
      createWindow()
    }
  })
