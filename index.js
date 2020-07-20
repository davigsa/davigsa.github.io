const navigation = document.querySelectorAll("#nav");

navigation.forEach((navIcon) => {
  navIcon.addEventListener("click", function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(navIcon.getAttribute("name")).offset().top,
      },
      1000
    );
  });
});

new Typed(".typewritter", {
  strings: [
    "Desenvolvedor frontend",
    "Desenvolvedor backend",
    "Admirador de CSS crocante",
    "Amante dos animais",
    "Biblioteca de memes",
  ],
  smartBackspace: true,
  loop: true,
  typeSpeed: 90,
  backSpeed: 90,
  backDelay: 900,
});

$(".cards").paroller();
$("#about").paroller();
$("#projects").paroller();

//analytics events
const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    return gtag("event", "click", {
      event_category: link.getAttribute("id"),
      event_label: link.getAttribute("name"),
    });
  });
});
