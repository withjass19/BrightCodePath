const homeSection = document.getElementById('home-section');
const tutorialSection = document.getElementById('tutorial-section')
const aboutSection = document.getElementById('about-section')

const homeLink = document.getElementById('home-link')
const tutorialLink = document.getElementById('tutorial-link')
const aboutLink = document.getElementById('about-link')

homeSection.style.display = "block";
tutorialSection.style.display = "none";
aboutSection.style.display = "none";

homeLink.classList.add("newBorder");
tutorialLink.style.border = "none";
aboutSection.style.border = "none";

homeLink.onclick = () => {
    homeLink.classList.add("newBorder");
    tutorialLink.style.border = "none";
    aboutSection.style.border = "none";

    homeSection.style.display = "block";
    tutorialSection.style.display = "none";
    aboutSection.style.display = "none";
}

tutorialLink.onclick = () => {
    tutorialLink.classList.add("newBorder");
    homeLink.style.border = "none";
    aboutSection.style.border = "none";

    homeSection.style.display = "none";
    tutorialSection.style.display = "block";
    aboutSection.style.display = "none";
}

aboutLink.onclick = () => {
    aboutLink.classList.add("newBorder");
    homeLink.style.border = "none";
    tutorialLink.style.border = "none";
    
    homeSection.style.display = "none";
    tutorialSection.style.display = "none";
    aboutSection.style.display = "block"
}