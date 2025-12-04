document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main-content");

  document.addEventListener("click", e => {
    const link = e.target.closest("a[data-ajax]");
    if (!link) return;

    const url = link.getAttribute("href");
    if (!url) return;

    e.preventDefault();
    loadPage(url);
  });

  function loadPage(url) {
    main.innerHTML = "<p style='text-align:center'>Đang tải...</p>";

    fetch(url)
      .then(res => res.text())
      .then(html => {
        main.innerHTML = html;
        window.scrollTo(0, 0);
      })
      .catch(() => {
        main.innerHTML = "<p style='color:red'>Không tải được trang</p>";
      });
  }
});
