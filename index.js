// function typeWriter(element) {
//   const textArray = element.innerHTML.split("");
//   element.innerHTML = "";
//   textArray.forEach((letter, i) => {
//     setTimeout(() => (element.innerHTML += letter), 75 * i);
//   });
// }

// const title = document.querySelector(".subtitle");
// typeWriter(title);

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
$(".card-black").paroller();
$("#about").paroller();
$("#contact").paroller();
