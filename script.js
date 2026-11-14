//change the theme function
const changeThemeButton = document.getElementById('btn');
changeThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
});
    
const changeButtonColor = document.getElementById('btn')
changeButtonColor.addEventListener('mouseover', () => {
changeButtonColor.style.backgroundColor = 'brown'
})

const mouseOutColor = document.getElementById('btn')
mouseOutColor.addEventListener('mouseout', () => {
mouseOutColor.style.backgroundColor = 'aqua'
})

const adjustBtnsize = document.getElementById('btn')
adjustBtnsize.style.padding = "5px 50px"

const pageTitle = document.querySelector('#pageTitle')
pageTitle.innerHTML = "Gilbert Korir Profile";

const mainContent = document.querySelector('.web-content')
const htmlSection = mainContent.querySelector('.about-me')
const headingTxt = htmlSection.getElementsByTagName('h3')

for (let i = 0; i < headingTxt.length; i++) {
  headingTxt[i].style.color = "white";
  headingTxt[i].style.backgroundColor = "#333";
  headingTxt[i].style.padding = "10px";
  headingTxt[i].style.border = "rounded"
};

const allHeadings3 = document.getElementsByTagName('h3');

for(let i = 0; allHeadings3.length; i++) {
  allHeadings3[i].style.color = "white";
  allHeadings3[i].style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  allHeadings3[i].style.padding = "10px";
};