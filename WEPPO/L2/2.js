// użycie operatorów . oraz [] do odwoływania się do składowych obiektu.
	// –Jakie są różnice między tymi dwoma sposobami

		const o = {
			ser:"owca",
			owca:"krewetka"
		};
		const b = {
			oh:"no"
		}

		console.log(o.owca);
		console.log(o["ser"]);

		// [] pozwala na klucze zawierające znaki spcejalne czy rozpoczęte cyfrą, a także generowane dynamicznie

// użycie argumentów innego typu niż string dla operatora [] dostępu do składowej obiektu.
	// –Co się dzieje jeśli argumentem operatora jest liczba?
		
	console.log(o[1])
		/*
			> o[11] = "foo"
			'foo'
			> o
			{
			'11': 'foo',
			ser: 'owca',
			owca: 'krewetka',
			}
			> o["11"]
			'foo'


			Jak widać następuje konwersja na stringa.
		*/

	// –Co się dzieje jeśli argumentem operatora jest inny obiekt?
		console.log(o[b])
		/*
			> o[b]
			undefined
			> o[b] = "ohno"
			'ohno'
			> o
			{ ser: 'owca', owca: 'krewetka', '[object Object]': 'ohno' }
			
			Jak widać następuje konwersja na stringa.
		*/

	// –Jaki wpływ na klucz pod jakim zapisana zostanie wartość ma programista w obuprzypadkach?

// użycie argumentów innego typu niż number dla operatora [] dostępu do tablicy.
const a = [1,2,3,"owca"]

	// –Co się dzieje jeśli argumentem operatora jest napis?
		console.log(a["ojej"]) //undefined
		console.log(a["join"]) // [Function: join]
			// jak widać odwołujemy się wtedy po property obiektu (tablica jest obiektem)

	// –Co się dzieje jeśli argumentem operatora jest inny obiekt?
		a[o] = "krewetka"
		console.log(a[o])
		console.log(a) // [ 1, 2, 3, 'owca', '[object Object]': 'krewetka' ]
			// tablica jest obiektem, ustawiamy property

	
	// –Czy i jak zmienia się zawartość tablicy jeśli zostanie do niej dopisana właściwość pod kluczem, który nie jest liczbą?
		// zawartość pod indeksami numerycznymi nie ulega zmianie

	// –Czy można ustawiać wartość atrybutu length tablicy na inną wartość niż liczba elementów w tej tablicy? 
		// tak

		// –Co się dzieje jeśli ustawia się wartość mniejszą niż liczba elementów, 
			// nadmiarowe elementy są usuwane
		// a co jeśli ustawia się wartość większą niż liczba elementów?
			// dodawane są puste miejsca w tablicy