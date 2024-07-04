const button = document.getElementById("btn");
const image = document.getElementById("image");
const creds = document.getElementById("credits");

const appear = () => {
    image.classList.toggle('hidden');
    creds.classList.toggle('hidden');
}

btn.addEventListener('click', appear);