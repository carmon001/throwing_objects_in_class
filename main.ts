function hero () {
    wario = sprites.create(img`
. . 5 5 5 5 5 5 5 5 5 5 . . . . 
. . e e e d d d f d . . . . . . 
. e d e d d d d f d 3 3 . . . . 
. e d e e d d d d f 3 3 3 . . . 
. e e d d d d d f f f f . . . . 
. . . d d d d d d d d . . . . . 
. . 5 5 c 5 5 c 5 5 . . . . . . 
. 5 5 5 c 5 5 c 5 5 5 . . . . . 
5 5 5 5 c 5 5 c 5 5 5 5 . . . . 
d d 5 c 1 c c 1 c 5 d d . . . . 
d d d c c c c c c d d d . . . . 
d d c c c c c c c c d d . . . . 
. . c c c c c c c c . . . . . . 
. . c c c . . c c c . . . . . . 
. 7 7 7 . . . . 7 7 7 . . . . . 
7 7 7 7 . . . . 7 7 7 7 . . . . 
`, SpriteKind.Player)
    wario.setPosition(140, 101)
}
function cloud () {
    cloud2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 6 6 . . . . . 
. . . . . . . . 6 1 1 6 . . . . 
. . . . . . . 6 1 1 1 1 6 6 . . 
. . . . . . 6 1 1 1 1 1 1 9 6 . 
. . . . 6 6 9 1 1 1 1 1 1 9 6 . 
. 6 6 6 1 1 1 9 1 1 1 1 9 1 9 6 
6 9 1 1 1 1 9 9 9 9 9 9 1 1 9 6 
6 9 9 9 9 9 9 9 9 9 9 9 9 9 6 . 
. 6 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 50, 100)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectileyy = 0
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. f f f f f f f f f f f f f . . 
. 5 f 1 1 f f f f 1 1 f f 5 . . 
. 5 f 1 f f f 5 f 1 f f f 5 . . 
. 5 5 f f f 5 5 5 f f f 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 f f f f 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, wario, 0, -50)
})
function raindrop () {
    rain = sprites.createProjectileFromSprite(img`
. . . . . . . 6 6 6 . . . . . . 
. . . . . . 6 6 6 6 6 . . . . . 
. . . . . 6 6 6 6 6 6 6 . . . . 
. . . . 6 6 6 6 6 6 6 6 6 . . . 
. . . 6 6 6 6 6 6 6 6 6 6 6 . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
. . 6 6 f f 6 6 6 6 6 f f 6 6 . 
. . 6 f 6 6 f 6 6 6 f 6 6 f 6 . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
. . 6 3 3 6 6 6 6 6 6 6 3 3 6 . 
. . 6 6 6 6 f 6 6 6 f 6 6 6 6 . 
. . 6 6 6 6 6 f f f 6 6 6 6 6 . 
. . . 6 6 6 6 6 6 6 6 6 6 6 . . 
. . . 6 6 6 6 6 6 6 6 6 6 6 . . 
. . . . 6 6 6 6 6 6 6 6 6 . . . 
. . . . . . 6 6 6 6 6 . . . . . 
`, cloud2, 50, 100)
    rain.y += 3
    rain.x += Math.randomRange(0, 10)
}
let rain: Sprite = null
let projectile: Sprite = null
let projectileyy = 0
let cloud2: Sprite = null
let wario: Sprite = null
hero()
game.onUpdateInterval(1000, function () {
	
})
