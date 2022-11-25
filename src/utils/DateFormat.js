const formatDate = (utcDate) => {
    const date = new Date(utcDate);
    return date.getUTCDate();
  };

const formatYear = (utcDate) => {
    const date = new Date(utcDate);
    return date.getUTCFullYear();
};

const formatMonth  = (utcDate) => {
    const date = new Date(utcDate);
    const dateMonth = date.getUTCMonth()
    let month;
  
    switch (dateMonth) {
      default:
      case 0:
        month = "JAN";
        break;
      case 1:
        month = "FEB";
        break;
      case 2:
        month = "MAR";
        break;
      case 3:
        month = "APR";
        break;
      case 4:
        month = "MAY";
        break;
      case 5:
        month = "JUN";
        break;
      case 6:
        month = "JUL";
        break;
      case 7:
        month = "AUG";
        break;
      case 8:
        month = "SEP";
        break;
      case 9:
        month = "OCT";
        break;
      case 10:
        month = "NOV";
        break;
      case 11:
        month = "DEC";
        break;
    }
    return month;
}
  
  
  export { formatDate, formatYear, formatMonth };