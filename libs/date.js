const months = {
  'Janvier': 'January',
  'Février': 'February',
  'Mars': 'March',
  'Avril': 'April',
  'Mai': 'May',
  'Juin': 'June',
  'Juillet': 'July',
  'Août': 'August',
  'Septembre': 'September',
  'Octobre': 'October',
  'Novembre': 'November',
  'Décembre': 'December'
};

function convertDate(dateStr) {
  const [month, year] = dateStr.split(' ');
  return new Date(`${months[month]} ${year}`);
}

export function compareDate(date1, date2) {
  const dateObj1 = convertDate(date1);
  const dateObj2 = convertDate(date2);
  return dateObj1 < dateObj2 ? 1 : dateObj1 > dateObj2 ? -1 : 0;
}
