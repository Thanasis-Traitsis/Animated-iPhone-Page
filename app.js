// const tlIntro = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".first-page",
//         start: '0%',
//         end: '100%',
//         scrub: true ------------------> This makes it smooth from the start till the end (An de valeis auto,
                                            // to animatin tha ksekinisei sto start kai tha teleiwsei mono tou me vasei to duration, kai oxi me vasei to end)
//     }
// });

// tlIntro.fromTo('nav', {opacity: 1}, {opacity: 0});
//-------------------------------------------------------------------------------------------------------------------------

//Pin the first page
const tlIntro = gsap.timeline({
    scrollTrigger: {
        trigger: '.first-page',
        start: '0%',
        end: '100%',
        pin: true, //-----------------------------> Locks first page
        pinSpacing: false //-----------------------------> Allows scroll to other pages
    }
});


//Highlight PAGE 2
const tlH = gsap.timeline({
    scrollTrigger: {
        trigger: '.second-page',
        // markers: {startColor: 'blue', endColor: 'blue'},
        scrub: true,
        start: '-40%',
        end: '40%'
    }
});

tlH.fromTo('.highlight', {color: 'rgba(255,255,255, .4)'}, {color: 'rgba(255,255,255, 1)', stagger: 1});
//-------------------------------------------------------------------------------------------------------------------------
const tlHRemove = gsap.timeline({
    scrollTrigger: {
        trigger: '.second-page',
        // markers: {startColor: 'pink', endColor: 'pink'},
        scrub: true,
        start: '-20%',
        end: '60%'
    }
});

tlHRemove.to('.highlight', {color: 'rgba(255,255,255, .4)', stagger: 1});

//Page 3
const tlSplit = gsap.timeline({
    scrollTrigger: {
    trigger: '.third-page',
    start: '-35%',
    end: '30%',
    scrub: true
    }
});

tlSplit.fromTo('.large-phone',  {x: '40%'}, {x: '25%'});
tlSplit.fromTo('.small-phone', {x: '-40%'}, {x: '-25%'}, "<");
tlSplit.fromTo('.product-text-left', {x: 50, opacity: 0}, {x: 0, opacity: 1}, "<");
tlSplit.fromTo('.product-text-right', {x: -50, opacity: 0}, {x: 0, opacity: 1}, "<");

const tlSplitPin = gsap.timeline({
    scrollTrigger: {
        trigger: '.third-page',
        pin: true,
        pinSpacing: false,
        start: '0%',
        end: '100%'
    }
});

//Carousel

const swacthes = document.querySelectorAll('.swatches img');
const gallery = document.querySelector('.phone-gallery');
const slides = document.querySelectorAll('.phone-gallery-container');

let currentSwatch = "blue";
let topIndex = 2;

swacthes.forEach((swatch, index)=> {
    const coord = slides[index].getBoundingClientRect().left;

    swatch.addEventListener('click', (e) => {
        let swatchName = e.target.getAttribute("swatch");
        let closeUp = document.querySelector("." + swatchName);
        //Check if we are on the same swatch
        if(currentSwatch === swatchName) return;

        gsap.set(closeUp, {zIndex: topIndex});
        gsap.fromTo(closeUp, {opacity: 0}, {opacity: 1, duration: 1});

        //Gallery
        gsap.to(gallery, {x: -coord, duration: 1, ease: "back.out(.6)"});

        //Increment zIndex
        topIndex++;
        currentSwatch = swatchName;
    });
});

//Page 5
const tlVideo = gsap.timeline({
    scrollTrigger: {
        trigger: '.fifth-page',
        start: "0%",
        end: "150%",
        scrub: true,
        pin: true
    }
});

tlVideo.fromTo('.product-video', {currentTime: 0}, {currentTime: 2.5});

tlVideo.fromTo('.product-info-container h3', {opacity: 0}, {opacity: 1, stagger: .25}, "<");

//Page 6
const tlParallax = gsap.timeline({
    scrollTrigger: {
        trigger: ".sixth-page",
        start: "-25%",
        end: "50%",
        scrub: true
    }
});

tlParallax.fromTo(".photo-description", {y: 80}, {y: 0});
tlParallax.fromTo(".portrait-container", {y: 80}, {y: 0}, "<");
tlParallax.fromTo(".phone-video", {y: 50}, {y: -100}, "<");