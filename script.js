var questions = [
 	{
 		question: 'Est-ce que tu aimes le JavaScript ?',
 		reponse : 'Oui'
	 },
	 {
	 	question: 'Le JavaScript est une évolution du Java ?',
		 reponse : 'Non'
	 },
	 {
	 	question: 'Le JavaScript est proche du Java ?',
	 	reponse : 'Non'
	 },
	 {
	 	question: 'Le JavaScript est un langage d\'objet par prototypage ?',
	 	reponse : 'Oui'
	 },
	 {
		 question: 'Le JavaScript est souvent utilisé coté client ?',
	 	reponse : 'Oui'
	 },
	 {
		 question: 'Le JavaScript peut être utilisé coté client et serveur ?',
		 reponse : 'Oui'
	 }
];

var reponse = [];

for(var i = 0; i < questions.length; i++) {
	reponse.push(prompt(questions[i].question));
}

for(var i = 0; i < questions.length; i++) {
	if(questions[i].reponse.toLowerCase() == reponse[i].toLowerCase()) {
		console.log("Bonne réponse pour la question " + questions[i].question);
	} else {
		console.log("Mauvaise réponse pour la question " + questions[i].question);
	}
}
