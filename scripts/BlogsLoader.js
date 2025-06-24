function renderBlogs(blogs, limit = -1, root = "") {
    const BlogsContainer = document.querySelector("#blogs").querySelector(".collection");
    BlogsContainer.innerHTML = '';

    let blogCount;
    if (limit < 0) {
        blogCount = blogs.length;
    } else {
        blogCount = Math.min(blogs.length, limit);
    }

    for (let i = 0; i < blogCount; i++) {
        const blog = blogs[i];

        const blogHTML = `
            <a href="${root + blog.link}">
                <div class="internal-container">
                    <img src="${root + blog.banner}" alt="${blog.altText}" class="Banner">
                    <h3 class="blog-title">${blog.title}</h3>
                    <div class="hidden-data">
                        <p class="date">${blog.date}</p>
                        <p>${blog.description}</p>
                        <p class="continue">Continue Reading</p>
                    </div>
                </div>
            </a>
        `;

        BlogsContainer.innerHTML += blogHTML;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const BlogsContainer = document.querySelector("#blogs").querySelector(".collection");
    const limit = parseInt(BlogsContainer.dataset.limit) || -1;

    if (limit == -1) {
        fetch("BlogsList.json")
            .then(response => response.json())
            .then(data => renderBlogs(data))
            .catch(error => {
                console.log("Error: ", error);
            });
    } else {
        fetch("Blogs/BlogsList.json")
            .then(response => response.json())
            .then(data => renderBlogs(data, limit, "Blogs/"))
            .catch(error => {
                console.log("Error: ", error);
            });
    }
});