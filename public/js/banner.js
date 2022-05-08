const labelButtons = document.querySelectorAll(".manual-btn");
const radioButtons = document.querySelectorAll(".banner-radio-btn");
var currentBanner = 0;
var intervalTime = 5000;

labelButtons.forEach(button => {
    button.addEventListener('click', (e)=>{
        document.querySelector('.checked').classList.remove('checked');
        e.currentTarget.classList.add('checked');
        currentBanner = e.currentTarget.getAttribute('data-label-id');
        intervalTime = 10000;
        resetTimeoutTime(10000);
    })
})

nextBanner();

function resetTimeoutTime(time){
    var timeoutTime = setTimeout(()=>{
        intervalTime = 5000;
    },time);
}

function nextBanner(){
    var bannerTimer = setTimeout(()=>{
        if(currentBanner == radioButtons.length) currentBanner = 0;
        document.querySelector('.checked').classList.remove('checked');
        labelButtons[currentBanner].classList.add('checked');
        radioButtons[currentBanner].checked = true;
        currentBanner++;
        nextBanner();
    }, intervalTime);
}
