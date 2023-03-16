input.onButtonPressed(Button.A, function () {
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 360)
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 360)
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
led.plot(randint(0, 4), randint(0, 4))
basic.forever(function () {
	
})
