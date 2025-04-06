const title = document.querySelector(".title");
let filePath = "../" + title.innerHTML + "/Content.json";

// read data from a .json file
fetch(filePath)
    .then(response => response.json())
    .then(data => {
        title.innerHTML = data.title;
        document.querySelector(".banner").src = data.bannerImage;
        document.querySelector(".date").innerHTML = data.date;

        const contentContainer = document.querySelector(".content");

        data.content.forEach(block => {
            let contentBlock;

            switch (block.type) {
                case "paragraph":
                    contentBlock = document.createElement('p');
                    contentBlock.innerHTML = block.text;          
                    break;
                
                case 'heading':
                    contentBlock = document.createElement(`h${block.level}`);
                    contentBlock.innerHTML = block.text;
                    break;
              
                case 'image':
                    contentBlock = document.createElement('img');
                    contentBlock.src = block.src;
                    contentBlock.alt = block.alt;
                    break;
              
            
                default:
                    break;
            }

            if (contentBlock != null) {
                contentContainer.appendChild(contentBlock);
            }
        });
    })
    .catch(error => {
        console.log("Error: ", error);
    })