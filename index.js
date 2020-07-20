$("#nav1").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(`#about`).offset().top,
    },
    1000
  );
});
$("#nav2").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(`#projects`).offset().top,
    },
    1000
  );
});
$("#nav3").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(`#contact`).offset().top,
    },
    1000
  );
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

//parallax objects
