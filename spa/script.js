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
                    img: art.headerImage.url,
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

            output = '<img src="' + item.img + '" alt=""><h2>' + item.title + '</h2>';

        tempItem.innerHTML = output;
        document.getElementById('artitems').appendChild(tempItem);
    })
}