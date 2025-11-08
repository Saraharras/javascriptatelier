function Voiture(model, marque, annee, type, carburant) {
  this.model = model;
  this.marque = marque;
  this.annee = annee;
  this.type = type;
  this.carburant = carburant;
  }
  Voiture.prototype.afficher = function(){
    console.log(this.marque + " " + this.model + " - " + this.annee + " (" + this.type + ", " + this.carburant + ")");

  };
  // function Hyundai
  function Hyundai(model, marque, annee, type, carburant,série,hybride){
    Voiture.call(this,model, marque, annee, type, carburant);
    this.série = série;
    this.hybride = hybride;
  }
  Hyundai.prototype = Object.create(Voiture.prototype);
  Hyundai.prototype.constructor = Hyundai;

  //methode alarmer
  Hyundai.prototype.alarmer = function(){
        console.log(`alerte${this.marque} ${this.model}série${this.série}declenche l'alarme.`);
  };

 // function Ford
  function Ford(model, marque, annee, type, carburant,options){
    Voiture.call(this,model, marque, annee, type, carburant);
    this.options = options;
   
  }
 Ford.prototype = Object.create(Voiture.prototype);
  Ford.prototype.constructor = Ford;
// afficher les options
Ford.prototype.afficherOptions = function() {
  console.log(this.marque + " " + this.model + " dispose des options : " + this.options.join(", "));
};

let Voitures = [
  new Voiture("Corolla", "Toyota", 2020, "Berline", "Essence"),
  new Voiture("X5", "BMW", 2022, "SUV", "Diesel"),
  new Voiture("Clio", "Renault", 2019, "Citadine", "Essence"),
  new Voiture("Model 3", "Tesla", 2023, "Berline", "Électrique"),
  new Voiture("208", "Peugeot", 2021, "Citadine", "Essence")
];
Voitures.forEach(v => 
  console.log(v.marque + " " + v.model + " - " + v.annee + " (" + v.type + ", " + v.carburant + ")")
);
console.log("=========trier selon l'année=======")
//Trier selon l'année
Voitures.sort(function(a, b) {
  return a.annee - b.annee;
});
console.log("Liste triée des voitures (par année croissante) :");
Voitures.forEach(function(v) {
  v.afficher();
});

