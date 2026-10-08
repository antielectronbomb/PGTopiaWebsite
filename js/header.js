document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");

  if (!header) return;

  header.innerHTML = `
    <div class="masthead">
      <div class="logo">
        <a href="index.html">
          <img src="assets/images/logo.jpg" alt="P.G.Topia">
        </a>

        <div class="logo-text">
          <span class="logo-tf2">P.G.Topia</span>
          <span class="logo-name">The Campfire</span>
          <span class="logo-tagline">The Future ain't what it used to be</span>
        </div>
      </div>
    </div>

    <nav class="site-nav" aria-label="Primary navigation">
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-links">
        MENU
      </button>

      <div class="nav-links" id="nav-links">
        <a href="index.html">Home</a>
        <a href="rules.html">Rules</a>
        <a href="mapcycle.txt">Map List</a>
        <a href="reverts.txt">Weapon Reverts List</a>
        <a href="https://steamcommunity.com/groups/pgtopia">Steam Group</a>
        <a href="https://www.youtube.com/@ConfederateChud">YouTube</a>
      </div>
    </nav>
  `;

  // Automatically highlight the current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  header.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
      link.classList.add("active");
    }
  });
});
