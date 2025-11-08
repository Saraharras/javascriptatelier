let Etudiant1 ={
    nom : "tahiri",
    prenom : "sara",
    age : 23 ,
    cne : "k123456",
    etudier : function(){
        console.log(`${this.nom} ${this.prenom} est en train d etudier ` );
    }
};
let Etudiant2 ={
    nom : "samir",
    prenom : "hamza",
    age : 22 ,
    cne : "C123456",
    etudier : function(){
        console.log(`${this.nom} ${this.prenom} est en train d etudier ` );
    }
};
let Etudiant3 ={
    nom : "tarik",
    prenom : "laila",
    age : 20 ,
    cne : "k1234",
    etudier : function(){
        console.log(`${this.nom} ${this.prenom} est en train d etudier ` );
    }
};

let Professeur ={
    nom : "aloui",
    age : 55 ,
    cne : "k78901",
    enseigner : function(){
        console.log(`Professeur ${this.nom}  est en train d enseigner ` );
    }

};
// tester les methodes
Etudiant1.etudier();    
Professeur.enseigner();
//Trier les étudiants selon l’ordre alphabétique
let etudiants = [Etudiant1, Etudiant2,Etudiant3];
 etudiants.sort((e1, e2)=>{
    if(e1.nom!== e1.nom) return e1.nom.localeCompare(e2.nom);
    if(e1.prenom!== e2.prenom) return e1.prenom.localeCompare(e2.prenom);
    return e1.age - e2.age;


 });

 console.log("Étudiants triés :");
etudiants.forEach(e => console.log(`${e.nom} ${e.prenom} - ${e.age} ans`));