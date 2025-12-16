document.addEventListener("DOMContentLoaded", () => {


  function setupHorizontalScroll({
    gridSelector,
    leftBtnSelector,
    rightBtnSelector,
    scrollFactor = 0.8,
    hideButtons = false
  }) {
    const grid = document.querySelector(gridSelector);
    const leftBtn = document.querySelector(leftBtnSelector);
    const rightBtn = document.querySelector(rightBtnSelector);

    if (!grid || !leftBtn || !rightBtn) return;

    const updateButtons = () => {
      if (hideButtons) return;

      leftBtn.style.display = grid.scrollLeft > 0 ? "flex" : "none";
      rightBtn.style.display =
        grid.scrollLeft + grid.clientWidth < grid.scrollWidth
          ? "flex"
          : "none";
    };

    const scrollAmount = () => grid.offsetWidth * scrollFactor;

    rightBtn.addEventListener("click", () => {
      grid.scrollBy({ left: scrollAmount(), behavior: "smooth" });
    });

    leftBtn.addEventListener("click", () => {
      grid.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
    });

    grid.addEventListener("scroll", updateButtons);
    updateButtons();
  }

 
  setupHorizontalScroll({
    gridSelector: ".product-grid",
    leftBtnSelector: ".scroll-btn.left",
    rightBtnSelector: ".scroll-btn.right",
    scrollFactor: 0.8
  });

  
  setupHorizontalScroll({
    gridSelector: ".gifts-grid",
    leftBtnSelector: ".gift-scroll-btn.left",
    rightBtnSelector: ".gift-scroll-btn.right",
    scrollFactor: 0.85
  });

 
  const tabs = document.querySelectorAll(".bestseller-tabs button");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });


  const recentCards = document.querySelectorAll(".recent-card");

  recentCards.forEach(card => {

    
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-6px)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });

    
    card.addEventListener("click", () => {
      recentCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
    });
  });

});
