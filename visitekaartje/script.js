btn_contact = document.getElementById("btn_contact");
btn = document.getElementById("btn");
btn_info = document.getElementById("btn_info");
contact = document.getElementById("contact");
info = document.getElementById("info");

btn_contact.onclick = function() {
    if (!info.classList.contains("hidden")){
        info.classList.add("hidden");
    }
    contact.classList.toggle("hidden");
    btn_contact.classList.toggle("up");

    btn_contact.classList.toggle("active");
}

btn_info.onclick = function() {
    if (!contact.classList.contains("hidden")){
        contact.classList.add("hidden");
    }
    info.classList.toggle("hidden");
    btn_info.classList.toggle("up");

    btn_info.classList.toggle("active");
}