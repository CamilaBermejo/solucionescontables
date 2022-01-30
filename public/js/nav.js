const navigation = document.querySelector('.navigation');
const navToggle = document.querySelector('.nav-button');
const links = document.querySelectorAll('.navLink');
const main = document.querySelector("main");

navToggle.addEventListener('click', () => {
    const visibility = navigation.getAttribute('data-visible');
    if (visibility === "false") {
        navigation.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }
    else {
        navigation.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
})

links.forEach(link => {
    link.addEventListener("click", () =>{
        navigation.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    });
    
});


main.addEventListener("click", (e)=>{
    navigation.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
})
