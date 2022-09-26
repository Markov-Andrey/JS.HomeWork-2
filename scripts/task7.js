// TASK 7
function randomInteger(min, max) {
  let n = min + Math.random() * (max + 1 - min);
  return Math.floor(n);
}
n = randomInteger(0, 59)
document.write ('<p>Функция случайного числа от 0 до 59:<br>' + n);
if ((n >= 0) && (n <16)) {
	document.write ('<br>...и находится в 1-й четверти</p>');
} else if ((n >= 16) && (n <30)) {
	document.write ('<br>...и находится во 2-й четверти</p>');
} else if ((n >= 30) && (n <45)) {
	document.write ('<br>...и находится в 3-й четверти</p>');
} else if ((n >= 45) && (n <60)) {
	document.write ('<br>...и находится в 4-й четверти</p>');
}
// TASK 8
document.write ('<hr>');
n = randomInteger(1, 31)
document.write ('<p>Функция случайного числа от 1 до 31:<br>');
switch(n) {
	case 1:	
	case 2:
	case 3:
	case 4:
	case 5:
	case 6:
	case 7:
	case 8:
	case 9:
	case 10:
	document.write ('День ' + n + ' - это первая декада!</p>');
	break;
	case 11:
	case 12:
	case 13:
	case 14:
	case 15:
	case 16:
	case 17:
	case 18:
	case 19:
	case 20:
	document.write ('День ' + n + ' - это вторая декада!</p>');
	break;
	case 21:
	case 22:
	case 23:
	case 24:
	case 25:
	case 26:
	case 27:
	case 28:
	case 29:
	case 30:
	case 31:
	document.write ('День ' + n + ' - это третья декада!</p>');
	break;
}