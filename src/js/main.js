import '../sass/app.scss';
// <============= HEADER Tweens ===========>

// color change on scroll
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $("header").addClass("header-active");
            $(".menu-burger-icon").addClass('after');
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $("header").removeClass("header-active");
           $(".menu-burger-icon").removeClass('after');
        }
    });
});

// Tween for hamberger icon
$('.menu-burger-icon').hover(function() {
    gsap.to('.menu-burger-icon--line:first-child', 0.2, { x: -10 });
    gsap.to('.menu-burger-icon--line:last-child', 0.2, { x: 10 });
},
              
function() {
    gsap.to('.menu-burger-icon--line:first-child', 0.2, { x: 0 });
    gsap.to('.menu-burger-icon--line:last-child', 0.2, { x: 0 });
});

// MENU Timeline
var tlMenu = gsap.timeline({paused:true});

tlMenu
    .to('.banner-section h1, .banner-section h2', {autoAlpha: 0})
    .to('.banner-section--svg', 1, {height: 2200, ease: Linear.easeOut})
    .to('nav', {autoAlpha:1})
    .staggerFromTo('nav li', 0.5, {
        y: 100, opacity: 0
    },
    {
        y: 0, opacity: 1
    }, 0.1)


var tlafterMenu = gsap.timeline({paused:true});

tlafterMenu
    .to('nav', {autoAlpha:1})
    .staggerFromTo('nav li', 0.5, {
        y: 100, opacity: 0
    },
    {
        y: 0, opacity: 1
    }, 0.1)
   
    
    $(function() {
        $('.menu-burger-icon').click(function() {
            if($(this).hasClass('after')) {
               console.log('Yes');
               $('.menu-burger-icon').click(function() {
                tlafterMenu.play(0);
                $('body').addClass('no-scroll');
            })
            } else {
                console.log("No");
                $('.menu-burger-icon').click(function() {
                    tlMenu.play(0);
                    $('body').addClass('no-scroll');
                })
            }
        });
    });

    $('.menu-close-btn').click(function() {
        tlMenu.reverse(0);
        $('body').removeClass('no-scroll');
    })


// <===============  BANNER TWEENS ==============>
gsap.fromTo('.banner-section .container h1', 0.6 , {y: 400, opacity: 0},
{y:0, opacity: 1, delay: 0.7},
)
gsap.fromTo('.banner-section .container h2', 1.2 , {y: 400, opacity: 0},
{y:0, opacity: 1, delay: 1.3, ease: Back.easeOut} )

// <============== ABOUT SECTION ====================>

gsap.from('.about-section--box', 0.6, {
scrollTrigger: {
    trigger: '.about-section',
    toggleActions: 'restart'
}, x:-200, y: 500, opacity: 0, stagger: 0.3})

$('.about-section--box').hover(function() {
    gsap.to(this, {x: -2, y: -10, boxShadow: '2px 12px 20px 0px #4b4a4a', scale: 1.002  })
},
function() {
    gsap.to(this, {x:0, y: 0,boxShadow: '0 8px 6px -6px #4b4a4a', scale: 1})
})

// <==============  ARTICLE SECTION ====================>
gsap.to('.flex-box--img i', 6, {rotation: 360, repeat: -1, ease: Linear.easeNone })

gsap.to('.flex-box--img i:last-child', 6, {rotation: -360, repeat: -1, ease: Linear.easeNone})

// <==============  TIMELINE SECTION ====================>
    gsap.to('.line-to-be-animated', 1, {
        scrollTrigger: {
            trigger: ".timeline-section",
            start: 'top top',
            scrub: true,
            toggleActions: 'restart pause reverse pause '
        }, height: 2150
    })

    gsap.to('.timeline-section--box--img.one', 1, {
        scrollTrigger: {
            trigger: ".timeline-section",
            start: 'top top',
            scrub: false,
            toggleActions: 'play complete reverse+=300 reset'
        }, scale: 0.9, ease: Back.easeOut
    })

    gsap.to('.timeline-section--box--img.two', 1, {
        scrollTrigger: {
            trigger: ".timeline-section--box--text.two",
            start: "top center",
            scrub: false,
            toggleActions: 'play complete reverse+=300 reset'
        }, scale: 0.9
    })

    gsap.to('.timeline-section--box--img.three', 1, {
        scrollTrigger: {
            trigger: ".timeline-section--box--text.three",
            start: "top bottom-=300",
            scrub: false,
            toggleActions: 'play complete reverse+=300 reset'
        }, scale: 0.9
    })

    gsap.to('.timeline-section--box--img.four', 1, {
        scrollTrigger: {
            trigger: ".timeline-section--box--text.four",
            start: "top bottom-=300",
            scrub: false,
            toggleActions: 'play complete reverse+=300 reset'
        }, scale: 0.9
    })

    gsap.to('.timeline-section--box--img.five', 1, {
        scrollTrigger: {
            trigger: ".timeline-section--box--text.five",
            start: "top bottom-=300r",
            scrub: false,
            toggleActions: 'play complete reverse+=300 reset'
        }, scale: 0.9
    })

    gsap.to('.timeline-section--box--img.six', 1, {
        scrollTrigger: {
            trigger: ".timeline-section--box--img.five",
            start: "top bottom+-100",
            scrub: false,
            toggleActions: 'play complete reverse+=300 reset'
        }, scale: 0.9
    })

    // Timeline text

    gsap.from($('.timeline-section--box--text'), {
        scrollTrigger: '.timeline-section--box',
        autoAlpha: 1, x: -500
    })


