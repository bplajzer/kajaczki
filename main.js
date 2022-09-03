const answer = document.querySelector(".answer");
const timeFull = document.querySelector(".time__full");
const timeWeeks = document.querySelector(".time__weeks");
const timeDays = document.querySelector(".time__days");
const timeHours = document.querySelector(".time__hours");
const timeMinutes = document.querySelector(".time__minutes");
const timeSeconds = document.querySelector(".time__seconds");

const fullDate = "";
const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;
const weeks = days * 7;

const lz = i => {
  return `${i}`.padStart(2, "0");
};

const showTimer = date => {
  const now = Date.now();
  const duration = date - now > 0 ? date - now : 0;

  timeSeconds.innerHTML = `${parseInt(duration / seconds)} sekund`;
  timeMinutes.innerHTML = `${parseInt(duration / minutes)} minut`;
  timeHours.innerHTML = `${parseInt(duration / hours)} godzin`;
  timeDays.innerHTML = `${parseInt(duration / days)} dni`;
  timeWeeks.innerHTML = `${parseInt(duration / weeks)} tygodni`;

  const timeDiff = calculateTimeDifference(duration);

  if (duration) {
    timeFull.innerHTML = `
              Do kajaczków🛶 pozostało: <br>
              <b>${timeDiff.days} dni
              ${timeDiff.hours} godzin
              ${timeDiff.minutes} minut i
              ${lz(timeDiff.seconds)} sekund</b>
          `;

    setTimeout(() => showTimer(date), 1000);
  } else {
    timeFull.innerHTML = `Kajaczki🛶 się odbyły/odbywają🎉`;
    answer.innerHTML = `TAK`;
  }
};

const calculateTimeDifference = timeDifference => {
  const eDaysToDate = timeDifference / days;
  const daysToDate = Math.floor(timeDifference / days);
  const daysToDateFix = daysToDate < 1 ? 1 : daysToDate;
  const eHoursToDate = (eDaysToDate % daysToDateFix) * 24;
  const hoursToDate = Math.floor(eHoursToDate);
  const eMinutesToDate = (eHoursToDate - hoursToDate) * 60;
  const minutesToDate = Math.floor(eMinutesToDate);
  const eSecondsToDate = Math.floor((eMinutesToDate - minutesToDate) * 60);
  const secondsToDate = Math.floor(eSecondsToDate);

  return {
    days: daysToDate,
    hours: hoursToDate,
    minutes: minutesToDate,
    seconds: secondsToDate,
  };
};

showTimer(Date.parse("2052-08-31T09:00:00.000000+02:00"));
