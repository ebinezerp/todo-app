const {app,BrowserWindow}=require('electron');

let win;

function createWindow()
{
    win=new  BrowserWindow({
        width: 320,
        height:640,

    })

    win.loadURL('E://todo_application/todoapp/dist/todoapp/index.html');

    win.on('close',function(){
        win=null;
    })
}

app.on('ready',createWindow);

app.on('window-all-closed',function(){


    if(process.platform!=='darwin')
    {
        app.quit();
    }
})


app.on('activate',function(){
    if(win==null)
    {
            createWindow();
    }
})