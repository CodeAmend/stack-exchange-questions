const { app, BrowserWindow } = require( 'electron' );
const path = require('path');

let win;

app.on( 'ready', () => {

  win = new BrowserWindow({ width: 800, height: 600 });

  win.loadURL("http://www.google.com")

  win.openDevTools();

  win.webContents.on('dom-ready', () => {

    win.webContents.executeJavaScript(`

      const data = require('${path.join(__dirname, 'data.json')}')

      console.log(data);
      
    `)

  })


  win.on('closed', ( ) => { win = null });
});

app.on( 'close', app.quit );
