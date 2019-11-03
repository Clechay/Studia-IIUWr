
console.log(
	(![]+[])[+[]] +
// ![] to rzutowanie na boolean z negacją, obiekty rzutują na true
// boolean + object powoduje rzutowanie wszystkiwgo na stringa
// +[] powoduje rzutowanie tablicy na number, pusta to zero 

	(![]+[])[+!+[]] +
// +!(0) -> negacja 0 powoduje rzutowanie na boolean, jest nim fałsz, po negacji prawda
	// + powoduje rzutowanie na number

	([![]]+[][[]])[+!+[]+[+[]]] +
// [![]] - tablica zawierająca fałsz
// [][[]] - z pustej tablicy bierze element "" ([[]].toString())
	// tylko liczba lub string może być kluczem dla operatora []
// suma tablica + undefined powoduje rzutowanie na string

// +!+[] daje 1, 
// +[+[]] daje [0]
// 1 + [0] powoduje rzutowanie na stringa

	(![]+[])[!+[]+!+[]]
// !+[] negacja zera daje true
// 1 + true daje 1

 );
