const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle(){
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}

function scrollPage() {
    const scrollPosition = window.scrollY;
    if(scrollPosition > 100 && !scrollStarted){
        countUp();
        scrollStarted = true;
    } else if(scrollPosition < 100 && scrollStarted){
        reset();
        scrollStarted = false;
    }
}


function countUp(){
    counters.forEach((counter) => {
        counter.innerText = '0';

        const UpdateCounter = () => {
            //Get count target
            const target = +counter.getAttribute('data-target');
            //Get current counter value
            const c = +counter.innerText;

            //Increment
            const increment = target / 100;

            //if counter is less thatn target, add increment
            if(c < target){
                counter.innerText = `${Math.ceil(c + increment)}`;

                setTimeout(UpdateCounter, 100);
            } else{
                counter.innerText = target;
            } 
            
        };
        UpdateCounter();
    });
    
}


function reset(){
    counters.forEach((counter) => 
        (counter.innerText = '0'));
}