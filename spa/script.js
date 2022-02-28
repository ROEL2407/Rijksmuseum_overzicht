getAndRenderData()
const display = document.getElementById('artitems');
display.textContent = "Loading...";

const artArray = [];
const body = document.querySelector("body");

function getAndRenderData() {
    const getURL = 'https://www.rijksmuseum.nl/api/nl/collection?key=OoTZzgc6&ps=100'
    fetch(getURL)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            response.artObjects.forEach(art => {
                artArray.push({
                    id: art.id,
                    title: art.title,
                    maker: art.principalOrFirstMaker,
                    img: art.webImage.url,
                    place: art.productionPlaces,
                    link: art.links.web

                });
            })

            display.textContent = "";
            display.classList.remove("loading");
            showInfo(artArray);
            click(artArray);
        }).catch(error => console.log(error))
}

console.log(artArray);

function showInfo(data) {
    data.forEach(item => {
        tempItem = document.createElement('a');
        tempItem.setAttribute("class", "art");
        tempItem.id = item.id;
        output = '<article><button id="close_popup"><div></div><div></div></button><div><img src="' + item.img.slice(0, -3) + "=s1000" + '" alt=""></div><h2>' + item.title + '</h2><p>' + item.maker + '</p><p>' + item.place + '</p><a href="' + item.link + '">' + item.link + '</a></article><div id="bg-fade"></article>';
        tempItem.innerHTML = output;
        display.appendChild(tempItem);
    })
}

function click(data) {
    Array.from(document.getElementsByClassName("art")).forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
            data.forEach(item => {
                if(element.id === item.id) {
                    tempTag = document.querySelector("article" );
                    tempTag.classList.toggle("active");
                }
            })
            body.classList.toggle("popOn");
        });
    })
}

    const close = document.getElementById("close_popup");

    close.onclick = function () {
        
    }

function search() {
    //Empty results
    display.innerHTML = "";
  
    var input = document.getElementById("inputfield");
  
    //search on input
    var search = data.filter(function (d) {
      return (
        d.title.toLowerCase().includes(input.value.toLowerCase()) ||
        d.principalOrFirstMaker.toLowerCase().includes(input.value.toLowerCase())
      );
    });
  
    //TODO: ignore capital letters & empty state
  
    showInfo(search);
}

/* --- get all element for use --- */
search_btn = document.getElementById("search_btn");
search = document.getElementById("search");

/* If the button "search" is clicked: */
search_btn.onclick = function () {
    /* toggle the visibility of the search box */
    search.classList.toggle("hidden");
    search_btn.classList.toggle("active");
}

