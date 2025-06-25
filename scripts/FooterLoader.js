const footer = document.querySelector("footer");

// #footer-container
let footer_container = document.createElement("div");
footer_container.id = "footer-container";

// #about
let about_div = document.createElement("div");
about_div.id = "about";

let footer_logo = document.createElement("img");
footer_logo.src = "https://ishaqjunejo.github.io/images/Logo.png";

about_div.appendChild(footer_logo);

// #links-container
let links_container = document.createElement("div");
links_container.id = "links-container";

// #web-links
let web_links = document.createElement("div");
web_links.id = "web-links";

let web_heading = document.createElement("h3");
web_heading.innerHTML = "Links";

let web_list = document.createElement("ul");

let web_item_1 = document.createElement("li");
web_item_1.innerHTML= "<a href='https://ishaqjunejo.github.io/#'>Home</a>";

let web_item_2 = document.createElement("li");
web_item_2.innerHTML= "<a href='https://ishaqjunejo.github.io/Projects/'>Projects</a>";

let web_item_3 = document.createElement("li");
web_item_3.innerHTML= "<a href='https://ishaqjunejo.github.io/Archive/'>Archive</a>";

let web_item_4 = document.createElement("li");
web_item_4.innerHTML= "<a href='https://ishaqjunejo.github.io/Blogs/'>Blogs</a>";

web_list.appendChild(web_item_1);
web_list.appendChild(web_item_2);
web_list.appendChild(web_item_3);
web_list.appendChild(web_item_4);

web_links.appendChild(web_heading);
web_links.appendChild(web_list);

// #social-links
let social_links = document.createElement("div");
social_links.id = "social-links";

let social_heading = document.createElement("h3");
social_heading.innerHTML = "Socials";

let social_list = document.createElement("ul");

let social_item_1 = document.createElement("li");
social_item_1.innerHTML= "<a href='https://mij-games.itch.io'>Itch.io</a>";

let social_item_2 = document.createElement("li");
social_item_2.innerHTML= "<a href='https://www.linkedin.com/in/ishaque-junejo/'>LinkedIn</a>";

let social_item_3 = document.createElement("li");
social_item_3.innerHTML= "<a href='https://github.com/IshaqJunejo'>GitHub</a>";

let social_item_4 = document.createElement("li");
social_item_4.innerHTML= "<a href='https://x.com/mij_games'>Twitter</a>";

let social_item_5 = document.createElement("li");
social_item_5.innerHTML= "<a href='https://www.youtube.com/@mij_games'>YouTube</a>";

social_list.appendChild(social_item_1);
social_list.appendChild(social_item_2);
social_list.appendChild(social_item_3);
social_list.appendChild(social_item_4);
social_list.appendChild(social_item_5);

social_links.appendChild(social_heading);
social_links.appendChild(social_list);

links_container.appendChild(web_links);
links_container.appendChild(social_links);

footer_container.appendChild(about_div);
footer_container.appendChild(links_container);

// #copyright
let copyright_container = document.createElement("div");
copyright_container.id = "copyright";

copyright_notice = document.createElement("p");
copyright_notice.innerHTML = "Copyright &copy 2025 Ishaque Junejo | All Rights Reserved";

copyright_container.appendChild(copyright_notice);

footer.appendChild(footer_container);
footer.appendChild(copyright_container);