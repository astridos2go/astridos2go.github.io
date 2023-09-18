class WarningModal extends HTMLElement {
  constructor() {
    super();

    const wrapper = document.createElement("div");
    wrapper.setAttribute(
      "class",
      "flex w-fit items-center justify-center gap-1 rounded-lg border-2 border-yellow-200 bg-yellow-50 p-2 pointer-events-auto",
    );

    const SVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    SVG.setAttribute("viewBox", "0 0 24 24");
    SVG.setAttribute("fill", "currentColor");
    SVG.setAttribute("class", "h-5 w-5 fill-yellow-500");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill-rule", "evenodd");
    path.setAttribute("clip-rule", "evenodd");
    path.setAttribute(
      "d",
      "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    );
    SVG.appendChild(path);
    wrapper.appendChild(SVG);

    const text = document.createElement("span");
    text.setAttribute("class", "text-sm font-semibold text-yellow-900");
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
        "h-6 w-6 fill-yellow-400 hover:fill-yellow-900 hover:bg-yellow-200/25 ml-4 p-1 rounded-md cursor-pointer",
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

customElements.define("warning-modal", WarningModal);
