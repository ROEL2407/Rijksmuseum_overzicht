import { itemClick, searchOpen } from './modules/handling.js';

const display = document.getElementById('artitems');
display.textContent = "Loading...";

searchOpen();
itemClick();
getAndRenderData();




const artArray = [];
const body = document.querySelector("body");
const html = document.querySelector("html");

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
            MakeInfobox(artArray);
        }).catch(error => console.log(error))
}

console.log(artArray);

function showInfo(data) {
    data.forEach(item => {
        const tempItem = document.createElement('a');
        tempItem.setAttribute("class", "art");
        tempItem.id = item.id;
        const output = '<article><div><img src="' + item.img.slice(0, -3) + "=s1000" + '" alt=""></div><h2>' + item.title + '</h2></article>';
        tempItem.innerHTML = output;
        display.appendChild(tempItem);
    })
}

export function MakeInfobox(data) {
    let infoboxes = [];
    data.forEach(item => {
        const tempInfobox = document.createElement('article');
        tempInfobox.setAttribute("class", "infobox");
        tempInfobox.id = "info-box_" + item.id;
        const output = '<button class="close_popup"><div></div><div></div></button><div><img src="' + item.img.slice(0, -3) + "=s1000" + '" alt=""></div><h2>' + item.title + '</h2><p>' + item.maker + '</p><p>' + item.place + '</p><a href="' + item.link + '" target="_blank">' + item.link + '</a>' ;
        tempInfobox.innerHTML = output;
        const infoboxWrapper = document.getElementById("info_boxes");
        infoboxWrapper.appendChild(tempInfobox);
        infoboxes =+ tempInfobox;
        console.log(infoboxes);
    })
}



function closeItemInfo(data) {
        const close = document.getElementById("close_popup");
        const active = document.getElementsByClassName("active");
            close.addEventListener("click", function () {
                console.log(close);
            // body.classList.add("popOn");
            // html.classList.add("popOn");
            });
    Array.from(document.getElementsByClassName("art")).forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();

            const tempTag = this.querySelector("article");
            const button = tempTag.querySelector("button");
            tempTag.classList.add("active");
            button.setAttribute("id", "close_popup");
            
            body.classList.add("popOn");
            html.classList.add("popOn");
        });
    })
}