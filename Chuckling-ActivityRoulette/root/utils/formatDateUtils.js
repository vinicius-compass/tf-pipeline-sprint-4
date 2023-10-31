const { format, parseISO } = require('date-fns');

function formatDates(date) {
  return format(parseISO(date), 'dd-MM-yyyy');
}

module.exports = { formatDates };
