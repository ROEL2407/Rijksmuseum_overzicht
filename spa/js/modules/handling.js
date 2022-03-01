export function searchOpen() {
    /* --- get all element for use --- */
    const search_btn = document.getElementById("search_btn");
    const search = document.getElementById("search");
    
    /* If the button "search" is clicked: */
    search_btn.addEventListener("click", function (event) {
        search.classList.toggle("hidden");
        search_btn.classList.toggle("active");
    })
}

export function closeInfo() {
    const close = document.getElementById("close_popup");
    close.addEventListener("click", function (event) {
        Array.from(document.getElementsByClassName("art")).forEach(element => {
                event.preventDefault();
                data.forEach(item => {
                    if(element.id === item.id) {
                        tempTag = document.querySelector("article" );
                        tempTag.classList.toggle("active");
                    }
                    body.classList.remove("popOn");
            });
        })
    }