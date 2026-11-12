//change the theme function
const changeThemeButton = document.getElementById('btn');
changeThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
});
    
const changeButtonColor = document.getElementById('btn')
changeButtonColor.addEventListener('mouseover', () => {
changeButtonColor.style.backgroundColor = 'aqua'
})

const mouseOutColor = document.getElementById('btn')
mouseOutColor.addEventListener('mouseout', () => {
mouseOutColor.style.backgroundColor = 'brown'
})

const adjustBtnsize = document.getElementById('btn')
adjustBtnsize.style.padding = "5px 50px"