//https://www.codewars.com/kata/53af2b8861023f1d88000832/solutions/javascript
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }