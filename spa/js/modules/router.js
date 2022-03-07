import '../vendor/routie.min.js';

var infoboxes = document.querySelectorAll(".infobox");
console.log(infoboxes);
export const handleRoutes = () => {
  routie({
    ':id': (id) => {
      updateUI(id);
    },
  });
};

function updateUI(route) {
  infoboxes.forEach(infobox => {
    infobox.classList.remove('active');
    document.getElementsByName("main").classList.remove("popOn");
  });
  let activeSection = document.querySelector(`[data-route=${route}]`);
  console.log(activeSection);
  activeSection.classList.add('active');
  document.getElementsByName("main").classList.add("popOn");
}