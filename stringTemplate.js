/*
Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
*/

//Answer//

function buildString(...template){
  return `I like ${template.join(', ')}!`;
}
