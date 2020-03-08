module.exports = function createDreamTeam(m) {
  
  if (typeof m != "object") {
    return false;
  }

  try {
    l = m.length
  } catch (error) {
    return false
  }

  let res = [];

    for (i=0; i<m.length; i++) {
      if (typeof m[i] != "string") {
        continue
      }
      
      res.push(m[i].trim()[0].toUpperCase());
    }

    res.sort()
    let str = "";
    for (i=0; i<res.length; i++) {
      str = str + res[i]
    }
  
    return str
};