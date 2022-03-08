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


export function itemClick() {
    let clickId = "";
    /* checks which item is being clicked and gives the id of the element to the hash router */
    function onClick(event) {
        if ( event.target.classList.contains("art")) {
          clickId = event.target.id;
        }
        window.location.hash = clickId;
    }
    window.addEventListener('click', onClick);
}