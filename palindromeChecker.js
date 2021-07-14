function palinDromeChecker(str) {
  //make str to be alphanumeric
  str = str.match(/[A-Za-z0-9]/gi).join("").toLowerCase();
  for (let i = 0; i < Math.floor(str.length/2); i++) {
    if (str.charAt(i) !== str.charAt(str.length-i-1)) {
      //uses !== to compare characters one-by-one from the beginning and the end.
      return false;

    }
  }
  return true;

}
