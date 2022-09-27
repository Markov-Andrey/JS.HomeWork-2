// TASK 10
function randomInteger1(min, max) {
  let m = min + Math.random() * (max + 1 - min);
  return Math.floor(m);
}
m = randomInteger1(1, 356)
switch(true) {
	case m <= 31 * 1:
	document.write ('<p>День ' + m + ' - Январь, зима</p>'
	+ '<img src="images/01.jpg" alt="Winter">');
	break;
	case m <= 31 * 2:
	document.write ('<p>День ' + m + ' - Февраль, зима</p>'
	+ '<img src="images/01.jpg" alt="Winter">');
	break;
	case m <= 31 * 3:
	document.write ('<p>День ' + m + ' - Март, весна</p>'
	+ '<img src="images/02.jpg" alt="Spring">');
	break;
	case m <= 31 * 4:
	document.write ('<p>День ' + m + ' - Апрель, весна</p>'
	+ '<img src="images/02.jpg" alt="Spring">');
	break;
	case m <= 31 * 5:
	document.write ('<p>День ' + m + ' - Май, весна</p>'
	+ '<img src="images/02.jpg" alt="Spring">');
	break;
	case m <= 31 * 6:
	document.write ('<p>День ' + m + ' - Июнь, лето</p>'
	+ '<img src="images/03.jpg" alt="Summer">');
	break;
	case m <= 31 * 7:
	document.write ('<p>День ' + m + ' - Июль, лето</p>'
	+ '<img src="images/03.jpg" alt="Summer">');
	break;
	case m <= 31 * 8:
	document.write ('<p>День ' + m + ' - Август, лето</p>'
	+ '<img src="images/03.jpg" alt="Summer">');
	break;
	case m <= 31 * 9:
	document.write ('<p>День ' + m + ' - Сентябрь, осень</p>'
	+ '<img src="images/04.jpg" alt="Autumn">');
	break;
	case m <= 31 * 10:
	document.write ('<p>День ' + m + ' - Октябрь, осень</p>'
	+ '<img src="images/04.jpg" alt="Autumn">');
	break;
	case m <= 31 * 11:
	document.write ('<p>День ' + m + ' - Ноябрь, осень</p>'
	+ '<img src="images/04.jpg" alt="Autumn">');
	break;
	case m <= 31 * 12:
	document.write ('<p>День ' + m + ' - Декабрь, зима</p>'
	+ '<img src="images/01.jpg" alt="Winter">');
	break;
}

// TASK 10 АЛЬТЕРНАТИВНОЕ РЕШЕНИЕ (через 3 массива и цикл)
/*
function randomInteger1(min, max) {
  let m = min + Math.random() * (max + 1 - min);
  return Math.floor(m);
}
m = randomInteger1(1, 356);
let month = [
	'Январь', 'Февраль', 'Март', 
	'Апрель', 'Май', 'Июнь', 
	'Июль', 'Август', 'Сентябрь', 
	'Октябрь', 'Ноябрь', 'Декабрь'
	];
let season = [
	'зима', 'зима', 
	'весна', 'весна', 'весна', 
	'лето', 'лето', 'лето', 
	'осень', 'осень', 'осень', 
	'зима'
];
let img = [
	'<img src="images/01.jpg" alt="Winter">', 
	'<img src="images/01.jpg" alt="Winter">', 
	'<img src="images/02.jpg" alt="Spring">', 
	'<img src="images/02.jpg" alt="Spring">', 
	'<img src="images/02.jpg" alt="Spring">', 
	'<img src="images/03.jpg" alt="Summer">', 
	'<img src="images/03.jpg" alt="Summer">', 
	'<img src="images/03.jpg" alt="Summer">', 
	'<img src="images/04.jpg" alt="Autumn">', 
	'<img src="images/04.jpg" alt="Autumn">', 
	'<img src="images/04.jpg" alt="Autumn">', 
	'<img src="images/01.jpg" alt="Winter">'
];

let i = 1;
while (i <= 12) {
	if ((m > 31 * i - 31) && (m <= 31 * i)) {
		document.write ('<p>День ' + m + ' - ' + month [i-1] + ', ' 
		+ season [i-1] + '</p>' 
		+ img [i-1]);
	}
	i++
}
*/
