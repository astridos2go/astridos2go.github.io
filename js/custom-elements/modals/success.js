class SuccessModal extends HTMLElement {
  constructor() {
    super();

    const wrapper = document.createElement("div");
    wrapper.setAttribute(
      "class",
      "flex w-fit items-center justify-center gap-1 rounded-lg border-2 border-green-200 bg-green-50 p-2 pointer-events-auto",
    );

    const SVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    SVG.setAttribute("viewBox", "0 0 24 24");
    SVG.setAttribute("fill", "currentColor");
    SVG.setAttribute("class", "h-5 w-5 fill-green-500");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill-rule", "evenodd");
    path.setAttribute("clip-rule", "evenodd");
    path.setAttribute(
      "d",
      "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
    );
    SVG.appendChild(path);
    wrapper.appendChild(SVG);

    const text = document.createElement("span");
    text.setAttribute("class", "text-sm font-semibold text-green-900");
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
        "h-6 w-6 fill-green-400 hover:fill-green-900 hover:bg-green-200/25 ml-4 p-1 rounded-md cursor-pointer",
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

customElements.define("success-modal", SuccessModal);
