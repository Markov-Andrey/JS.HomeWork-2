// TASK 3
let number = prompt ('Введите 6-значное число');
if (
	+number.substr(0,1) + +number.substr(1,1) + +number.substr(2,1) == 
	+number.substr(3,1) + +number.substr(4,1) + +number.substr(5,1)
	) {
		document.write (number.substr(0,3) + number.substr(3,3) + '<br>')
		document.write ('Да, сумма первых 3-х чисел равна сумме других 3-х чисел')
	} else {
		document.write (number.substr(0,3) + number.substr(3,3) + '<br>')
		document.write ('Нет, сумма первых 3-х чисел не равна сумме других 3-х чисел')
	};