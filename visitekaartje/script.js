/* --- get all element for use --- */
btn_contact = document.getElementById("btn_contact");
btn = document.getElementById("btn");
btn_info = document.getElementById("btn_info");
contact = document.getElementById("contact");
info = document.getElementById("info");

/* If the button "contact" is clicked: */
btn_contact.onclick = function() {
    /* check if info is visible, if so make it invisible */
    if (!info.classList.contains("hidden")){
        info.classList.add("hidden");
    }
    /* toggle the visibility of the contact box */
    contact.classList.toggle("hidden");
    /* move the contact button up */
    btn_contact.classList.toggle("up");
    /* give the contact button an active state */
    btn_contact.classList.toggle("active");
}

/* If the button "info" is clicked: */
btn_info.onclick = function() {
    /* check if contact is visible, if so make it invisible */
    if (!contact.classList.contains("hidden")){
        contact.classList.add("hidden");
    }
    /* toggle the visibility of the info box */
    info.classList.toggle("hidden");
    /* move the info button up */
    btn_info.classList.toggle("up");
    /* give the info button an active state */
    btn_info.classList.toggle("active");
}