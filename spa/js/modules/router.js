import '../vendor/routie.min.js';

export const handleRoutes = () => {
  routie({
    ':id': (id) => {
      renderItem(id);
    }
  });
};

function updateUI(route) {
  sections.forEach(section => {
    section.classList.remove('active');
  });
  activeSection = document.querySelector(`[data-route=${route}]`);
  console.log(activeSection);
  activeSection.classList.add('active');
}