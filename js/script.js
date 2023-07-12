const hamburger = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobile-menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    mobileMenu.classList.toggle('out')
})




// const stickyContainer = document.querySelector('.hero-video');
// const stopPoint = 100;
// // const stopPoint = parseFloat('50rem');

// window.addEventListener('scroll', () => {
// if (window.pageYOffset > stopPoint) {
//     stickyContainer.classList.add('sticky');
// } else {
//     stickyContainer.classList.remove('sticky');
// }
// });


// *

// // select the elements you want to observe
// const heroVideo = document.querySelector('.hero-video');
// const lastTestimony = document.querySelector('.testimonies .testimony:last-child');

// // create an intersection observer for the hero video
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     // check if the hero video is intersecting
//     if (entry.isIntersecting) {
//       // if it is, add the sticky class to make it sticky
//       heroVideo.classList.add('sticky');
//     } else {
//       // if it is not, remove the sticky class
//       heroVideo.classList.remove('sticky');
//     }
//   });
// });

// // start observing the hero video
// observer.observe(heroVideo);

// // create an intersection observer for the last testimony
// const lastTestimonyObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     // check if the last testimony is intersecting
//     if (entry.isIntersecting) {
//       // if it is, remove the sticky class to make the hero video static
//       heroVideo.classList.remove('sticky');
//     }
//   });
// });

// // start observing the last testimony
// lastTestimonyObserver.observe(lastTestimony);


// *

// const heroVideo = document.querySelector('.hero-video');
// const testimonie = document.querySelector('.testimonies');

// window.addEventListener('scroll', () => {
//     if(heroVideo.classList.contains('sticky')) {
//         heroVideo.classList.add('relative')
//     }
//     else {
//         heroVideo.classList.add('sticky');
//     }
// })

// var boxes = document.querySelector('.hero-video');
// var video = document.querySelector('.testimonies');

// // Get the offset position of the video
// var videoTop = video.offsetTop;

// window.addEventListener('scroll', function() {
//   if (boxes.getBoundingClientRect().top <= 0) {
//     video.classList.add('sticky');
//   } else {
//     video.classList.remove('sticky');
//   }
// });

var boxes = document.querySelector('.testimonies');
var video = document.querySelector('.hero-video');

// Get the offset position of the video
var videoTop = video.offsetTop;
var boxesBottom = boxes.offsetTop + boxes.offsetHeight;

// window.addEventListener('scroll', function() {
//   if (boxes.getBoundingClientRect().top <= 0 && window.pageYOffset < boxesBottom) {
//     video.classList.add('sticky');
//   } else {
//     video.classList.remove('sticky');
//   }
// });



// const stickyHeroVideo = () => {
//   if (isInViewporti(testimonies)) {
//     heroVideo.classList.add('sticky');
//   } else {
//     heroVideo.classList.remove('sticky');
//     heroVideo.classList.add('relative');

//   }
// };

// const isInViewporti = (element) => {
//   const recti = element.getBoundingClientRect();
//   return (
//     recti.top >= 0 &&
//     recti.left >= 0 &&
//     recti.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     recti.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// };

// window.addEventListener('scroll', stickyHeroVideo);



const testimonies = document.querySelectorAll('.testimony');

window.addEventListener('scroll', () => {
    testimonies.forEach(testimony => {
        if (isInViewport(testimony)) {
            testimony.style.opacity = '1';
        }
    });
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


const elements = document.querySelectorAll('.native, .inspect-image, .play-image');

// create an intersection observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // check if the element is intersecting
    if (entry.isIntersecting) {
      // if it is, add the come-out class to trigger the animation
      entry.target.classList.add('scale-up');
      observer.unobserve(entry.target);
    }
  });
});

// start observing the elements
elements.forEach(element => observer.observe(element));



const elementsTwo = document.querySelectorAll('.inter-text, .tool-text, .palm-text, .inspect-text, .play-text');

// create an intersection observer
const observeMe = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // check if the element is intersecting
    if (entry.isIntersecting) {
      // if it is, add the come-out class to trigger the animation
      entry.target.classList.add('slide-top');
      observeMe.unobserve(entry.target);
    }
  });
});

// start observing the elements
elementsTwo.forEach(element => observeMe.observe(element));

// const toolText = document.querySelector('.tool-text');

// // create an intersection observer
// const obser = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     // check if the element is intersecting
//     if (entry.isIntersecting) {
//       // if it is, add the come-out class to trigger the animation
//       toolText.classList.add('scale');
//       toolText.classList.add('slide');
//     }
//   });
// });

// // start observing the element
// obser.observe(toolText);
