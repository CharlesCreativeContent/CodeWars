/*
Your task is simple, search the password string for any injected code (Injected code is any thing that would be used to exploit flaws in the current code, so basically anything that contains || or //) if you find any you must return "Wrong username or password!" because no one likes someone trying to cheat their way in!

Preloaded
You will be given a preloaded class called Database with a method login this takes two parameters username and password. This is a generic login function which will check the database for the user it will return either 'Successfully Logged in!' if it passes the test or 'Wrong username or password!' if either the password is wrong or username does not exist.

Usage
var database = new Database();
database.login('Timmy', 'password');
*/

//Answer//

function validate(u, p){
  var database = new Database();
  return p.includes('//')||p.includes('||')?'Wrong username or password!':database.login(u, p);
}
