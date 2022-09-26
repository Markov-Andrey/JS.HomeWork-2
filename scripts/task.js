// TASK 1
let name = prompt ('Ваше имя'),
age = +prompt ('Ваш возраст'), 
city = prompt ('Город проживания'), 
phone = prompt ('Ваш номер телефона'), 
email = prompt ('Ваша электронная почта'), 
company = prompt ('Место работы');
document.write (
	'Меня зовут ' + name + '. Мне ' 
	+ age + ' лет.<br>Я проживаю в городе ' 
	+ city + ' и работаю в компании ' 
	+ company + '.<br>Мои контактные данные: ' 
	+ '<br>' + phone + '<br>' + email
);
// TASK 2
let year = 2022 - age;
document.write (
	'<br>' + name + ' родился в ' 
	+ year + ' году'
);