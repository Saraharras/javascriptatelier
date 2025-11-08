// ===== Modules nécessaires =====
const fs = require("fs");
const FILE = "posts.json"; // Fichier pour sauvegarder les posts

// ===== Classe User =====
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  afficher() {
    console.log(`Utilisateur : ${this.username} (${this.email})`);
  }
}

// ===== Classe Post =====
class Post {
  constructor(title, description, author) {
    this.title = title;
    this.description = description;
    this.author = author; // instance de User
    this.date = new Date().toLocaleString();
  }

  afficher() {
    console.log(` ${this.title} - ${this.author.username} (${this.date})`);
    console.log(this.description);
  }
}

// ===== Classe Blog =====
class Blog {
  constructor() {
    this.posts = [];
  }

  ajouterPost(post) {
    this.posts.push(post);
    this.sauvegarder();
  }

  listerPosts() {
    console.log("\n Liste des posts :");
    this.posts.forEach((p, i) => {
      console.log(`${i + 1}. ${p.title} — ${p.author.username} (${p.date})`);
    });
  }

  // Sauvegarde des posts dans un fichier JSON
  sauvegarder() {
    fs.writeFileSync(FILE, JSON.stringify(this.posts, null, 2));
  }

  // Chargement des posts depuis le fichier JSON
  charger() {
    if (fs.existsSync(FILE)) {
      const data = JSON.parse(fs.readFileSync(FILE, "utf8"));
      this.posts = data.map(
        (p) => new Post(p.title, p.description, new User(p.author.username, p.author.email))
      );
    }
  }
}

// ===== Simulation du programme principal =====
const user1 = new User("Ali", "ali@example.com");
const user2 = new User("Sara", "sara@example.com");

const blog = new Blog();
blog.charger(); // Charger les anciens posts (si disponibles)

const post1 = new Post("Bienvenue sur mon blog", "Ceci est mon premier article.", user1);
const post2 = new Post("Deuxième article", "Aujourd’hui, je parle de JavaScript.", user2);

blog.ajouterPost(post1);
blog.ajouterPost(post2);

blog.listerPosts();
