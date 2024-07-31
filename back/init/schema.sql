DROP DATABASE IF EXISTS cardNextDb;
CREATE DATABASE cardNextDb;
USE cardNextDb;

CREATE TABLE Games (
  Game_id INT PRIMARY KEY,
  Game_name VARCHAR(50) NOT NULL
);

INSERT INTO Games (Game_id, Game_name)
VALUES
  (1, 'Poker'),
  (2, 'Uno'),
  (3, 'Tarot');

CREATE TABLE Cards (
  Card_id INT PRIMARY KEY,
  Card_name VARCHAR(50) NOT NULL,
  Game_id INT,
  FOREIGN KEY (Game_id) REFERENCES Games(Game_id)
);

INSERT INTO Cards (Card_id, Card_name, Game_id)
VALUES
  (1, 'Ace of Hearts', 2),
  (2, 'Two of Hearts', 2),
  (3, 'Three of Hearts', 2),
  (4, 'Four of Hearts', 2),
  (5, 'Five of Hearts', 2),
  (6, 'Six of Hearts', 2),
  (7, 'Seven of Hearts', 2),
  (8, 'Eight of Hearts', 2),
  (9, 'Nine of Hearts', 2),
  (10, 'Ten of Hearts', 2),
  (11, 'Jack of Hearts', 2),
  (12, 'Queen of Hearts', 2),
  (13, 'King of Hearts', 2),
  (14, 'Ace of Diamonds', 2),
  (15, 'Two of Diamonds', 2),
  (16, 'Three of Diamonds', 2),
  (17, 'Four of Diamonds', 2),
  (18, 'Five of Diamonds', 2),
  (19, 'Six of Diamonds', 2),
  (20, 'Seven of Diamonds', 2),
  (21, 'Eight of Diamonds', 2),
  (22, 'Nine of Diamonds', 2),
  (23, 'Ten of Diamonds', 2),
  (24, 'Jack of Diamonds', 2),
  (25, 'Queen of Diamonds', 2),
  (26, 'King of Diamonds', 2),
  (27, 'Ace of Clubs', 2),
  (28, 'Two of Clubs', 2),
  (29, 'Three of Clubs', 2),
  (30, 'Four of Clubs', 2),
  (31, 'Five of Clubs', 2),
  (32, 'Six of Clubs', 2),
  (33, 'Seven of Clubs', 2),
  (34, 'Eight of Clubs', 2),
  (35, 'Nine of Clubs', 2),
  (36, 'Ten of Clubs', 2),
  (37, 'Jack of Clubs', 2),
  (38, 'Queen of Clubs', 2),
  (39, 'King of Clubs', 2),
  (40, 'Ace of Spades', 2),
  (41, 'Two of Spades', 2),
  (42, 'Three of Spades', 2),
  (43, 'Four of Spades', 2),
  (44, 'Five of Spades', 2),
  (45, 'Six of Spades', 2),
  (46, 'Seven of Spades', 2),
  (47, 'Eight of Spades', 2),
  (48, 'Nine of Spades', 2),
  (49, 'Ten of Spades', 2),
  (50, 'Jack of Spades', 2),
  (51, 'Queen of Spades', 2),
  (52, 'King of Spades', 2),
  (53, 'The Fool', 3),
  (54, 'The Magician', 3),
  (55, 'The High Priestess', 3),
  (56, 'The Empress', 3),
  (57, 'The Emperor', 3),
  (58, 'The Hierophant', 3),
  (59, 'The Lovers', 3),
  (60, 'The Chariot', 3),
  (61, 'Strength', 3),
  (62, 'The Hermit', 3),
  (63, 'Wheel of Fortune', 3),
  (64, 'Justice', 3),
  (65, 'The Hanged Man', 3),
  (66, 'Death', 3),
  (67, 'Temperance', 3),
  (68, 'The Devil', 3),
  (69, 'The Tower', 3),
  (70, 'The Star', 3),
  (71, 'The Moon', 3),
  (72, 'The Sun', 3),
  (73, 'Judgement', 3),
  (74, 'The World', 3);

CREATE TABLE Player (
  Player_id INT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  Game_id INT,
  FOREIGN KEY (Game_id) REFERENCES Games(Game_id)
);

INSERT INTO Player (Player_id, username, Game_id)
VALUES
  (1, 'John Doe', 1),
  (2, 'Jane Smith', 2),
  (3, 'Bob Johnson', 3);