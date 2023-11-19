
function sendEmail() {
    Email.send({
        SecureToken : "1d84be5b-3654-4cb8-8068-21e3db7504d8",
        To : 'iamchris.av@gmail.com',
        From : 'crobinson.atl@gmail.com',
        Subject : "New Enrollment from AddictivemathInc",
        Body : "Student Name: " + document.getElementById("name".value)
                + "<br> Email: " + document.getElementById("email".value)
                + "<br> Parent First Name : " + document.getElementById("parentFirst".value)
                + "<br> Parent Last Name : " + document.getElementById("parentLast".value)
                + "<br> From City : " + document.getElementById("city".value)
                + "<br> From State : " + document.getElementById("state".value)
                + "<br> ZipCode : " + document.getElementById("zipcode".value)
                + "<br> Why we need tutoring : " + document.getElementById("tutoringNeeds".value)
                + "<br> Grade Level : " + document.getElementById("gradeLevel".value)
                + "<br> How Often we'd like tutoring : " + document.getElementById("howOften".value)
                + "<br> Preferred Tutoring Day : " + document.getElementById("tutorDay".value)
    }).then(
      message => alert("Enrollment Sent Succesfully")
    );
}