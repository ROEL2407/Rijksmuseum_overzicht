import '../vendor/routie.min.js';

export function handleRoutes() {
  /* handles the routes of the app */
  routie({
    '': () => {
      updateUI();
    },
    ':id': (id) => {
      updateUI(id);
    }
  });
};

function updateUI(route) {
  /* checks with infobox should be active via the route in the url and gives it the class active */
  let activeinfoBox = document.querySelector(`[data-route=${route}]`);
  if(!activeinfoBox.classList.contains("active")){
    activeinfoBox.classList.add('active');
  }
    const closePopup = document.querySelectorAll(".close_popup");
    /* removes the class from the item that was active when the user clicks the closing button */
    closePopup.forEach(function(popUp){
      popUp.addEventListener("click", function() {
        activeinfoBox.classList.remove("active");
      })
    })
}