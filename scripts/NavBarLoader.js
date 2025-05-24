const navBar = document.querySelector("nav");

//
let divSection = document.createElement("div");
divSection.classList.add("logo");

let linkHome = document.createElement("a");
linkHome.href = "https://ishaqjunejo.github.io/#";

let logo = document.createElement("img");
logo.src = "https://ishaqjunejo.github.io/images/Logo.png";
logo.alt = "Home-Page";

linkHome.appendChild(logo);
divSection.appendChild(linkHome);

//
let list = document.createElement("ul");

let item0 = document.createElement("li");
item0.id = "bars";
item0.innerHTML = "<i class='fa fa-bars' onclick='NavBar()'></i>";

let item1 = document.createElement("li");
item1.classList.add("nav-links");
item1.innerHTML = "<a href='https://ishaqjunejo.github.io/#' onclick='CloseNav()'>Home</a>";

let item2 = document.createElement("li");
item2.classList.add("nav-links");
item2.innerHTML = "<a href='https://ishaqjunejo.github.io/#about-me' onclick='CloseNav()'>About Me</a>";

let item3 = document.createElement("li");
item3.classList.add("nav-links");
item3.innerHTML = "<a href='https://ishaqjunejo.github.io/#projects' onclick='CloseNav()'>Project</a>";

let item4 = document.createElement("li");
item4.classList.add("nav-links");
item4.innerHTML = "<a href='https://ishaqjunejo.github.io/#blogs' onclick='CloseNav()'>Blogs</a>";

list.appendChild(item0);
list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);
list.appendChild(item4);

// 
navBar.appendChild(divSection);
navBar.appendChild(list);