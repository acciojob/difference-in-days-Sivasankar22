var dateDiffInDays = function (date1, date2) {
  // Parse input dates and convert to UTC milliseconds
  const utcDate1 = Date.UTC(
    parseInt(date1.substring(0, 4)),
    parseInt(date1.substring(5, 7)) - 1,
    parseInt(date1.substring(8, 10))
  );

  const utcDate2 = Date.UTC(
    parseInt(date2.substring(0, 4)),
    parseInt(date2.substring(5, 7)) - 1,
    parseInt(date2.substring(8, 10))
  );

  // Calculate the difference in days
  const diffInMilliseconds = utcDate2 - utcDate1;
  const diffInDays = diffInMilliseconds / (24 * 60 * 60 * 1000);

  return Math.floor(diffInDays);
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date (YYYY-MM-DD):");
const dateTwo = prompt("Enter End Date (YYYY-MM-DD):");
alert(dateDiffInDays(dateOne, dateTwo));
