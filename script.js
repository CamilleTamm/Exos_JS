/* exo 1 */

var annee = prompt("entrez une annee");

if( (annee % 4 == 0 && annee % 100 > 0) || annee % 400 == 0) {
	console.log("annee bissextile");
} else {
	console.log("annee non bissextile");
}

/* exo 2 */
var nombre = prompt("entrez un nombre");

function estPremier(nombre) {
	if(nombre <= 1) {
		return false;
	}

	if(nombre == 2) {
		return true;
	}

	for(var i = 2; i < nombre; i++) {
		if(nombre % i == 0) {
			return false;
		}
	}

	return true;
}

if(estPremier(nombre)) {
	console.log("premier");
} else {
	console.log("non premier");
}

/* exo 3 */
var semaine = ['lundi', 'mar', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanc'];

semaine.pop();

document.write("<div>" + semaine + "</div>");

semaine.push('dimanche');
semaine[1] = 'mardi';

console.log(semaine.length);
console.log(semaine[4]);

document.write("<div>" + semaine + "</div>");

/* exo 4 */
var fruits = ['Banane', 'Raisin', 'Pomme'];

console.log(fruits.join()); // join créé une chaine de caracteres
console.log(fruits);

var fruit = prompt("entrez un fruit");

if(fruits.includes(fruit)) {
	console.log(fruit);
	fruits.splice(fruits.indexOf(fruit), 1);
	console.log(fruits);
} else {
	console.log("indisponible");
}
