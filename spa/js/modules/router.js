import '../vendor/routie.min.js';

export const handleRoutes = () => {
  routie({
    ':id': (id) => {
      updateUI(id);
    },
  });
};

function updateUI(route) {
  let activeinfoBox = document.querySelector(`[data-route=${route}]`);
  if(!activeinfoBox.classList.contains("active")){
    activeinfoBox.classList.add('active');
  }
    const closePopup = document.querySelectorAll(".close_popup");
    closePopup.forEach(function(popUp){
      popUp.addEventListener("click", function() {
        activeinfoBox.classList.remove("active");
      })
    })
}