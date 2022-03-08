import { display } from "./fetch.js";

/* creates a clickable element which can be clicked on to display more information about the art piece */
export function showInfo(data) {
    data.forEach(item => {
        const tempItem = document.createElement('a');
        tempItem.setAttribute("class", "art");
        tempItem.id = item.id;
        const output = '<article><div><img src="' + item.img.slice(0, -3) + "=s1000" + '" alt=""></div><h2>' + item.title + '</h2></article>';
        tempItem.innerHTML = output;
        display.appendChild(tempItem);
    })
}

/* creates an infobox which can be opened to display more information about the art piece */
export function MakeInfobox(data) {
    data.forEach(item => {
        const tempInfobox = document.createElement('article');
        tempInfobox.setAttribute("class", "infobox");
        tempInfobox.setAttribute("data-route", item.id);
        tempInfobox.id = "info-box_" + item.id;
        const output = '<button class="close_popup"><div></div><div></div></button><div><img src="' + item.img.slice(0, -3) + "=s1000" + '" alt=""></div><h2>' + item.title + '</h2><p>' + item.maker + '</p><p>' + item.place + '</p><a href="' + item.link + '" target="_blank">' + item.link + '</a>' ;
        tempInfobox.innerHTML = output;
        const infoboxWrapper = document.getElementById("info_boxes");
        infoboxWrapper.appendChild(tempInfobox);
    })
}
