class ThemeSwitcher extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Initial rendering
    this.render();

    // Add event listener for click
    this.shadowRoot
      .querySelector("button")
      .addEventListener("click", () => this.switchTheme());
  }

  switchTheme() {
    const currentTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    localStorage.setItem("theme", newTheme);
    switch (newTheme) {
      case "light": {
        $(document.body).removeClass("dark");
      }
      case "dark": {
        $(document.body).addClass("dark");
      }
    }

    // Re-render to update the icon
    this.render();
  }

  render() {
    const currentTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    this.innerHTML = `
        <div onclick="this.switchTheme()">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
            </svg>
        </div>
      `;
  }
}

customElements.define("theme-switcher", ThemeSwitcher);
