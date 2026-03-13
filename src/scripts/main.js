const footer = document.getElementById('contact');

credit = document.createElement('p');
date = new Date;
credit.textContent = `© ${date.getFullYear()} Galen Ananta`;

footer.prepend(credit)