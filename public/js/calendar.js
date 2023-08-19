const Handlebars = require("handlebars");
const fs = require("fs");

// Load the Handlebars template
const templateSource = fs.readFileSync("calendar-template.hbs", "utf8");
const template = Handlebars.compile(templateSource);

// Define the days of the week
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Define a function to generate calendar days
function generateCalendarDays(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const days = [];
  for (let day = 1; day <= lastDay.getDate(); day++) {
    days.push(day);
  }

  const leadingEmptyDays = new Array(firstDay.getDay()).fill("");
  const trailingEmptyDays = new Array(6 - lastDay.getDay()).fill("");

  return leadingEmptyDays.concat(days, trailingEmptyDays);
}

// Define the data for the template
const currentDate = new Date();
const data = {
  monthName: currentDate.toLocaleString("default", { month: "long" }),
  year: currentDate.getFullYear(),
  daysOfWeek: daysOfWeek,
  calendarDays: generateCalendarDays(currentDate.getFullYear(), currentDate.getMonth()),
};

// Compile the template with the data
const html = template(data);

// Write the generated HTML to a file 
fs.writeFileSync("calendar.html", html, "utf8");

console.log("Calendar generated successfully!");