

---

# Sorting Visualizers

## Overview
The Sorting Visualizers project is a web application built using ReactJS and React-Redux that allows users to visualize various sorting algorithms. Users can input an array of numbers, select a sorting algorithm such as Bubble Sort, Quick Sort, or Merge Sort, and observe how the algorithm rearranges the elements step-by-step.

## Technologies Used
- **ReactJS**: Frontend library for building the user interface.
- **React-Redux**: State management for handling application state.
- **CSS**: Styling for a responsive and user-friendly interface.
- **Sorting Algorithms**: Implements algorithms like Bubble Sort, Quick Sort, and Merge Sort.

## Features
- **Interactive Visualization**: View real-time sorting animations.
- **Algorithm Selection**: Choose from various sorting algorithms.
- **Array Input**: Input custom arrays to visualize sorting.
- **Step Control**: Step through the sorting process to understand each phase.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Installation

### Prerequisites
- Node.js (v14+)

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Shubham121s/sorting-visualizers.git
   ```
2. Navigate to the project directory:
   ```bash
   cd sorting-visualizers
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Run the Application
1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to access the application.

## Usage
1. **Input Array**: Enter a list of numbers into the input field.
2. **Select Algorithm**: Choose a sorting algorithm from the dropdown menu.
3. **Start Visualization**: Click "Start" to begin the sorting process.
4. **Step Through**: Use the "Step" button to go through the sorting process one step at a time.
5. **Pause/Resume**: Pause or resume the animation as needed.

## Project Structure
- **/src**: Contains source code for React components, Redux actions, reducers, and styles.
  - **/components**: Reusable React components for visualization and controls.
  - **/redux**: Redux setup including actions and reducers.
  - **/styles**: CSS files for styling the application.
  - **/algorithms**: Implementations of different sorting algorithms.

- **/public**: Contains static files like `index.html`.
- **/config**: Configuration files (if any).

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

