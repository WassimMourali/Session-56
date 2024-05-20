//alert("bonjour");
var firstName = "wassim";
var age = 28 ;
var student = true ;
var x = null ;
let y ;

var person = {firstName : "wassim",
    lastName : "mourali",
    adresse : {city : "Mahdia",
        street : "Rue Med abdelweheb",}
};
let hobbies = ["faire la randonné", "film", "jeux video"];
console.log(hobbies);

let resultat = "bonjour je m'appelle " + firstName + " " + person.lastName + " et j'ai " + age;
console.log(resultat);

//calcul longeur de chaine de caractére (length)
console.log(firstName.length);

//trouver indexof (numéro de position de partie de la chaine) de caractére à partir 1ére vers length
let chaine = "ahla w sahla belija";
console.log(chaine.indexOf("a"));
//trouver indexof (numéro de position de partie de la chaine) de caractére à partir length vers 1ére
console.log(chaine.lastIndexOf("a"));
//retour valeur (caractére) par rapport leur position
console.log(chaine.charAt(8));

//concationation entre les chaine avec script (concat)
let chaine2 = "mar7aba";
let chaine3 = "kayfa el 7al";
let resultat2 = chaine2.concat(" ",chaine3);
console.log(resultat2);

//validation présence d'une chaine dans un chaine et retour de résultat booléan (true/false)
console.log(chaine3.includes("fa")); //retour true (présence de valeur au chaine de caractére)
//changement une partie de la chaine de caractére chaine.replace("valeur à changé","nouveau valeur")
let chaine4 = chaine.replace("belija","belirawa7");
console.log(chaine4);
//suppression intervalle par rapport index et retour nv chaine
let chaine5 = chaine.slice(5);
console.log(chaine5);
//transformer le chaine en forme de tableau(chaque index de tableau égal à caractére)
let chaine6 = chaine.split('');
console.log(chaine6);
//transformer tout la chaine en majuscule
console.log(chaine.toUpperCase());
//trasnformer tout la chaine en miniscule
let chaine7 = "FIBRE OBTIQUE KIT BLUETHOTH";
console.log(chaine7.toLowerCase());

//appliqué script trim() : élimination les espaces d'une chaine au début, fin de chaine seulement
let chaine10 = "   nourhene medebb   ";
let chaine11 = chaine10.trim();
console.log(chaine11);

//appliqué 3 fonction (split,filter,join) pour éliminer les espaces au milieu de chaine
let chaine8 = "wassim                mourali";
let chaine9 = chaine8.split(' ').filter(Boolean).join(' ');
console.log(chaine9);

//appliqué l'affichage de même chaine par n fois (repat(n))
let chaine12 = "hi ";
let chaine13 = chaine12.repeat(3);
console.log(chaine13);




