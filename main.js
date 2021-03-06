'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
//var globalShortcut = require('global-shortcut');
//var configuration = require('./configuration');
var ipc = require('ipc');

var mainWindow = null;
var settingsWindow = null;

app.on('ready', function() {
    //if (!configuration.readSettings('shortcutKeys')) {
    //    configuration.saveSettings('shortcutKeys', ['ctrl', 'shift']);
    //}
  // gray color: BABCBE
  mainWindow = new BrowserWindow({
    frame: false,
    height: 300,
    resizable: true,
    width: 200
  });

  mainWindow.loadUrl('file://' + __dirname + '/MyApp/index.html');

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
  // Dereference the window object, usually you would store windows
  // in an array if your app supports multi windows, this is the time
  // when you should delete the corresponding element.
    mainWindow = null;
  });
    //setGlobalShortcuts();
});

/*function setGlobalShortcuts() {
    globalShortcut.unregisterAll();

    var shortcutKeysSetting = configuration.readSettings('shortcutKeys');
    var shortcutPrefix = shortcutKeysSetting.length === 0 ? '' : shortcutKeysSetting.join('+') + '+';

    globalShortcut.register(shortcutPrefix + '1', function () {
        mainWindow.webContents.send('global-shortcut', 0);
    });
    globalShortcut.register(shortcutPrefix + '2', function () {
        mainWindow.webContents.send('global-shortcut', 1);
    });
}*/

ipc.on('close-main-window', function () {
    app.quit();
});
/*
ipc.on('open-settings-window', function () {
    if (settingsWindow) {
        return;
    }

    settingsWindow = new BrowserWindow({
        frame: false,
        height: 300,
        resizable: true,
        width: 200
    });

    settingsWindow.loadUrl('file://' + __dirname + '/app/settings.html');

    settingsWindow.on('closed', function () {
        settingsWindow = null;
    });
});
*/

/*
ipc.on('close-settings-window', function () {
    if (settingsWindow) {
        settingsWindow.close();
    }
});


ipc.on('set-global-shortcuts', function () {
    setGlobalShortcuts();
});
*/
