// DARKMODE -------------------------------------------------------------

function toggleDarkMode() {
  const el = document.body;
  el.classList.toggle("dark-mode");
}

// DATETIME -------------------------------------------------------------

const el = document.getElementById("datetime");
const dateTime = new Date();
el.innerHTML = "Data e hora atual: " + dateTime;