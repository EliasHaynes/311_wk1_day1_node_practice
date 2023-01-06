const moment = require('moment'); // require




const today = () => {
  // write code for dates.today
  const day = moment().format('dddd');
  return day;

}

const calendar = () => {
  // write code for dates.calendar
    return moment().format("MMM DD, YYYY");
}


const currentTime = () => {
  // write code for dates.currentTime
  return moment().format("hh:mm:ss A");
}

module.exports = {
  today,
  calendar,
  currentTime
}