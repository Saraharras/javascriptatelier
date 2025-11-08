//Gestion des livres (Array) 
// Création du tableau avec 3 livre
let books =["java","PHP","javascript"];
books.push("C++");
console.log(books);
books.unshift("ruby");
console.log(books);
books.pop();
console.log(books);
books.shift();
console.log(books);
//Gestion des catégories (Set) 
console.log("=========Gestion des catégories========= ");
// Création du Set avec 3 catégories
let catégories =  new Set(["Fiction","Science", "Histoire"]);
console.log(catégories);
catégories.add("Philosophie");
console.log(catégories);
// Essayer d'ajouter une catégorie déjà existante
catégories.add("Science");
console.log(catégories);
catégories.delete("Histoire");
console.log(catégories);
//Gestion des emprunts (Map)
console.log("=========Gestion des emprunts ========= ");
let borrows = new Map();
// Ajout de 3 paires livre-emprunteur
borrows.set("java", "Alice");
borrows.set("PHP", "Bob");
borrows.set("javascript", "Charlie");
console.log(borrows);
//Supprimer une entrée avec delete.
borrows.delete("PHP");
console.log(borrows);
borrows.forEach((emprunteur, livre) => {
    console.log(`${livre} est emprunté par ${emprunteur}`);
});
// Vérifier si un livre est emprunté
let livre1 = "java";
console.log(`${livre1} est emprunté ?`, borrows.has(livre1)); 
// Vérifier si un livre est emprunté
let livre2 = "1984";
console.log(`${livre2} est emprunté ?`, borrows.has(livre2)); 