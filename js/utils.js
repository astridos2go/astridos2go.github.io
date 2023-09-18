
/** Returns the current year from the user's time zone */
function getCurrentYear() {
  const today = new Date();
  const year = today.getFullYear();
  return year
}

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}