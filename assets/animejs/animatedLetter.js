// Wrap every letter in a span
$('.ml2').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [5,1],
    opacity: [-1,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1000,
    delay: function(el, i) {
      return 70*i;
    }
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });