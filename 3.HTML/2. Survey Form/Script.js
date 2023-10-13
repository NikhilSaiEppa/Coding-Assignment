function submitForm() {

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    var missingFields = [];

    if (firstName === "") {
        missingFields.push("First Name");
    }
    if (lastName === "") {
        missingFields.push("Last Name");
    }
    if (dob === "") {
        missingFields.push("Date of Birth");
    }
    if (country === "") {
        missingFields.push("Country");
    }
    if (!male && !female) {
        missingFields.push("Gender");
    }
    if (profession === "") {
        missingFields.push("Profession");
    }
    if (email === "") {
        missingFields.push("Email");
    }
    if (mobile === "") {
        missingFields.push("Mobile Number");
    }

    if (missingFields.length > 0) {
        
        alert("The following fields are mandatory and must be filled in:\n\n" + missingFields.join("\n"));
    } else {

        document.getElementById("popup-firstname").textContent = firstName;
        document.getElementById("popup-lastname").textContent = lastName;
        document.getElementById("popup-dob").textContent = dob;
        document.getElementById("popup-country").textContent = country;
        var genderText = (male ? "Male" : "") + (male && female ? " and " : "") + (female ? "Female" : "");
        document.getElementById("popup-gender").textContent = genderText;
        document.getElementById("popup-profession").textContent = profession;
        document.getElementById("popup-email").textContent = email;
        document.getElementById("popup-mobile").textContent = mobile;


        document.getElementById("popup").style.display = "block";
    }
}

function closePopup() {

    document.getElementById("popup").style.display = "none";

    if (document.getElementById("firstName").value &&
        document.getElementById("lastName").value &&
        document.getElementById("dob").value &&
        document.getElementById("country").value &&
        (document.getElementById("male").checked || document.getElementById("female").checked) &&
        document.getElementById("profession").value &&
        document.getElementById("email").value &&
        document.getElementById("mobile").value) {
        document.getElementById("surveyForm").reset();
    }
}
