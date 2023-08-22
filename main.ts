controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.rings)
    music.play(music.createSong(hex`0078000408020100001c00010a006400f40164000004000000000000000000000000000500000424000400080001290c001000012418001c00012520002400012028002c0001272c003000011e`), music.PlaybackMode.UntilDone)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    effects.bubbles.endScreenEffect()
})
let mySprite: Sprite = null
scene.setBackgroundColor(2)
game.splash("Touchdown!")
game.splash("")
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 . . . . 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . 3 3 3 . . 3 3 3 . . . . 
    . . . 3 3 . . . . . . 3 3 . . . 
    . . 3 3 . . . . . . . . 3 3 . . 
    . . 3 3 3 . . . . . . 3 3 3 . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
