// Отримання інформації про браузер і ОС
const browserInfo = {
  appName: navigator.appName,
  appVersion: navigator.appVersion,
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language,
  cookiesEnabled: navigator.cookieEnabled,
};

// Зберігаємо в localStorage
localStorage.setItem("browserData", JSON.stringify(browserInfo));

// Отримуємо з localStorage і виводимо у футер
const savedData = JSON.parse(localStorage.getItem("browserData"));
const footer = document.getElementById("browser-info");
footer.innerHTML =
  `<h3>Browser & OS Info:</h3><ul>` +
  Object.entries(savedData)
    .map(([key, value]) => `<li><b>${key}:</b> ${value}</li>`)
    .join("") +
  `</ul>`;
