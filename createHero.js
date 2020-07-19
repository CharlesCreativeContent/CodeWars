/*
In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

attribute	value
name	user argument or 'Hero'
position	'00'
health	100
damage	5
experience	0
*/

//Answer//

function Hero (name='Hero') {
this.name=name
this.position ='00'
this.health = 100
this.damage =5
this.experience=0
}
