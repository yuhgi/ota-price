export function pad(num,n){
    let len = num.toString().length;
    while(len < n){
        num = '0' + num;
        len++;
    }
    return num;
}

export function getPrevMonth(year,month){
    if(typeof year !== 'number' || typeof month !== 'number'){
        return null;
    }
    let prevMonth = month - 1;
    let prevYear = year;
    if(prevMonth === 0){
        prevMonth = 12;
        prevYear -= 1;
    }
    return {
        year:prevYear,
        month:prevMonth
    };
}

export function getNextMonth(year,month){
    if(typeof year !== 'number' || typeof month !== 'number'){
        return null;
    }
    let nextMonth = month + 1;
    let nextYear = year;
    if(nextMonth === 13){
        nextMonth = 1;
        nextYear += 1;
    }
    return {
        year:nextYear,
        month:nextMonth
    };
}