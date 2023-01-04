// import moment here; use this package in each function

const today = () => {
  // write code for dates.today

}

const calendar = () => {
  // write code for dates.calendar
  
    return moment().format("MMMM Do, YYYY");
}


const currentTime = () => {
  // write code for dates.currentTime

}

module.exports = {
  today,
  calendar,
  currentTime
}