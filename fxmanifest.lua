fx_version 'cerulean'
games { 'gta5' }

author 'L0tyz'
description 'End of Watch - Loading Screen'
version '1.0.0'

loadscreen 'index.html'

files {
    'index.html',
    'logo.png',
    'style.css',
    'script.js',
    'songs.js',
    'video/background.mp4',
    'audio/music.mp3',
    'audio/covers/*'    -- images de pochette (jpg, png, webp...)
}

--loadscreen_manual_shutdown 'yes'

client_script 'client.lua'
