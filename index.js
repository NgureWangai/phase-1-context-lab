/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function createEmployeeRecord(employeeArray) {
    return {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}
function createEmployeeRecords(employeesArray) {
    return employeesArray.map(createEmployeeRecord);
}
function createTimeInEvent(timeStamp) {
    let [date, hour] = timeStamp.split(' ');
    this.timeInEvents.push({ type: 'TimeIn', hour: parseInt(hour), date });
    return this;
}
function createTimeOutEvent(timeStamp) {
    let [date, hour] = timeStamp.split(' ');
    this.timeOutEvents.push({ type: 'TimeOut', hour: parseInt(hour), date });
    return this;
}
function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(event => event.date === date);
    let timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
}
function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
}
function calculatePayroll(employeesArray) {
    return employeesArray.reduce((totalPayroll, employee) => {
        return totalPayroll + allWagesFor.call(employee);
    }, 0);
}



