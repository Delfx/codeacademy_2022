// Sukurkite masyvą (Array) styles su elementais „Jazz“ ir „Blues“.
	
// Masyvo (Array) pabaigoje pridėkite „Rock-n-Roll“.
	
// Viduryje esančią reikšmę pakeiskite „Classics“.
	
// Panaikinkite pirmą masyvo (Array) elementą ir parodykite jį.
	
// Pridėkite į masyvo pradžią „Rap“ ir „Reggae“ į masyvą.


let arr = ['Jazz', 'Blues'];

arr.push('Rock-n-Roll');

arr[1] = 'Classics';

console.log(
arr.shift()
);

arr.unshift('Rap', 'Reggae');

console.log(arr);
