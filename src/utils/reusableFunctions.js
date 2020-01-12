import { calendarMonth, calendarDays } from "./staticVariables";

export const dateBuilder = d => {
  let day = calendarDays[d.getDay()];
  let date = d.getDate();
  let month = calendarMonth[d.getMonth()];
  let year = d.getFullYear();
  return `${day} ${date} ${month} ${year}`;
};
