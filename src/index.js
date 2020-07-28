import "./client/styles/main.scss"

import React from "react";
import ReactDOM from "react-dom";
import App from "./client/components/App";

ReactDOM.render( < App / > , document.getElementById("root"));

const skillsList = document.querySelectorAll(".skills-icon");

for (var i = 0; i < skillsList.length; i++) {
    skillsList[i].addEventListener("mouseenter", function (event) {
        //highlight the mouseenter target
        event.target.classList.add("colored");
        event.target.style.transform = "scale(1.90)";
    });
    skillsList[i].addEventListener("mouseleave", function (event) {
        // highlight the mouseenter target
        event.target.classList.remove("colored");
    });
}



const myNavBar = document.getElementById('nav-bar');
const navItems = document.querySelectorAll(".nav-item");

for (var j = 0; j < navItems.length; j++) {
    navItems[j].addEventListener("click", function (event) {
        if (event.target.nodeName.toLowerCase() !== 'a') {
            const sectionID = event.target.children[0].getAttribute('href').slice(1);
            const sectionBox = document.getElementById(sectionID);
            console.log(myNavBar.offsetHeight-10);
            const height = sectionBox.offsetTop - myNavBar.offsetHeight - 30;

            // eslint-disable-next-line no-restricted-globals
            scrollTo({
                top: height,
                behavior: 'smooth'
            });
        }
    });
}

{/* 
document.getElementById('book-recommend').addEventListener("click", function(){
     document.getElementById("myModal").style.display= "block";
 });

 document.getElementById('modal_close').addEventListener("click", function(){
     document.getElementById("myModal").style.display= "none";
 }); */}