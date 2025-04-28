document.addEventListener("DOMContentLoaded", function () {
  if (!("Notification" in window)) {
    alert("This browser does not support notifications.");
  } else if (Notification.permission !== "granted") {
    Notification.requestPermission().then((permission) => {
      if (permission !== "granted") {
        alert("You need to allow notifications to get reminders!");
      }
    });
  }
});

function scheduleReminder() {
  const taskInput = document.getElementById("taskInput");
  const timeInput = document.getElementById("timeInput");
  const taskList = document.getElementById("taskList");

  const task = taskInput.value.trim();
  const time = Number(timeInput.value.trim());

  if (!task || isNaN(time) || time <= 0) {
    alert("Please enter a valid task and time (in seconds).");
    return;
  }

  // Add task to the list
  const listItem = document.createElement("li");
  listItem.textContent = `Task: ${task} - Reminder in ${time} sec`;
  taskList.appendChild(listItem);

  // Schedule notification
  setTimeout(() => {
    sendNotification(task);
  }, time * 1000);

  // Clear inputs
  taskInput.value = "";
  timeInput.value = "";
}

function sendNotification(task) {
  if (Notification.permission === "granted") {
    new Notification("Reminder", {
      body: task,
      icon: "https://cdn-icons-png.flaticon.com/512/3565/3565418.png", // optional icon
    });
  }
}
