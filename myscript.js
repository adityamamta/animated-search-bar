"use strict"

const btn = document.querySelector(".btn");
const inputF = document.querySelector(".input-f");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    inputF.classList.toggle("active");
})
