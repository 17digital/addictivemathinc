
function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "crobinson.atl@gmail.com",
        Password : "9778776A13A412CEBF6CA231139F01A0340A",
        To : 'crobinson.atl@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Enrollment from AddictivemathInc.",
        Body : "Student Name: " + document.getElementById("name".value)
                + "<br> Email: " + document.getElementById("email".value)
                + "<br> Parent First Name : " + document.getElementById("parentFirst".value)
                + "<br> Parent Last Name : " + document.getElementById("parentLast".value)
                + "<br> From City : " + document.getElementById("city".value)
                + "<br> From State : " + document.getElementById("state".value)
                + "<br> ZipCode : " + document.getElementById("zipcode".value)
                + "<br> Why we need tutoring : " + document.getElementById("tutoringNeeds".value)
                + "<br> Grade Level : " + document.getElementById("gradeLevel".value)
                + "<br> Howe Often we'd like tutoring : " + document.getElementById("howOften".value)
                + "<br> Preferred Tutoring Day : " + document.getElementById("tutorDay".value)
    }).then(
      message => alert("Enrollment Sent Succesfully")
    );
}