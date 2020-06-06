const connection = new WebSocket("ws://localhost:3000");
const logWindow = document.querySelector("#log-window");
const filePath = document.getElementById("logFilePath");
connection.onopen = () => {
  if (filePath) connection.send(filePath);
};

connection.onmessage = (event) => {
  logWindow.innerHTML = event.data;
};
