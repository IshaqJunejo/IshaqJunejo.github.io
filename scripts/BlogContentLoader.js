const title = document.querySelector(".title");
let filePath = "../" + title.innerHTML + "/Content.json";

// Function to parse and load content recursively
function parseContent(block, container) {
    let contentBlock;

    switch (block.type) {
        case "paragraph":
            contentBlock = document.createElement('p');
            contentBlock.innerHTML = block.text;
            break;

        case "heading":
            contentBlock = document.createElement(`h${block.level}`);
            contentBlock.innerHTML = block.text;
            break;

        case "image":
            contentBlock = document.createElement('img');
            contentBlock.src = block.src;
            contentBlock.alt = block.alt;
            break;
        
        case "link":
            contentBlock = document.createElement('a');
            contentBlock.href = block.href;
            contentBlock.target = "_blank";
            contentBlock.innerHTML = block.text;
            break;

        case "code":
            contentBlock = document.createElement('div');
            contentBlock.classList.add("code");
            const preElement = document.createElement('pre');
            const codeElement = document.createElement('code');
            codeElement.className = `language-${block.language}`;
            codeElement.innerHTML = block.content;
            preElement.appendChild(codeElement);
            contentBlock.appendChild(preElement);
            break;

        case "list":
            contentBlock = document.createElement('ul');
            block.items.forEach(item => {
                const listItem = document.createElement('li');
                const parsedItem = parseContent(item, listItem);
                if (parsedItem) {
                    listItem.appendChild(parsedItem);
                } else {
                    console.warn("Failed to parse list item:", item);
                }
                contentBlock.appendChild(listItem);
            });
            break;

        case "div":
            contentBlock = document.createElement('div');
            block.children.forEach(child => {
                const parsedChild = parseContent(child, contentBlock);
                if (parsedChild) {
                    contentBlock.appendChild(parsedChild);
                } else {
                    console.warn("Failed to parse child:", child);
                }
            });
            break;
        
        case "iframe":
            contentBlock = document.createElement("iframe");
            contentBlock.frameBorder = "0";
            contentBlock.style = block.style;
            contentBlock.src = block.src;
            break;

        default:
            console.warn("Unknown content type:", block.type);
            break;
    }

    if (contentBlock) {
        return contentBlock;
    }
}

// Fetch and load the blog content
fetch(filePath)
    .then(response => response.json())
    .then(data => {
        title.innerHTML = data.title;
        document.querySelector(".banner").src = data.bannerImage;
        document.querySelector(".date").innerHTML = data.date;

        const contentContainer = document.querySelector(".content");

        data.content.forEach(block => {
            contentContainer.appendChild(parseContent(block, contentContainer));
        });
    })
    .catch(error => {
        console.log("Error: ", error);
    });