import '../vendor/routie.min.js';

// var infoboxes = document.getElementsByClassName("infobox");
// console.log(infoboxes);
export const handleRoutes = () => {
  routie({
    ':id': (id) => {
      updateUI(id);
    },
  });
};

function updateUI(route) {
  let activeSection = document.querySelector(`[data-route=${route}]`);
  console.log(activeSection);
  activeSection.classList.add('active');
    const closePopup = document.querySelectorAll(".close_popup");
    closePopup.forEach(function(popUp){
      popUp.addEventListener("click", function() {
        activeSection.classList.remove("active");
      })
    })
}