// TASK 5
let b = 2;
a = 10;
document.write ('<p>A*B = ' + (a * b) + '<br>');
document.write ('A+B = ' + (a + b) + '<br>');
document.write ('A/B = ' + (a / b) + '<br>');
document.write ('A-B = ' + (a - b) + '</p>');
if (
	(a + b) > 1
	) {
		document.write ('<p>Квадрат суммы = ' + Math.pow((a + b), 2) + '</p>')
	} else {
		document.write ('<p>Сумма = ' + (a + b) + '</p>')
	};
// TASK 6
		document.write ('<hr><p>Если переменная А больше 2 и меньше 11, или переменная Б больше или равна 6 и меньше 14, то выведите \'Верно\' а в противном случае выведите \'Неверно\' <p>')
if (
	(a > 2 && a < 11) || (b >= 6 && b < 14)
	) {
		document.write ('Ответ: Верно <br>')
	} else {
		document.write ('Ответ: Неверно <br>')
	};