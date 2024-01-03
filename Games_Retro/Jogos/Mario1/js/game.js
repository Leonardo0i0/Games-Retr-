kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,
    clearColor: [0,0,0,1]
})

loadRoot('https://i.imgur.com/');

loadSprite('bloco', 'M6rwarw.png')

screen("game", ()=>{
     layer(["bg","obj","ui"],"obj")

     const map = [
        '                                ',
        '                                ',
        '                                ',
        '                                ',
        '                                ',
        '                                ',
        '                                ',
        '                                ',
        '                                ',
        '                                ',
        '================================',
     ]
     const levelCfg = {
        width: 20,
        height: 20,
        '=':[sprite('bloco'), solid()]
     }

     const gameLevel = addLevel(map, levelCfg)
})

go("game")