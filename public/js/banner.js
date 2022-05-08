const manualButtons = document.querySelectorAll(".manual-btn");

manualButtons.forEach(button => {
    button.addEventListener('click', (e)=>{
        document.querySelector('.checked').classList.remove('checked');
        e.currentTarget.classList.add('checked');
    })
})



var counter = 1;
// setInterval(function(){
//     document.getElementById("bannerRadio" + counter).checked = true;
//     counter++;
//     if(counter > slides.length){
//         counter = 1;
//     }
// }, 5000)