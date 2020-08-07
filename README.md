1.	Array Processing Tool
	a.	Sub Sum
	На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
	Задача — найти непрерывный подмассив arr, сумма элементов которого максимальна. Функция должна возвращать только эту сумму.
	Написать два решения, сложность O(n2) и O(n).

	b.	Search
	Написать функционал поиска минимального, максимального, медианного значения в массиве.

	c.	Selection Task
	Написать функционал поиска возрастающей последовательности максимальной длины в исходном массиве.

	Все функции обернуть в один объект для обработки массивов.

2.	Date Display Formatter
Разработать объект для форматирования дат (объект содержащий набор функций). Объект должен позволять обрабатывать входные данные в виде строки или в виде числа (ticks, ms). Объект должен поддерживать возможность передачи внутрь регулярного выражения для разбора исходной строки и построения выходной строки.

Например:
1.	“31102011” => “31-10-2011”
2.	“31102011” => “31 October 2011”
3.	(“20130431”, “YYYYMMDD”) => 31 April 2013
4.	(“20130431”, “YYYYMMDD”, “MM-DD-YYYY”) => 04-31-2013
5.	(“2013-04-31”, “YYYY-MM-DD”).fromNow() => 2 years ago
		
		Реализовать как можно больше прикладных конверсий.

3.	Text Formatter
Написать функцию обработчика входного текста. Функция должна принимать на вход строку, максимальный размер строки (опционально), максимальное количество строк (опционально), тип форматирования (“перенос по слову”, “перенос по символу”, “перенос по предложению”, “переносов нет” - опционально).

4.	String calculator
Разработать объект содержащий набор методов для выполнения функций калькулятора над числами передаваемыми в строковом представлении. Методы должны позволять работать как в целочисленном, так и вещественном формате.


5.	Array Sorter
Разработать объект сортировщик, позволяющий производить сортировки целочисленных массивов не менее чем 4 способами.


6.	Binary Converter
Создать объект позволяющий производить конвертацию чисел из двоичной системы исчисления в десятеричную и обратно. Числа представлены в виде векторов (массивов чисел, где индекс является разрядом).

Дополнительно: создать функции для перевода из любой системы в любую.


7.	* Caching calculator
Написать функционал позволяющий производить операции над двумя числами и кэширование результата выполнения операции так, чтобы при повторном вызове функционала с теми же параметрами взялось закэшированное значение и не производилось перевычисление результата. Функционал обернуть в объект и сделать демонстрационную страницу для тестирования функционала.


Дополнительно: создать функционал регистрации кэшируемых функций, который позволит указывать кэшируемые функции и настройки кэша. Продемонстрировать подключение кэширования нескольких функций и использование кэшируемых результатов этих функций.
