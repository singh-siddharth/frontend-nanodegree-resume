

/*
$("#main").append("Siddharth singh");.

This is empty on purpose! Your code to build the resume will go here.
 */
/* $("#main").append("SKSbskksj");
var email ="siddharth@iitj.ac.in";
var newmail = email.replace("iitj","gmail");
console.log(email);
console.log(newmail);

var awesome = "hey awesome siddharth you are awesome";
var some = awesome.replace("awesome", "fadoo");
console.log(some);
console.log(awesome);

$("#main").append(some); */
var name = "siddharth";
var role = "coder";
var helpername = HTMLheaderName.replace("%data%","SIDDHARTH KUMAR SINGH");
var helperrole = HTMLheaderRole.replace("%data%","FULL STACK DEVELPOER");
$("#header").append(helpername);
$("#header").append(helperrole);
var bio = {
	"name" : "Siddharth",
	"Contact" : "\t \t \t \t 9873806518",
	"message" : "HI, I need JOB , I WORK HARD",
	"skills" : "AWESOMENESS",
	"pic" : "images/fry.jpg"
}

$("#header").append(bio.Contact);


//console.log(helpername);
//console.log(helperrole);
