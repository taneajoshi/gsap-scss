import '../sass/app.scss';
// Tweens

// Tween for hamberger icon
$('.menu-burger-icon').hover(function() {
    TweenMax.to('.menu-burger-icon--line:first-child', 0.2, { x: -10 });
    TweenMax.to('.menu-burger-icon--line:last-child', 0.2, { x: 10 });
},
              
function() {
    TweenMax.to('.menu-burger-icon--line:first-child', 0.2, { x: 0 });
    TweenMax.to('.menu-burger-icon--line:last-child', 0.2, { x: 0 });
});