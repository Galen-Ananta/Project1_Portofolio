const footer = document.getElementById('contact');

const credit = document.createElement('p');
const date = new Date();
credit.textContent = `© ${date.getFullYear()} Galen Ananta`;

footer.prepend(credit)
