
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');


menuToggle.addEventListener('click', () => {
    console.log('Menu toggle clicked');
    navLinks.classList.toggle('active');
});


const serviceImages = document.querySelectorAll('.serv_div_img');
const serviceTitle = document.getElementById('service-title');
const serviceDescription = document.getElementById('service-description');

// Função para selecionar uma imagem
function selectImage(image) {

    serviceImages.forEach(img => {
        img.classList.remove('selected');
        img.classList.add('not-selected');
    });


    image.classList.add('selected');
    image.classList.remove('not-selected');


    const newTitle = image.getAttribute('data-title');
    const newDescription = image.getAttribute('data-description');


    serviceTitle.textContent = newTitle;
    serviceDescription.textContent = newDescription;
}


serviceImages.forEach(image => {
    image.addEventListener('click', () => {
        selectImage(image);
    });
});

if (serviceImages.length > 0) {
    selectImage(serviceImages[0]); 
}
