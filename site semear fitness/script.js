// ================= MENU MOBILE =================
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
}

// ================= RADIO =================
const radio = document.getElementById("radioAudio");
const btn = document.getElementById("btnPlay");
const vol = document.getElementById("radioVol");

radio.volume = vol.value;

btn.addEventListener("click", () => {
  if (radio.paused) {
    radio.play();
    btn.textContent = "⏸";
  } else {
    radio.pause();
    btn.textContent = "▶";
  }
});

vol.addEventListener("input", () => {
  radio.volume = vol.value;
});

// ================= ANIMAÇÃO SCROLL =================
function revelar() {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
      el.classList.add("ativo");
    }
  });
}

window.addEventListener("scroll", revelar);
window.addEventListener("load", revelar);
