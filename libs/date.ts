export function getHours(number: number, isMetric: boolean) {
  const hours = new Date(number * 1000).getHours();

  const imperial = hours > 12 ? `${hours - 12} PM` : `${hours} AM`;

  return isMetric ? `${hours}:00` : imperial;
}

export function getDate(number: number, isMetric: boolean) {
  const WEEK_DAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const newDate = new Date(number * 1000);
  const day = newDate.getDay();
  const date = newDate.getDate();
  const month = newDate.getMonth();

  const formattedDate = isMetric
    ? `${WEEK_DAY[day]} ${`0${date}`.slice(-2)}/${`0${month}`.slice(-2)}`
    : `${WEEK_DAY[day]} ${`0${month}`.slice(-2)}/${`0${date}`.slice(-2)}`;

  return formattedDate;
}
