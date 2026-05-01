# **Team Members**

Daniya Mehmood

Zainab Rafique


# Caesar Cipher Encrypter & Decrypter

This is a web-based application that allows users to securely encode and decode messages using the classic Caesar Cipher technique. The tool supports lowercase letters, uppercase letters, numeric digits, and special characters.

## Features

- **Text Encryption**: Converts plain text into ciphered text based on a user-defined shift value.
- **Text Decryption**: Reverses the encryption process to retrieve the original message.
- **Extended Character Support**: Unlike standard Caesar Ciphers, this tool handles:
    - Uppercase and Lowercase English alphabets.
    - Numeric values (0-9).
    - Special characters (/.,*%$#@+-!_).
- **Interactive UI**: Features a modern, aesthetic design with a gradient background and responsive buttons.

## Technologies Used

- **HTML5**: Structured the layout for encryption and decryption pages.
- **CSS3**: Custom styling with linear gradients, flexbox alignment, and hover transitions.
- **JavaScript (ES6)**: Implemented the Caesar Cipher algorithm and DOM manipulation for real-time results.
- **Bootstrap 5**: Utilized for responsive layout components.

## How It Works

1. **Input**: The user enters a string (text, numbers, or symbols) and a numeric shift value.
2. **Algorithm**:
    - For **Encryption**: Each character is shifted forward in its respective set (alphabet, number, or symbol) by the specified value.
    - For **Decryption**: The shift is reversed to return to the original character.
3. **Output**: The result is displayed instantly in a styled result box.

## File Structure

- `encrypt.html` / `decrypt.html`: The main web pages.
- `encrypt.css` / `decrypt.css`: Styling for the interface.
- `encrypt.js` / `decrypt.js`: Logic for the cipher algorithm.

