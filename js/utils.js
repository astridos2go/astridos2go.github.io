const directions = [
  "bg-gradient-to-t",
  "bg-gradient-to-tr",
  "bg-gradient-to-r",
  "bg-gradient-to-br",
  "bg-gradient-to-b",
  "bg-gradient-to-bl",
  "bg-gradient-to-l",
  "bg-gradient-to-tl",
];

const gradients = [
  ["from-pink-500", "via-red-500", "to-yellow-500"],
  ["from-green-300", "via-blue-500", "to-purple-600"],
  ["from-green-300", "via-blue-500", "to-purple-600"],
  ["from-indigo-200", "via-red-200", "to-yellow-100"],
  ["from-yellow-100", "via-yellow-300", "to-yellow-500"],
  ["from-yellow-200", "via-green-200", "to-green-500"],
  ["from-red-200", "via-red-300", "to-yellow-200"],
  ["from-green-200", "via-green-300", "to-blue-500"],
  ["from-yellow-200", "via-yellow-400", "to-yellow-700"],
  ["from-green-200", "via-green-400", "to-purple-700"],
  ["from-red-200", "to-red-600"],
  ["from-green-300", "via-yellow-300", "to-pink-300"],
  ["from-indigo-300", "to-purple-400"],
  ["from-green-200", "to-green-500"],
  ["from-purple-200", "via-purple-400", "to-purple-800"],
  ["from-gray-400", "via-gray-600", "to-blue-800"],
  ["from-blue-100", "via-blue-300", "to-blue-500"],
  ["from-green-200", "via-green-400", "to-green-500"],
  ["from-purple-400", "to-yellow-400"],
  ["from-red-400", "via-gray-300", "to-blue-500"],
  ["from-red-800", "via-yellow-600", "to-yellow-500"],
  ["from-yellow-200", "to-yellow-500"],
  ["from-blue-300", "via-green-200", "to-yellow-300"],
  ["from-yellow-200", "via-green-200", "to-green-300"],
  ["from-yellow-200", "via-yellow-300", "to-yellow-400"],
  ["from-blue-700", "via-blue-800", "to-gray-900"],
  ["from-green-300", "to-purple-400"],
  ["from-yellow-200", "via-pink-200", "to-pink-400"],
  ["from-pink-400", "to-pink-600"],
  ["from-yellow-600", "to-red-600"],
  ["from-green-500", "to-green-700"],
  ["from-red-500", "to-green-500"],
  ["from-orange-600", "to-orange-500"],
  ["from-lime-600", "via-yellow-300", "to-red-600"],
  ["from-rose-700", "to-pink-600"],
  ["from-rose-400", "via-fuchsia-500", "to-indigo-500"],
  ["from-slate-900", "via-purple-900", "to-slate-900"],
  ["from-sky-400", "via-rose-400", "to-lime-400"],
  ["from-fuchsia-500", "via-red-600", "to-orange-400"],
  ["from-teal-200", "to-lime-200"],
  ["from-fuchsia-600", "to-pink-600"],
  ["from-yellow-500", "via-purple-500", "to-blue-500"],
];

/**
 * Retrieves the current year based on the user's local time zone.
 *
 * @returns {number} The current year as a 4-digit integer.
 */
function getCurrentYear() {
  const today = new Date();
  const year = today.getFullYear();
  return year;
}

/**
 * Returns a random element from the calling array.
 *
 * @this {Array} The array from which to select a random element.
 * @returns {*} A random element from the array.
 */
Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

/**
 * Generates a list of Tailwind CSS classes for a gradient consisting of a direction and colors.
 *
 * @returns {string[]} An array containing the tailwind class names, containing random direction and gradient colors.
 */
function getBackgroundGradient() {
  return [directions.random(), ...gradients.random()];
}

function getTheme() {
  return localStorage.getItem("site-theme", "system");
}

function setTheme(newTheme) {
  const theme = newTheme.toLowerCase();
  switch (theme) {
    case "system":
      const newTheme = getSystemTheme();
      _setTheme(newTheme);
      break;
    default:
      _setTheme(theme);
      break;
  }
  localStorage.setItem("site-theme", theme);
}

function _setTheme(theme) {
  switch (theme) {
    case "light":
      console.log("Setting to light theme");
      $(document.body).removeClass("dark");
      break;
    case "dark":
      console.log("Setting to dark theme");
      $(document.body).addClass("dark");
      break;
    default:
      console.error("Theme is not valid: " + theme);
      break;
  }
}

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
