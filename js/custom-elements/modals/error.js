class ErrorModal extends HTMLElement {
  static get observedAttributes() {
    return ["hide", "clearable"];
  }

  attributeChangedCallback() {
    this.render();
  }

  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = "";

    if (this.hasAttribute("hide")) {
      return;
    }

    const wrapper = document.createElement("div");
    wrapper.setAttribute(
      "class",
      "flex w-fit cursor-default items-center justify-center gap-1 rounded-lg border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950 p-2 pointer-events-auto",
    );

    const SVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    SVG.setAttribute("viewBox", "0 0 24 24");
    SVG.setAttribute("fill", "currentColor");
    SVG.setAttribute("class", "h-5 w-5 fill-red-500");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill-rule", "evenodd");
    path.setAttribute("clip-rule", "evenodd");
    path.setAttribute(
      "d",
      "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    );
    SVG.appendChild(path);
    wrapper.appendChild(SVG);

    const text = document.createElement("span");
    text.setAttribute(
      "class",
      "text-sm font-semibold text-red-900 dark:text-red-500",
    );
    text.textContent = this.getAttribute("message");
    wrapper.appendChild(text);

    if (this.hasAttribute("clearable")) {
      const clearButtonSVG = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg",
      );
      clearButtonSVG.setAttribute("viewBox", "0 0 24 24");
      clearButtonSVG.setAttribute("fill", "currentColor");
      clearButtonSVG.setAttribute(
        "class",
        "h-6 w-6 fill-red-400 hover:fill-red-900 hover:bg-red-200/25 dark:fill-red-500 dark:hover:bg-red-900 ml-4 p-1 rounded-md cursor-pointer",
      );

      const clearPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      );
      clearPath.setAttribute("fill-rule", "evenodd");
      clearPath.setAttribute("clip-rule", "evenodd");
      clearPath.setAttribute(
        "d",
        "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
      );
      clearButtonSVG.appendChild(clearPath);

      // Add click listener to hide the modal
      clearButtonSVG.addEventListener("click", () => {
        this.style.display = "none";
      });

      // Append clear SVG to wrapper
      wrapper.appendChild(clearButtonSVG);
    }

    this.appendChild(wrapper);
  }
}

customElements.define("error-modal", ErrorModal);
