let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(60)
strip.showRainbow(1, 360)
basic.forever(function () {
    robotbit.MotorRun(robotbit.Motors.M1A, 150)
    strip.rotate(1)
    strip.show()
    basic.pause(200)
})
