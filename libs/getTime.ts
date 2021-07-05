export function getTime(string, isMetric) {
  const date = new Date(string * 1000).getHours();

  const imperial = date > 12 ? `${date - 12} PM` : `${date} AM`;

  return isMetric ? `${date}:00` : imperial;
}
