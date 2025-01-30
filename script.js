const slacktime = document.getElementById("time")
const slackday = document.getElementById("day")


setInterval(() => {
    const currentTime = new Date().toLocaleTimeString();
    slacktime.innerHTML = currentTime;
  }, 1000);
  
  
  const currentDay = new Date().getDay()

  switch (currentDay) {
    case 0: slackday.innerHTML = "Sunday"
        break;
    case 1: slackday.innerHTML = "Monday"
        break;
    case 2: slackday.innerHTML = "Tuesday"
      break;
    case 3: slackday.innerHTML = "Wednesday"
        break;
    case 4: slackday.innerHTML = "Thursday"
        break;
    case 5: slackday.innerHTML = "Friday"
        break;
    case 6: slackday.innerHTML = "Saturday"
        break;
    default:
        slackday.innerHTML = "Null"

        break;
  }
