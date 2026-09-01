
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

    document.body.classList.toggle("dark-mode");

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

    if (localStorage.getItem("darkMode") === "enabled") {

        document.body.classList.add("dark-mode");

    }

});


/* =========================================
   SHOW / HIDE FAMILY INFORMATION
   ========================================= */

function showInfo() {

    let info = document.getElementById("extra");

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

    if (clockElement) {

        let date = new Date();

        clockElement.innerHTML = date.toLocaleTimeString();

    }

}

setInterval(clock, 1000);

clock();


/* =========================================
   CONTACT FORM VALIDATION
   ========================================= */

function validateForm() {

    let form = document.forms["contact"];

    if (!form) {

        return false;

    }


    let name = form["name"].value.trim();

    let email = form["email"].value.trim();

    let message = form["message"].value.trim();


    if (name === "" || email === "" || message === "") {
alert(
    "Thank you, " + name +
    "! Your message has been sent successfully."
);

        return false;

    }


    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return false;

    }


    alert(
        "Thank you, " + name +
        "! Your message has been sent successfully."
    );


    return false;

}


/* =========================================
   HOBBIES SLIDESHOW
   ========================================= */

/* Six hobby pictures */

let hobbyImages = [

    "images/Heckathon.jpeg",

    "images/TeckomPresent.jpeg",

    "images/Events.jpeg",

    "images/NYDA EVENt.jpeg",

    "images/Networking Events.jpeg",

    "images/HeckathonPresentation.jpeg"

];


/* Six hobby titles */

let hobbyTitles = [

    "Coding",

    "Attending Hackathons",

    "Attending Tech Events",

    "Attending Workshops",

    "Networking",

    "Technology Presentations"

];


/* Six hobby descriptions */

let hobbyDescriptions = [

    "I enjoy coding and creating useful applications.",

    "I enjoy attending hackathon events to learn about new technologies in the industry.",

    "I enjoy attending tech events for networking with seniors and tech mentors.",

    "I love attending workshops because they help me gain new skills and knowledge.",

    "I enjoy networking events because they allow me to meet new people and connect with professionals.",

    "I enjoy technology presentations because they help me learn and overcome my fear of public speaking."

];


/* Start with picture 1 */

let currentHobby = 0;


/* =========================================
   SHOW CURRENT HOBBY
   ========================================= */

function showHobby() {

    let image = document.getElementById("hobbyImage");

    let title = document.getElementById("hobbyTitle");

    let description = document.getElementById("hobbyDescription");

    let number = document.getElementById("slideNumber");


    if (image) {

        image.src = hobbyImages[currentHobby];

        image.alt = hobbyTitles[currentHobby];

    }


    if (title) {

        title.innerHTML = hobbyTitles[currentHobby];

    }


    if (description) {

        description.innerHTML = hobbyDescriptions[currentHobby];

    }


    if (number) {

        number.innerHTML =
            "Picture " + (currentHobby + 1) + " of 6";

    }

}


/* =========================================
   NEXT PICTURE
   ========================================= */

function nextHobby() {

    currentHobby++;

    if (currentHobby >= hobbyImages.length) {

        currentHobby = 0;

    }

    showHobby();

}


/* =========================================
   PREVIOUS PICTURE
   ========================================= */

function previousHobby() {

    currentHobby--;

    if (currentHobby < 0) {

        currentHobby = hobbyImages.length - 1;

    }

    showHobby();

}


/* =========================================
   AUTOMATIC SLIDESHOW
   ========================================= */

/* Change picture every 4 seconds */

setInterval(function () {

    if (document.getElementById("hobbyImage")) {

        nextHobby();

    }

}, 4000);