navigation = document.querySelector("nav");
navItems = document.querySelectorAll(".nav-links");

function NavBar()
{
    navItems.forEach(item => {
        if (item.style.display === "inline-block")
        {
            setTimeout(() =>
            {
                item.style.display = "none";
                navigation.style.height = "inherit";
                navigation.querySelector("ul").style.height = "inherit";
                navigation.querySelector("ul").style.width = "75%";
                navigation.querySelector(".logo").style.display = "block";
            }, 100);
        }else
        {
            setTimeout(() =>
            {
                item.style.display = "inline-block";
                navigation.style.height = "100vh";
                navigation.querySelector("ul").style.height = "inherit";
                navigation.querySelector("ul").style.width = "100vw";
                navigation.querySelector(".logo").style.display = "none";
            }, 100);
        };
    });
}

function CloseNav()
{
    navItems.forEach(item => {
        if (item.style.display === "inline-block")
        {
            setTimeout(() =>
            {
                item.style.display = "none";
                navigation.style.height = "inherit";
                navigation.querySelector("ul").style.height = "inherit";
                navigation.querySelector("ul").style.width = "75%";
                navigation.querySelector(".logo").style.display = "block";
            }, 100);
        }
    });
}

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 0)
    {
        navigation.style.setProperty("filter", "drop-shadow(0px 6px 3px #2d2d30)");
    }else
    {
        navigation.style.setProperty("filter", "drop-shadow(0px 0px 0px #2d2d30)");
    }
});