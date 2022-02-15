getAndRenderData()

const artArray = [];

function getAndRenderData() {
    const getURL = 'https://www.rijksmuseum.nl/api/nl/collection?key=OoTZzgc6'
    fetch(getURL).then(response => response.json())
        .then(response => {
            console.log(response)
            response.artObjects.forEach(art => {
                artArray.push({
                    title: art.longTitle,
                    img: art.webImage.url,
                    place: art.productionPlaces

                });
            })
            showInfo(artArray)
        }).catch(error => console.log(error))
}

console.log(artArray);

function showInfo(data) {
    data.forEach(item => {
        tempItem = document.createElement('article');

            output = '<div><img src="' + item.img + '" alt=""></div><h2>' + item.title + '</h2>';

        tempItem.innerHTML = output;
        document.getElementById('artitems').appendChild(tempItem);
    })
}

/* --- get all element for use --- */
search_btn = document.getElementById("search_btn");
search = document.getElementById("search");

/* If the button "search" is clicked: */
search_btn.onclick = function() {
    /* toggle the visibility of the search box */
    search.classList.toggle("hidden");
    search_btn.classList.toggle("active");
}