# TP JavaScript - Programmation Orientée Objet (POO)

## Objectif
L'objectif principal de ce travail pratique est de se familiariser avec les concepts de **Programmation Orientée Objet (POO)** en JavaScript, ainsi que l’utilisation des **fonctions constructeurs** pour créer des objets.  
Le TP contient plusieurs exercices portant sur la création de classes, de fonctions constructeurs, l’héritage, les méthodes, et la manipulation de structures de données comme Array, Set et Map.

---

## Exercice 1 : Voitures et héritage

1. Création d’une fonction constructeur `Voiture` avec les attributs :
   - `model`, `marque`, `année`, `type`, `carburant`

2. Création d’une liste de voitures et ajout d’exemples.

3. Héritage :
   - `Hyundai` : attributs `serie` (string), `hybride` (booléen) et méthode `alarmer()`.
   - `Ford` : attribut `options` (tableau).

4. Tri des voitures selon l’ordre croissant des années et affichage.

---

## Exercice 2 : Objets Étudiant et Professeur

1. Création de deux objets natifs :
   - `Etudiant` : `nom`, `prenom`, `age`, `cne`
   - `Professeur` : `nom`, `age`, `cin`

2. Ajout de méthodes :
   - `Etudiant` : `etudier()`
   - `Professeur` : `enseigner()`

3. Tri des étudiants par ordre alphabétique : `nom`, `prenom`, `age`.

---

## Exercice 3 : Vecteurs et figures géométriques

1. **Vecteur2D**
   - Classe avec coordonnées `x` et `y` par défaut.
   - Méthode d’affichage.
   - Méthode d’addition de deux vecteurs.

2. **Rectangle et Carré**
   - Classe `Rectangle` : `longueur`, `largeur`, `nom = "rectangle"`.
   - Classe `Carre` héritant de `Rectangle` et surcharge de `nom = "carré"`.
   - Méthodes d’affichage et calcul de surface.

3. **Point et Segment**
   - Classe `Point` avec coordonnées `x`, `y` par défaut.
   - Classe `Segment` composée de deux points (`orig`, `extrem`).

---

## Exercice 4 : Mini blog (POO + JSON)

- Classes principales : `User`, `Post`, `Blog`.
- Fonctionnalités :
  - Ajouter un post.
  - Lister les posts.
  - Sauvegarder et charger les posts depuis un **tableau JSON**.
- Conversion automatique entre instances de classes et JSON.

---

## Exercice 5 : Gestion d’une bibliothèque

1. **Livres (Array)**
   - Création d’un tableau `books` avec 3 titres.
   - Manipulations : `push`, `unshift`, `pop`, `shift`.
   - Affichage après chaque opération.

2. **Catégories (Set)**
   - Création d’un `Set` `categories` avec 3 catégories.
   - Ajout d’une nouvelle catégorie.
   - Tentative d’ajout d’un doublon.
   - Suppression et affichage après chaque opération.

3. **Emprunts (Map)**
   - Création d’un `Map` `borrows` associant livre → emprunteur.
   - Ajout de 3 paires livre-emprunteur.
   - Suppression d’une entrée.
   - Vérification avec `has`.
   - Affichage après chaque opération.

---

## Utilisation

1. Cloner le projet :
```bash

