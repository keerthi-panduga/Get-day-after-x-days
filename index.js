const addDays = require('date-fns/addDays')
function sum(num) {
  const date = addDays(new Date(2020, 8, 22), num)
  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
}
module.exports=sum
