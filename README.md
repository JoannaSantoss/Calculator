# Calculator
Calculator with HTML, CSS, and JS

This repository contains a clean, responsive web calculator developed using HTML5, CSS3, and vanilla JavaScript as a practical demonstration of front-end web development and core programming logic. The application features a modern, user-friendly interface capable of performing standard arithmetic operations—including addition, subtraction, multiplication, and division—while ensuring a seamless experience across various screen sizes and devices. The project architecture relies on a modular separation of concerns with dedicated files for structure, styling, and interactivity. To view or run the application locally, simply clone the repository and open the index.html file in any modern web browser.

# Calculator

A lightweight, browser-based arithmetic calculator built with **HTML5**, **CSS3**, and **Vanilla JavaScript**. Designed with a retro-inspired display aesthetic and straightforward controls, it supports everyday math operations, input safeguards, and instant feedback.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## Preview

The application renders a centered calculator panel with a green read-only display (`#visor`) and a keypad grid (`CE`, `DEL`, operators, digits `0–9`, and `=`):

- **Addition:** `5+5` $\rightarrow$ `10`
- **Subtraction:** `10-5` $\rightarrow$ `5`
- **Multiplication:** `5*5` $\rightarrow$ `25`
- **Division:** `20/5` $\rightarrow$ `4`[cite: 1]

> Tip: You can add screenshots from your project (`docs/` or `assets/`) and link them here to showcase the UI in action.

---

## Features

- **Core Arithmetic Operations:** Addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`)[cite: 1].
- **Clear & Backspace Controls:**
  - `CE`: Clears the entire display[cite: 1].
  - `DEL`: Removes the last character, or resets the display if `"Erro"` is shown[cite: 1].
- **Smart Input Guardrails:**
  - Prevents starting an expression with an operator[cite: 1].
  - Replaces consecutive operators automatically (e.g., typing `*` after `20+` updates it to `20*`)[cite: 1].
  - Strips a trailing operator before evaluating so expressions don't fail unnecessarily[cite: 1].
- **Result Formatting & Error Handling:**
  - Displays `"Erro"` for division by zero or invalid results (`Infinity`, `-Infinity`, `NaN`)[cite: 1].
  - Rounds decimal outputs to up to 8 decimal places and trims unnecessary trailing zeros (`Number(resultado.toFixed(8)).toString()`)[cite: 1].
- **Event Delegation:** Uses a single click listener on `.teclado` to route button actions cleanly[cite: 1].

---

## Project Structure

```text
Calculator/
├── index.html      # Calculator markup, read-only display, and keypad buttons
├── style.css       # Layout, color palette, typography, and button styling
└── script.js       # Input validation, display controls, and calculation logic
