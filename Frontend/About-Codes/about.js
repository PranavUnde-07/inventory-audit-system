// Select all sidebar links
  const sidebarLinks = document.querySelectorAll("aside li a");

  sidebarLinks.forEach(link => {
    link.addEventListener("click", function() {
      // Remove active state from all
      sidebarLinks.forEach(l => l.classList.remove("bg-custom-light-purple", "text-custom-purple", "font-semibold"));

      // Add active state to clicked one
      this.classList.add("bg-custom-light-purple", "text-custom-purple", "font-semibold");
    });
  });
