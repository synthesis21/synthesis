//get duration of intro vid, make it disappear after one play, and make notify btn and other vid/img appear
const introVid = document.getElementById('introVid'),
    secondVid = document.getElementById('secondVid'),
    notifyBtn = document.getElementById('notifyBtn'),
    countdown = document.getElementById('countdown');

introVid.addEventListener('durationchange', function() {
    const introDuration = 1000 * (introVid.duration);
    turnOffIntroVid(introDuration);
});

function turnOffIntroVid(duration){
    setTimeout(function(){
        introVid.style.display = "none";
        show(secondVid);
        show(notifyBtn);
        show(countdown);
    }, 10)
}

//modal
const modalWrap = document.getElementById('modalBg'),
    loseModal = document.getElementById('closeModal');

//when notify button is clicked open modal
notifyBtn.onclick = function(){
    show(modalWrap);
    hide(notifyBtn);
}

//when x is clicked close modal
closeModal.onclick = function(){
    hide(modalWrap);
    show(notifyBtn);
}

//when clicked outside of modal close modal
window.onclick = function(event) {
    if (event.target == modalWrap) {
        show(notifyBtn);
        hide(modalWrap);
    }
  }

  function show(element){
      element.style.visibility = 'visible';
      element.style.opacity = '1.0';
  }

  function hide(element){
    element.style.visibility = 'hidden';
    element.style.opacity = '0.0';
}

//countdown

const days = document.getElementById('dayCount');
const hours = document.getElementById('hourCount');
const mins = document.getElementById('minCount');
const secs = document.getElementById('secCount');

const countDownDate = new Date("Nov 13, 2020 12:00:00").getTime();

function startCountdown(){
    setInterval(() => {
        const now = new Date();
        const timeLeft = countDownDate - now;

        const daysLeft = ('0' + Math.floor(timeLeft / (1000 * 60 * 60 * 24))).slice(-2);
        const hoursLeft = ('0' + Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
        const minsLeft = ('0' + Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
        const secsLeft = ('0' + Math.floor((timeLeft % (1000 * 60)) / 1000)).slice(-2);


        days.innerHTML = daysLeft;
        hours.innerHTML = hoursLeft;
        mins.innerHTML = minsLeft;
        secs.innerHTML = secsLeft;
    },
    1000)
}

startCountdown();

// carousel
// when next button is clicked, move each item to the left by a certain amount
// item position should equal the distance from the center * a certain amount

const carousel = document.getElementById('carousel'),
    items = document.getElementsByClassName('carouselItem'),
    prevBtn = document.getElementById('prevBtn'),
    nextBtn = document.getElementById('nextBtn');

function setInitialPosition(){
    items.array.forEach(element => {
        
    });
}

setInitialPosition();