servos.P1.setRange(60, 150)
let etatactuel = 0
let etatpasse = 0
basic.forever(function () {
    etatactuel = pins.digitalReadPin(DigitalPin.P0)
    if (etatactuel != etatpasse) {
        if (etatactuel == 1) {
            servos.P1.setAngle(60)
            basic.pause(2000)
        }
    } else {
        servos.P1.setAngle(150)
    }
})
