function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".main").style.opacity = "1.2";
  });

  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".main").style.opacity = "1.2";

    const skillItems = document.querySelector(".skill-items");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.1 
    });

    observer.observe(skillItems);
  }); 
  
function opensMenu() {
    const audio = document.getElementById("background-audio");

    if (!audio) {
        console.error("Elemen audio tidak ditemukan!");
        return;
    }

    audio.muted = false;
    audio.play()
        .then(() => {
            console.log("Audio berhasil diputar!");
        })
        .catch(error => {
            console.error("Audio gagal diputar:", error);
        });
}
