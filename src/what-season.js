module.exports = function getSeason(date) {


  if (date == null) {
    return "Unable to determine the time of year!"
  }
  
  if (new Date(Date.parse(date)).getMinutes() == new Date(Date.now()).getMinutes() && new Date(Date.parse(date)).getDay() == new Date(Date.now()).getDay()){
    throw new Error()
  }

    try {
      d = date.getMonth()
    } catch (error) {
      throw new Error()
    }


  let month = date.getMonth()


  if (month == 11||month==0||month==1) {
    return "winter"
  } else if (month>1&&month<5) {
    return "spring"
  } else if (month>4&&month<8) {
    return "summer"
  } else if (month > 7&&month < 11) {
    return "autumn"
  }

};
