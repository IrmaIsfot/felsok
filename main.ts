input.onButtonPressed(Button.A, function () {
    RingbitCar.running_distance(RingbitCar.Direction_run.forward, 2)
})
input.onButtonPressed(Button.B, function () {
	
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
led.plot(randint(0, 4), randint(0, 4))
basic.forever(function () {
	
})
