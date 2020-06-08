/*
Here we have a function that help us spam our hearty laughter. But is not working! I need you to find out why...

Expected results:

spam(1);  // hue
spam(6);  // huehuehuehuehuehue
spam(14); // huehuehuehuehuehuehuehuehuehuehuehuehuehue
*/

//Answer//

function spam(number){
  return Array(++number).join("hue");
}

//OR//

function spam(number){
  return "hue".repeat(number);
}
