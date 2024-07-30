# gameCard

Groupe de Sonia, Franck et Gaëtan

Card Game handler API

Votre client est un organisateur de tournois de jeu de carte (Poker, Magic, etc…) et souhaite créer une plateforme en ligne pour gérer les tournois, les joueurs et les cartes de manière efficace et transparente.
Objectifs

L'objectif de cet exercice est de concevoir et d'implémenter une API RESTful en utilisant NestJS et TypeORM pour gérer un jeu de cartes.
Elle permettra de créer et de gérer des jeux, d'ajouter des joueurs à ces jeux, et de manipuler les cartes associées aux jeux et aux joueurs.
Vu d'ensemble :
Gestion des Jeux :

    Création : Permettre la création de nouveaux jeux avec des informations de base comme le nom du jeu.
    Lecture : Permettre la récupération de la liste de tous les jeux et des détails d'un jeu spécifique par son ID.
    Mise à jour : Permettre la mise à jour des informations d'un jeu existant.
    Suppression : Permettre la suppression d'un jeu.

Gestion des Joueurs :

    Ajout : Permettre l'ajout de joueurs à un jeu spécifique.
    Lecture : Permettre la récupération de la liste de tous les joueurs d'un jeu et des détails d'un joueur spécifique par son ID.
    Mise à jour : Permettre la mise à jour des informations d'un joueur existant.
    Suppression : Permettre la suppression d'un joueur.

Gestion des Cartes :

    Ajout : Permettre l'ajout de cartes à un jeu spécifique.
    Lecture : Permettre la récupération de la liste de toutes les cartes d'un jeu et des détails d'une carte spécifique par son ID.
    Mise à jour : Permettre la mise à jour des informations d'une carte existante.
    Suppression : Permettre la suppression d'une carte.

Relations et Associations :

    Joueurs et Jeux : Associer chaque joueur à un jeu spécifique.
    Cartes et Jeux : Associer chaque carte à un jeu spécifique.
    Cartes et Joueurs : Associer chaque carte à un joueur spécifique (si applicable).

Fonctionnalités Supplémentaires :100:

    Distribution des Cartes : Implémenter une fonctionnalité pour distribuer les cartes aux joueurs.
    Affichage des Cartes : Permettre l'affichage des cartes d'un joueur spécifique.

    :information_source: Vous êtes libre de l'implémentation et de l'architecture de votre Base de donnée

Besoin d'aide ? (optionnel) :thinking_face:

Voici quelques étapes pour vous guider.
Étapes :

    Configurer le Projet NestJS avec TypeORM :
        initialiser un nouveau projet NestJS.
        Configurer TypeORM pour se connecter à une base de données.

    Créer les Entités :

    Exemple d'entités :
        Game: Représente un jeu de cartes

    @Entity()
    export class Game {
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      name: string;

      @OneToMany(() => Player, player => player.game)
      players: Player[];

      @OneToMany(() => Card, card => card.game)
      cards: Card[];
    }

        Player : Représente un joueur dans un jeu

    @Entity()
    export class Player {
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      name: string;

      @ManyToOne(() => Game, game => game.players)
      game: Game;

      @OneToMany(() => Card, card => card.player)
      cards: Card[];
    }

        Card : Représente un carte dans un jeu

    @Entity()
    export class Card {
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      suit: string;

      @Column()
      rank: string;

      @ManyToOne(() => Game, game => game.cards)
      game: Game;

      @ManyToOne(() => Player, player => player.cards)
      player: Player;
    }

    Créer les Modules, Services et Contrôleurs :
        GamesModule :
            GamesService : Gère la logique métier pour les jeux.
            GamesController : Gère les requêtes HTTP pour les jeux.
        PlayersModule :
            PlayersService : Gère la logique métier pour les joueurs.
            PlayersController : Gère les requêtes HTTP pour les joueurs.
        CardsModule :
            CardsService : Gère la logique métier pour les cartes.
            CardsController : Gère les requêtes HTTP pour les cartes.

    Implémenter les Opérations CRUD :
        Games :
            Créer un nouveau jeu.
            Lister tous les jeux.
            Obtenir un jeu par son ID.
            Mettre à jour un jeu.
            Supprimer un jeu
        Players :
            Ajouter un joueur à un jeu.
            Lister tous les joueurs d'un jeu.
            Obtenir un joueur par son ID.
            Mettre à jour un joueur.
            Supprimer un joueur.
        Cards :
            Ajouter une carte à un jeu.
            Lister toutes les cartes d'un jeu.
            Obtenir une carte par son ID.
            Mettre à jour une carte.
            Supprimer une carte

Exemple de Requête HTTP :

    :information_source: Ce sont des propositions d'implémentations est non des instructions

Créer un nouveau jeu

POST /games
Content-Type: application/json

{
  "name": "Poker Night"
}

Ajouter un joueur à un jeu

POST /games/1/players
Content-Type: application/json

{
  "name": "Alice"
}

Ajouter une carte à un jeu

POST /games/1/cards
Content-Type: application/json

{
  "suit": "Hearts",
  "rank": "Ace"
}
