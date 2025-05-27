function applyTheme(theme) {
  if (theme === "night") {
    document.body.classList.add("night");
    document.getElementById("themeSwitch").checked = true;
  } else {
    document.body.classList.remove("night");
    document.getElementById("themeSwitch").checked = false;
  }
  localStorage.setItem("theme", theme);
}

function autoSetTheme() {
  const hour = new Date().getHours();
  const theme = hour >= 7 && hour < 21 ? "day" : "night";
  applyTheme(theme);
}

// Перевірити localStorage або встановити тему за часом
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  autoSetTheme();
}

// Слухач перемикача
document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("themeSwitch");
  switcher.addEventListener("change", () => {
    const newTheme = switcher.checked ? "night" : "day";
    applyTheme(newTheme);
  });
});
