function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".main").style.opacity = "1";
  });

  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".main").style.opacity = "1";

    const skillItems = document.querySelector(".skill-items");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // Stop observing once it's shown
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the item is visible
    });

    observer.observe(skillItems);
  }); 
  
  document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-audio");

    // Memastikan audio dimainkan setelah klik pertama
    const playAudio = () => {
        audio.play().then(() => {
            console.log("Audio berhasil diputar!");
        }).catch(error => {
            console.error("Autoplay gagal:", error);
        });
    };

    // Menunggu interaksi pengguna
    window.addEventListener("click", playAudio, { once: true });
});

  