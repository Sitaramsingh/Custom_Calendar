function getTodayDate(date?: Date){
   if(date){
    return new Date(date);
   }else{
    return new Date();
   }
}

function getDays() {
    const locale = 'en-US' // Change this based on client settings
    const date = getTodayDate()

    const weekdays = []
    while (!weekdays[date.getDay()]) {
        weekdays[date.getDay()] = date.toLocaleString(locale, { weekday: 'long' })
        date.setDate(date.getDate() + 1)
    }
    return weekdays;

}


function getMonthDays(year: number, month: | number, value: | number) {
    // const daysArray = [];
    // const getDays =  new Date(year, month, 0).getDate();
    // for(let i = 1; i <= getDays; i++){
    //     daysArray.push(i);
    // }
    // return daysArray;

    // todayDate
    const date = new Date(year, month, value);
    return date;
    // var lastDay = new Date(year, month + 1, 0);

}

function dateFormate(date: Date, langCode: string, option: any)  {
    return date.toLocaleDateString(langCode,  option)
}
function getDayNumber(day: string) {
    let dayNum : number = 0;
    switch (day) {
        case 'Sunday':
            dayNum= 0;
            break;
        case 'Monday':
            dayNum = 1;
            break;
        case 'Tuesday':
            dayNum = 2;
            break;
        case 'Wednesday':
            dayNum = 3;
            break;
        case 'Thursday':
            dayNum = 4;
            break;
        case 'Friday':
            dayNum = 5;
            break;
        case 'Saturday':
            dayNum = 6;
            break;
    }
    return dayNum;
}

function getCompleteMonthDateList (date: Date) {
const dateObject = new Date(date); 
var end = new Date(dateObject.getFullYear(), dateObject.getMonth() + 1, 0).getDate(); // end date of month
var result = [];
const currentMMOnth = dateObject.getMonth() + 1;
    for(let i = 1; i <= end; i++){
        const CreatedDate =  `${dateObject.getFullYear()}-${currentMMOnth}-${i}`
        result.push(new Date(CreatedDate));
    }
    return result;
}

function getDateRange (startDate: Date, endDate: Date) {
    const dateArray = [];
    const currentDate = getTodayDate(startDate);
    const stopDate = getTodayDate(endDate);
    while (currentDate <= stopDate) {
        dateArray.push( getTodayDate(currentDate))
        currentDate.setDate(currentDate.getDate() + 1)
        // currentDate = getTodayDate(day);
    }
    return dateArray;
    }


export {
    getDays,
    getMonthDays,
    getDayNumber,
    dateFormate,
    getCompleteMonthDateList,
    getDateRange,
    getTodayDate
};


