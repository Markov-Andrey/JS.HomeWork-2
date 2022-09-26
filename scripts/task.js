// TASK 1
let name = prompt ('Ваше имя', 'Иванов Иван Иванович'),
age = +prompt ('Ваш возраст', '28'), 
city = prompt ('Город проживания', 'Минск'), 
phone = prompt ('Ваш номер телефона', '+375291506253'), 
email = prompt ('Ваша электронная почта', 'email@mail.ru'), 
company = prompt ('Место работы', 'Apple');
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