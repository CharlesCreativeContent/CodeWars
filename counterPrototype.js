/*
Our counter prototype is broken. Can you spot, what's wrong here?
*/

//Answer//

this.value = 0;
function Counter() {
}

Counter.prototype.increase = () => this.value++
Counter.prototype.getValue = () => this.value
Counter.prototype.reset = () => this.value = 0
