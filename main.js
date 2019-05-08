$("nav").find("a").click(function(e) {
    e.preventDefault()
    var section = $(this).attr("href")
    $("html, body").animate({
        scrollTop: $(section).offset().top,
    })
})




window.onscroll = function() {scrollNavbar()}

var navbar = $('.navbar')

var sticky = navbar.offsetTop

function scrollNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  }
}



$("nav").find("a").click(function selector(){

  $("a").attr("style","background: #bf9fee")
  this.style.background= "#866ec7"

  });
