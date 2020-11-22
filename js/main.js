const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";
 
$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});






// (function scrollReveal() {
//     window.sr = ScrollReveal();
    
//     sr.reveal('.card', {
//       duration   : 600,
//       distance   : '20px',
//       easing     : 'ease-out',
//       origin     : 'bottom',
//       reset      : true,
//       scale      : 1,
//       viewFactor : 0,
//       afterReveal  : revealChildren,
//     }, 150);
    
//       var revealChildren = sr.reveal('.image', {
//       duration   : 500,
//       scale      : 1,
//       distance   : '20px',
//       origin     : 'bottom',
//       reset      : true,
//       easing     : 'ease-out',
//       viewFactor : 1,
//     }, 75);
//   })();
  