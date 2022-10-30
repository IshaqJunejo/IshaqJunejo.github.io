navigation = document.querySelector("nav");
navItems = document.querySelectorAll("#nav-links");

function NavBar()
{
    navItems.forEach(item => {
        if (item.style.display === "inline-block")
        {
            setTimeout(() =>
            {
                item.style.display = "none";
                navigation.style.height = "fit-content";
            }, 100);
        }else
        {
            setTimeout(() =>
            {
                item.style.display = "inline-block";
                navigation.style.height = "100vh";
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
                navigation.style.height = "fit-content";
            }, 100);
        }
    });
}