fx_version 'cerulean'
games { 'gta5' }

author 'L0tyz'
description 'End of Watch - Loading Screen'
version '1.0.0'

loadscreen 'index.html'
loadscreen_cursor 'yes'

files {
    'index.html',
    'logo.png',
    'style.css',
    'script.js',
    'songs.js',
    'video/background.mp4',
    'audio/*.mp3',
    'cover/*.png',
}

--loadscreen_manual_shutdown 'yes'

client_script 'client.lua'
