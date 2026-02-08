# Lotto Number Generator

## Overview

This is a simple web application that generates random lottery numbers.

## Features

*   Generates 6 unique random numbers between 1 and 45.
*   Displays the generated numbers in a visually appealing way.
*   Modern and responsive design.

## Implemented Plan

*   **index.html:**
    *   Changed the title to "Lotto Number Generator".
    *   Added a main container for the application.
    *   Added a title heading.
    *   Added a button to trigger the number generation.
    *   Added a container to display the generated numbers using a custom element `<lotto-numbers>`.
*   **style.css:**
    *   Added styles for the main container, button, and number display area.
    *   Used modern CSS for layout and styling.
*   **main.js:**
    *   Created a `<lotto-numbers>` web component to display the lottery numbers.
    *   Implemented the logic to generate 6 unique random numbers between 1 and 45.
    *   Added an event listener to the button to generate and display the numbers.
