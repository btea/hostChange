const {app, BrowserWindow} = require('electron')  

function createWindow() {
    // 创建浏览器窗口
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('index.html')

    // 打开开发者工具
    // win.webContents.openDevTools()
}
app.whenReady().then(createWindow)