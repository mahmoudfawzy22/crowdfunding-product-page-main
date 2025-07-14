// Show support modal
document.querySelectorAll(".select-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".support").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const supportBoxs = document.querySelectorAll(".support-box");
  const pledges = document.querySelectorAll(".pledge");
  const supportModal = document.querySelector(".support");
  const overlay = document.querySelector(".overlay");
  const landding = document.querySelector(".landding");

  supportBoxs.forEach(box => {
    box.addEventListener("click", () => {
      if (!box.classList.contains("notactive")) {
        supportBoxs.forEach(b => b.classList.remove("active"));
        pledges.forEach(p => {
          p.classList.remove("active");
          p.classList.add("hidden");
        });
        box.classList.add("active");
        const pledge = box.querySelector(".pledge");
        if (pledge) {
          pledge.classList.add("active");
          pledge.classList.remove("hidden");
        }
      }
    });
  });

  document.querySelectorAll(".pledge-btn").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      console.log(e);
      supportModal.classList.add("hidden");
      overlay.classList.add("hidden");
      landding.classList.add("active");
    });
  });

  document.querySelector(".landding-btn").addEventListener("click", () => {
    landding.classList.remove("active");
  });

  const handleResponsiveVisibility = () => {
    const leftSmalls = document.querySelectorAll(".left-sm");
    const lefts = document.querySelectorAll(".left");
    const isMobile = window.innerWidth <= 500;

    leftSmalls.forEach(el => el.classList.toggle("hidden", !isMobile));
    lefts.forEach(el => el.classList.toggle("hidden", isMobile));
  };

  handleResponsiveVisibility();
  window.addEventListener("resize", handleResponsiveVisibility);
});
