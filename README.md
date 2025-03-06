# Drag and Drop Project

This project demonstrates a simple drag-and-drop functionality using HTML, CSS, and JavaScript.

## Technologies Used

- HTML (65.1%)
- JavaScript (29%)
- CSS (5.9%)

## Features

- Drag and drop elements
- Interactive UI

## How It Works
# HTML
- The HTML file contains the structure of the draggable elements and drop zones. Each draggable item has the draggable attribute set to true, and event listeners are added to handle the drag and drop events.

# CSS
- The CSS file styles the draggable elements and drop zones. It includes styles for the drag-over state to indicate where the elements can be dropped.

# JavaScript
- The JavaScript file handles the drag and drop logic. Key functions and events used:

- dragstart event: Fired when the drag operation starts. The dragged element's data is set using event.dataTransfer.setData.
- dragover event: Fired when the dragged element is over a valid drop target. The default behavior is prevented to allow the drop.
- drop event: Fired when the dragged element is dropped onto a valid drop target. The dragged element is appended to the drop target using event.target.appendChild.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anilsjr/drag-and-drop.git
