const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

function countHours(year, holidays) {
    let extraHours = 0;
    holidays.forEach(day => {
        let date = new Date(day + '/' +year)
        let today = date.getDay()
        if (today !== 0 && today !=6)
            extraHours += 2
        })
        return extraHours
    }

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

countHours(year, holidays) // 2 days -> 4 extra hours in the year
