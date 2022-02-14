getAndRenderData()

const artArray = [];

function getAndRenderData() {
    const getURL = 'https://tribe.api.fdnd.nl/v1/list'
    fetch(getURL).then(response => response.json())
        .then(response => {
            console.log(response)
            response.data.forEach(art => {
                    artArray.push({
                        title: art.memberName
                    });
            })
        }).catch(error => document.body.insertAdjacentHTML('beforebegin', error))
}

console.log(artArray);