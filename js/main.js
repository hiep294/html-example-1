window.addEventListener("scroll", () => {
  const navbarLayout = document.querySelector("#navbar-layout");
  if (window.scrollY > 150) {
    navbarLayout.style.opacity = 0.8;
  } else {
    navbarLayout.style.opacity = 1;
  }
});

// Smooth Scrolling
$("#nav-link a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

// $("#nav-link a").on("click", function (event) {
//   if (this.hash !== "") {
//     event.preventDefault();

//     const hash = this.hash;

//     $("html, body").animate(
//       {
//         scrollTop: $(hash).offset().top - 100,
//       },
//       800
//     );
//   }
// });
