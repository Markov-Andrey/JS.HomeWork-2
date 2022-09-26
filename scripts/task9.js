// TASK 9
function randomInt(min, max) {
  let day = min + Math.random() * (max + 1 - min);
  return Math.floor(day);
}
day = randomInt(0, 100000)
document.write ('<p>Случайное количество: ' + day + ' дней. А это:<br>');
if (day <= 365) {
	document.write ('Меньше года');
} else {
	document.write (Math.round(day / 365) + ' лет;<br>');
}
if (day <= 31) {
	document.write ('Меньше месяца </p>');
} else {
	document.write ('или ' + Math.round(day / 31) + ' месяцев;<br>');
}
if (day <= 7) {
	document.write ('Меньше недели </p>');
} else {
	document.write ('или ' + Math.round(day / 7) + ' недель;<br>');
}
	document.write ('или ' + Math.round(day * 24) + ' часа;<br>');
	document.write ('или ' + Math.round(day * 24 * 60) + ' минут;<br>');
	document.write ('или ' + Math.round(day * 24 * 60 * 60) + ' секунд;<br>');