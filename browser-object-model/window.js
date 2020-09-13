// window
document.write(
  "<br/>" +
    "############################# WINDOW OBJECT ##########################" +
    "<br/>"
);

// global variable
var x = 15;
document.write("<br/>" + "Value of x is: " + window.x + "<br/>");

// global function
function y() {
  document.write("<br/>" + "Using global function: " + window.x + "<br/>");
}
window.y();

// alert
// window.alert("This is a test alert !");

// confirm
// window.confirm("Are you sure ?");

// prompt
// var name = window.prompt("Please enter your name");
// document.write("Name: " + name);

// Width & Height of browser window
document.write("<br/>" + "Window width: " + window.innerWidth + "<br/>");
document.write("Window height: " + window.innerHeight + "<br/>");

// Width & Height of browser window including scrollbar and toolbar
document.write("<br/>" + "Window outer width: " + window.outerWidth + "<br/>");
document.write("Window outer height: " + window.outerHeight + "<br/>");

// Set window name
window.name = "Manu";
document.write("<br/>" + "Window name: " + window.name + "<br/>");

// Close window
// window.close();

// Open new window
// var udemyWindow = window.open(
//   "https://www.udemy.com",
//   "Udemy window",
//   "width=200,height=200"
// );

// resize to
// udemyWindow.resizeTo(450, 450);

//move to
// udemyWindow.moveTo(350, 200);

// window.document
// window.screen
// window.navigator
// window.history
// window.location

// setTimeout
let sayHello = () => {
  alert("Helo world");
};
// window.setTimeout(sayHello, 2000);
let sto = setTimeout(sayHello, 2000);
clearTimeout(sto);

// setInterval
// window.setInterval(sayHello, 2000);
let sint = setInterval(sayHello, 2000);
clearInterval(sint);
