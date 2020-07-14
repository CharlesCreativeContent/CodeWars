/*
Create a class Ball.

Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
*/

//Answer//

var Ball = function(ballType) {
  this.ballType = ballType || 'regular';
};

//OR//

var Ball = function(ballType) {
return ballType?{ballType: 'super'} :{ballType:'regular'}
};
