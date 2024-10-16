// expecting time to be a string in the format like '8:15' or '12:30'

const numberToText = {
  1: 'one',
  2: 'two',
  3: 'three',
  5: 'five',
  8: 'eight',
  15: 'quarter',
  30: 'half',
};

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
  const timeLabel = minutes > 30 ? 'to': 'past';

  if (minutes === 0) {
    return `${numberToText[transformedHours]} o'clock`
  }
  if (hours > 0 && hours < 12) {
    return `${numberToText[transformedMinutes]} ${timeLabel} ${numberToText[transformedHours]}`
  }

  return 'does not match my time';
}

module.exports = { convertTimeToWords };