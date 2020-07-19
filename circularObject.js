/*
Define a circular object circular such that the following are true:

circular.value === "Hello World"
circular === circular.self
circular.self === circular.self.self
... and so on.

NOTE: The code above is pseudocode. If you actually tested your circular object like this with equality or identity operators, it would not work as object literals do not have an intrinsic value.
*/

//Answer//

class Circular {
  constructor() {
    this.value = "Hello World";
    this.self = this;
  }
}

circular = new Circular();
