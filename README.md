# Hangman-Dev-Edition
 Hangman but with programming languages instead of the OG stickman.

---

Hangman for Devs is a word-guessing game inspired by the classic Hangman game, but with a twist tailored for programmers. Instead of losing limbs, incorrect guesses lead to erasing parts of a programming language. This project challenges players to guess a word within a limited number of attempts.

## Features
- Word guessing mechanics.
- Visual representation of language parts being "erased" for wrong guesses.
- A simple yet engaging interface.

## How to Play
1. The game selects a random word from a word bank.
2. Players guess letters one at a time.
3. If a guessed letter is in the word, it is revealed.
4. If the guessed letter is incorrect, a part of the programming language snippet is erased.
5. The game ends when:
   - The player guesses the word correctly.
   - The programming language is completely erased.

## Technologies Used
- **Frontend**: React (for the game UI)
- **Styling**: Tailwind CSS (for a clean and modern design)

## Installation
To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/MUMEi-28/Hangman-Dev-Edition
   ```

2. Navigate to the project directory:
   ```bash
   cd Hangman-For-Devs
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to:
   ```
   http://localhost:5173
   ```

## Gameplay Example
### Starting the Game
- The player sees a partially hidden programming-related word (e.g., "_ _ _ t h o n").
- An image or representation of a programming language or code snippet is displayed.

### Guessing a Letter
- The player inputs a letter.
- Correct guesses reveal the letter in the word.
- Incorrect guesses erase parts of the language image.

### Winning/Losing
- The player wins by guessing all the letters before the language is fully erased.
- The player loses if the language is completely erased before they guess the word.


## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

Thank you for checking out Hangman for Devs! Happy coding and guessing!

