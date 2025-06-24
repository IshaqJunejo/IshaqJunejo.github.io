function renderProjects(projects, limit = -1, root = "../") {
    const ProjectsContainer = document.querySelector("#projects").querySelector(".collection");
    ProjectsContainer.innerHTML = '';

    let projectCount;
    if (limit < 0) {
        projectCount = projects.length;
    } else {
        projectCount = Math.min(projects.length, limit);
    }

    for (let i = 0; i < projectCount; i++) {
        const project = projects[i];

        let linksHTML = '';

        for (let i = 0; i < project.links.length; i++) {
            const link = project.links[i];
            linksHTML += `
                <a href="${link.url}" target="_blank" rel="noopener noreferrer">
                    <img src="${root + link.icon}" alt="${link.alt}">
                </a>
            `;
        }

        const projectHTML = `
            <div class="internal-container">
                <img src="${root + project.image}" alt="${project.imageAlt}" class="project-img">
                <div class="data">
                    <h4>${project.title}</h4>
                    <div class="hidden-data">
                        <p>${project.description}</p>
                        <div class="online-presence">
                            ${linksHTML}
                        </div>
                    </div>
                </div>
            </div>
        `;

        ProjectsContainer.innerHTML += projectHTML;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const ProjectsContainer = document.querySelector("#projects").querySelector(".collection");
    const limit = parseInt(ProjectsContainer.dataset.limit) || -1;

    if (limit == -1) {
        fetch("ProjectsList.json")
            .then(response => response.json())
            .then(data => renderProjects(data))
            .catch(error => {
                console.log("Error: ", error);
            });
    } else {
        fetch("Projects/ProjectsList.json")
            .then(response => response.json())
            .then(data => renderProjects(data, limit, ""))
            .catch(error => {
                console.log("Error: ", error);
            });
    }
});