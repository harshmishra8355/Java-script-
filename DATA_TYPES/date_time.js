let myDate = new Date();
console.log(myDate);
console.log(myDate.getDate());  // give only current date
console.log(myDate.getDay());   // day of week (0=sunday, 6 = saturday)
console.log(myDate.getFullYear());  // give current year
console.log(myDate.getHours());
console.log(myDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));  // getting exact time according to IST
console.log(myDate.getMilliseconds()); // Millisecods
console.log(myDate.toLocaleDateString());   // 10/27/2025 ----> MM/DD/YEAR ---> typeof of this is String
console.log(Date.now());
console.log(myDate.getMonth()); // 9 ----> jan = 0, dec = 11;


// for furthuer things do Geeks for geeks   

// Add Date_and_time.js with current date and time functionalities