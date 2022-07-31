export function calculateGross(RegHours,HolidayHours,PTOHours,Rate){
    return RegHours*Rate + HolidayHours*Rate*1.5 + PTOHours*Rate;
}