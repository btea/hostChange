const {app, BrowserWindow, Menu} = require('electron')  

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
    const handleOption = Menu.buildFromTemplate([
        {
            label: '点击',
            click() {
                alert('123')
            }
        }
    ]) // 构造MenuItem的选项数组。
    // 设置菜单
    // Menu.setApplicationMenu(null)
    Menu.setApplicationMenu(handleOption)
}
app.whenReady().then(createWindow)
