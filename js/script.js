
/* =========================================
   WELCOME MESSAGE
   ========================================= */

window.addEventListener("load", function () {

    alert("Welcome to my Personal Portfolio Website!");

});


/* =========================================
   DARK MODE
   ========================================= */

function darkMode() {

    // Turn Dark Mode on or off
    document.body.classList.toggle("dark-mode");

    // Save the user's choice
    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("darkMode", "enabled");

    } else {

        localStorage.setItem("darkMode", "disabled");

    }

}


/* =========================================
   LOAD DARK MODE ON EVERY PAGE
   ========================================= */

window.addEventListener("DOMContentLoaded", function () {

    // Check if the user previously selected Dark Mode
    if (localStorage.getItem("darkMode") === "enabled") {

        document.body.classList.add("dark-mode");

    }

});


/* =========================================
   SHOW / HIDE FAMILY INFORMATION
   ========================================= */

function showInfo() {

    let info = document.getElementById("extra");

    // Make sure the element exists
    if (info) {

        if (info.style.display === "none") {

            info.style.display = "block";

        } else {

            info.style.display = "none";

        }

    }

}


/* =========================================
   DIGITAL CLOCK
   ========================================= */

function clock() {

    let clockElement = document.getElementById("clock");

    // Check that the clock exists on the page
    if (clockElement) {

        let date = new Date();

        clockElement.innerHTML = date.toLocaleTimeString();

    }

}

// Run the clock every second
setInterval(clock, 1000);

// Display the clock immediately
clock();


/* =========================================
   CONTACT FORM VALIDATION
   ========================================= */

function validateForm() {

    let form = document.forms["contact"];

    // Check that the form exists
    if (!form) {

        return false;

    }

    let name = form["name"].value.trim();
    let email = form["email"].value.trim();
    let message = form["message"].value.trim();


    // Check if fields are empty
    if (name === "" || email === "" || message === "") {

        alert("Please fill in all fields.");

        return false;

    }


    // Check if the email is valid
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return false;

    }


    // Successful submission message
    alert("Thank you, " + name + "! Your message has been sent successfully.");

    /*
       Returning false prevents the page from refreshing.
       This is useful because we are not sending the form
       to a real server.
    */

    return false;

}
