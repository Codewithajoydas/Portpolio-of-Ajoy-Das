let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");
let td = document.getElementById("td");
let h1 = document.querySelector("h1");
setInterval(() => {
  const d = new Date();
  let hr = d.getHours().toString().padStart(2, "0");
  let min = d.getMinutes().toString().padStart(2, "0");
  let sec = d.getSeconds().toString().padStart(2, "0");
  const ampm = d.getHours() >= 12 ? "pm" : "am";
  let date = d.getDate();
  let month = d.getMonth()+1;
  let year = d.getFullYear();
  hh.innerText = hr;
  mm.innerText = min;
  ss.innerText = sec;
  td.innerText = ampm;
  let day = d.getDay();
  let dayname;
  switch (day) {
    case 0:
      dayname = "Sunday";
      break;
    case 1:
      dayname = "Monday";
      break;
    case 2:
      dayname = "Tuesday";
      break;
    case 3:
      dayname = "Wednesday";
      break;
    case 4:
      dayname = "Thursday";
      break;
    case 5:
      dayname = "Friday";
      break;
    case 6:
      dayname = "Saturday";
      break;
    default:
      dayname = "Invalid";
  }
  h1.innerText = `${dayname}, ${date}-${month}-${year}`;
}, 1000);
