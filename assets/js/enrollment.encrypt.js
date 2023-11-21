
function sendEmail() {
	
	const fname = document.getElementById("name");
	const femail = document.getElementById("email");
	const ffirst = document.getElementById("parentFirst");
	const flast = document.getElementById("parentLast");
	const fcity = document.getElementById("city");
	const fstate = document.getElementById("state");
	const fzip = document.getElementById("zipcode");
	const fneeds = document.getElementById("tutoringNeeds");
	const flevel = document.getElementById("gradeLevel");
	const foften = document.getElementById("howOften");
	const fday = document.getElementById("tutorDay");
	
	let ebody = `
	Student Name: ${fname.value}<br/>
	Email: ${femail.value}<br/>
	Parent First Name: ${ffirst.value}<br/>
	Parent Last Name: ${flast.value}<br/>
	From City: ${fcity.value}<br/>
	From State: ${fstate.value}<br/>
	ZipCode: ${fzip.value}<br/>
	Why we need tutoring: ${fneeds.value}<br/>
	Grade Level: ${flevel.value}<br/>
	How Often we'd like tutoring: ${foften.value}<br/>
	Preferred Tutoring Day: ${fday.value}
	`
	
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "crobinson.atl@gmail.com",
        Password : "9778776A13A412CEBF6CA231139F01A0340A",
        To : 'iamchris.av@gmail.com',
        From : 'crobinson.atl@gmail.com',
        Subject : "New Enrollment from AddictivemathInc",
        Body : ebody
    }).then(
      message => alert("Enrollment Sent Succesfully")
    );
}