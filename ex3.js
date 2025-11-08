class Vecteur2D{
    constructor(x=0, y=0){
        this.x = x;
        this.y = y;
    }
    // methode d'afficher
    Afficher(){
        console.log(`vecteur2D (x :${this.x}, y :${this.y})`);

    }
    // methode de surcharge d'addition
    addition(vect){
        return new Vecteur2D(this.x + vect.x , this.y + vect.y);
    }
}
console.log("\n=== Test de la classe vecteur2D ===");
// sans parametre
let V1 = new Vecteur2D();
V1.Afficher();
// avec  parametre
let V2 = new Vecteur2D(2, 5);
V2.Afficher(); 
// Addition de deux vecteurs
 let V3 = V1.addition(V2);
 V3.Afficher();
// Class rectangle
class Rectangle{
    constructor(longueur=1, largeur=1){
        this.longueur = longueur;
        this.largeur = largeur;
        this.nom = "rectangle";
    }
    // methode d'affichage
    Afficher(){
        console.log(`${this.nom} : longueur = ${this.longueur}, largeur =${this.largeur}`);

    }
    // methode surface
    Surface(){
        return  this.longueur * this.largeur;
    }

}

//classe Carre
class Carre extends Rectangle{
    constructor(cote=1){
        super(cote, cote);
        this.nom = "carré";
    }
}
// classe Point
class Point{
    constructor(x = 0.0,y = 0.0){
        this.x = x;
        this.y = y;
    }
    afficher() {
    console.log(`Point : (x = ${this.x}, y = ${this.y})`);
  }

}
console.log("\n=== Test de la classe Rectangle et la classe carre ===");
let rec1 = new Rectangle();
let rec2 = new Rectangle(3, 4);
rec1.Afficher();
console.log("Surface =", rec1.Surface());
rec2.Afficher();
console.log("Surface =", rec2.Surface());
let carre = new Carre(4);
carre.Afficher();
console.log("Surface =", carre.Surface());
console.log("\n=== Test Point ===");
let p1 = new Point();
let p2 = new Point(2.5, 4.7);

p1.afficher();
p2.afficher();
//classe Segment
class Segment{
   constructor(x1 = 0.0, y1 = 0.0, x2 = 1.0, y2 = 1.0){
    // Création de deux objets Point
    this.orig = new Point(x1, y1);
    this.extrem = new Point(x2, y2);
    }
     // Méthode d’affichage du segment
    afficher() {
    console.log("Segment défini par :");
    console.log("  Origine -> ", `(${this.orig.x}, ${this.orig.y})`);
    console.log("  Extrémité -> ", `(${this.extrem.x}, ${this.extrem.y})`);
  }
  // Méthode pour calculer la longueur du segment
  longueur() {
    let dx = this.extrem.x - this.orig.x;
    let dy = this.extrem.y - this.orig.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}
console.log("=== Test de la classe Segment ===");

let seg1 = new Segment(); 
let seg2 = new Segment(2, 3, 7, 9);

seg1.afficher();
console.log("Longueur =", seg1.longueur().toFixed(2));

seg2.afficher();
console.log("Longueur =", seg2.longueur().toFixed(2));


