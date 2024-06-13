// auth.js 
// Reference to Firebase Auth
const auth = firebase.auth();

// Login Functionality
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard or any other page
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  });

// Registration Functionality
document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up
        alert("Registration successful!");
        window.location.href = "login.html"; // Redirect to login page or any other page
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  });

const firebaseConfig = {
  apiKey: "AIzaSyBEc0xWj8d69t38JsiZ6fyVaLtaX_VlMkM",
  authDomain: "firedemo-77164.firebaseapp.com",
  projectId: "firedemo-77164",
  storageBucket: "firedemo-77164.appspot.com",
  messagingSenderId: "74526769988",
  appId: "1:74526769988:web:25e14c236a7f9f70c7cd11",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  // document.querySelector(".alert").style.display = "block";

  // //   remove the alert
  // setTimeout(() => {
  //   document.querySelector(".alert").style.display = "none";
  // }, 3000);

  // //   reset the form
  // document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

// index.js
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 70);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("open");
};

// dark theme
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-theme");
}

// Modal window
let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}

// slider
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
  showSlide(currentSlide + step);
}

showSlide(currentSlide);

// login.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEc0xWj8d69t38JsiZ6fyVaLtaX_VlMkM",
  authDomain: "firedemo-77164.firebaseapp.com",
  projectId: "firedemo-77164",
  storageBucket: "firedemo-77164.appspot.com",
  messagingSenderId: "74526769988",
  appId: "1:74526769988:web:25e14c236a7f9f70c7cd11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Logging in...");
      window.location.href = "index.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});

// registration.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEc0xWj8d69t38JsiZ6fyVaLtaX_VlMkM",
  authDomain: "firedemo-77164.firebaseapp.com",
  projectId: "firedemo-77164",
  storageBucket: "firedemo-77164.appspot.com",
  messagingSenderId: "74526769988",
  appId: "1:74526769988:web:25e14c236a7f9f70c7cd11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Creating Account...");
      window.location.href = "index.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
