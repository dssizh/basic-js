module.exports = function countCats(m) {
  
  let cats = 0;
  for (i=0; i<m.length; i++) {
    strArr = m[i];
    for (j=0; j<strArr.length; j++) {
      ind = strArr.indexOf("^^", j);
      if (ind != -1) {
        cats++
        j = ind
      }
    }
  }

return cats
};
