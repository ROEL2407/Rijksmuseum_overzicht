const body = document.getElementsByTagName("main");

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
    const onClick = (event) => {
        if ( event.target.classList.contains("art")) {
          clickId = event.target.id;
          console.log(clickId);
        }
        window.location.hash = clickId;
        let idHolder = document.getElementById("info-box_" + clickId);
        console.log(idHolder);
    }
    window.addEventListener('click', onClick);
}