for (let index = 0; index < 5; index++) {
    basic.showString("Jump")
    basic.pause(500)
    basic.clearScreen()
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
    }
}
