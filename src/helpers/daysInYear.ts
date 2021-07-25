const isLeapYear = (year: number): boolean =>
  year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);

const daysInYear = (year: number): number => (isLeapYear(year) ? 366 : 365);

export default daysInYear;
