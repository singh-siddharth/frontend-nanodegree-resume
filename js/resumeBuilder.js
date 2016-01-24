var bio= {
	"name" : "Siddharth Kumar Singh",
	"role" : "B.Tech, Computer Science and Engineering, IIT JODHPUR",
	"Contacts": {
		"mobile":  '<br><b><li class="flex-item"><span class="orange-text">MOBILE :</span><span class="white-text">987-380-6518</span></li><br>',
		"email" : '<b><li class="flex-item"><span class="orange-text">EMAIL  :</span><span class="white-text">siddharthsingh@iitj.ac.in</span></li><br>',
		"github": '<b><li class="flex-item"><span class="orange-text">GITHUB :</span><span class="white-text"><a href="https://github.com/singh-siddharth">singh-siddharth</a></span></li><br>',
		"twitter": HTMLtwitter.replace("%data%","@dilli_wala"),
		"location": '<b><li class="flex-item"><span class="orange-text">LOCATION :</span><span class="white-text"><a href="www.facebook.com/htrahddis.ramuk">New Delhi</a></span></li><br> </b>'
	},
	"welcoleMessage": " Happy Coding!!",
	"skills" : [
		"awesome", "coding","sleeping","quoracious","whatever"],
	"bioPic": "images/J.jpg"
};

var helpername = HTMLheaderName.replace("%data%","SIDDHARTH KUMAR SINGH");
var helperrole = HTMLheaderRole.replace("%data%",bio.role);
var bioPic = HTMLbioPic.replace("%data%",bio.bioPic);
var tashan = HTMLskills.replace("%data%",bio.skills);
var intern = {
	"Company": "Codeigniton Softwares solutions Pvt Ltd",
	"Duration": "3 months",
}

$("#header").prepend(helperrole);
$("#header").prepend(helpername);
$("#header").append(bioPic);
$("#topContacts").append(bio.Contacts.mobile);
$("#topContacts").append(bio.Contacts.email);
$("#topContacts").append(bio.Contacts.github);
$("#topContacts").append(bio.Contacts.twitter);
$("#topContacts").append(bio.Contacts.location);
$("#header").append(HTMLskillsStart);
for(skill in bio.skills)
$("#header").append(HTMLskills.replace("%data%",bio.skills[skill]));
$("#workExperience").append(HTMLworkStart);

for(works in intern){
	$("#workExperience").append(HTMLworkEmployer.replace("%data%",intern[works]));
	}





































/* 
var email ="siddharth@iitj.ac.in";
var newmail = email.replace("iitj","gmail");
console.log(email);
console.log(newmail);

var awesome = "hey awesome siddharth you are awesome";
var some = awesome.replace("awesome", "fadoo");
console.log(some);
console.log(awesome);

$("#main").append(some); */
/*
var name = "siddharth";
var role = "coder";

var bio = {
	"name" : "Siddharth",
	"Contact" : "\n 9873806518 \n ",
	"message" : "HI, I need JOB , I WORK HARD",
	"skills" : "AWESOMENESS",
	"pic" : "images/fry.jpg"
}

$("#header").append(bio.Contact);

var work ={};

work.currentjob = "NIL";
work.employer = "nobody";
work.years = 0;
work.city = "Delhi";

var edcation={};

education["school"]= "IITJ";
education["name"]= "crpf";

$("#header").append(work["years"]);
$("#header").append(education.name);

var something = {
	{
		"name": "siddharth",
		"place": "delhi",
		"animal": "dog",
	},
	{
		"name": "brrrup",
		"place": "pune";
		"animal": "cats"
	}
}

*/