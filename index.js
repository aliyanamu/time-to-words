// expecting time to be a string in the format like '8:15' or '12:30'
const { NUMBER_TO_TEXT_DICTIONARY } = require('./number-dictionary');

function getTransformedHour (hours, minutes) {
  return minutes > 30 ? (hours + 1) : hours;
}

function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }
  if (time === '12:00') {
    return 'midday';
  }

  const [hours, minutes] = time.split(':').map(text => parseInt(text, 10));
  const transformedHours = getTransformedHour(hours, minutes);
  const transformedMinutes = minutes > 30 ? (60 - minutes) : minutes;

  if (minutes === 0) {
    return `${NUMBER_TO_TEXT_DICTIONARY[transformedHours]} o'clock`
  }

  if (hours > 0 && hours < 12) {
    const timeLabel = minutes > 30 ? 'to': 'past';
    return `${NUMBER_TO_TEXT_DICTIONARY[transformedMinutes]} ${timeLabel} ${NUMBER_TO_TEXT_DICTIONARY[transformedHours]}`
  }

  return 'does not match my time';
}

module.exports = { convertTimeToWords };