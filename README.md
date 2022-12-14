# Wordle (Lingo) clone 
This project is made in Reat 17, following a [tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gXdVXVJBmHpSI7zCEcjLUX) by the [Net Ninja](https://netninja.dev).

I plan on doing some updates to it, but I first wanted to see how he implemented the game. (commit commit 2fb2af6f is end of tutorial). Dec 14, 2022

## Game premise:
A user attempts to guess the five-letter word, with a maximum of six guesses. The letter's background color changes to inform the next guess. 

## How to Play:
Player types a guess and hits `enter`. If a letter of the sample word is in the guess, but not in the correct location, it has a yellow background. If the letter is in the correct location, it has a green background. If the letter of the guessed word is not in the sample word, the background remains gray.

- The user types in the guess and hits enter to submit, typing on the visual keypad is not implemented. 
- Duplicate guesses and words of less than 5 letters are not valid. 
- Letters are tracked in the visual keypad at the bottom of the screen.
- The game ends when the user guesses the sample word, or uses all six attempts to guess the word. 
- A new word is served on page refresh.

Current source for words: json file using json server



New to Me: animations and making CSS variables (adding -- in front of property) and used by var(--background)

I'd like to update this project but I'll just build a new one I think, rather than make the little updates I'd like.

## If you'd like to play:

### Clone the repo:

``` git clone git@github.com:laurieroy/react-lingo.git```

### Install modules:

```npm i(nstall)```

### Start the word server:

(I would recommend adding more 5-letter words to db.json)
Sample endpoint:  http://localhost:3001/solutions

Install the server:

```npm i -g json-server```

Run the json file on port 3001 (assuming React is using 3000):

```json-server ./data/db.json --port 3001```

### Start the game

```npm start```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

