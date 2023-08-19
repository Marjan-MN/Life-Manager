// date_helper
// getting dates
// function formatDate(date) {
//     return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
//         date
//       ).getFullYear()}`;
// }

// module.exports = { formatDate }

module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  }};
