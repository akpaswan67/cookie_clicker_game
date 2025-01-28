# Cookie Clicker-style game

This project is a full-stack web application with a frontend and backend. The frontend is built with React.js, while the backend is built with Node.js, Express, and MongoDB. The application is inspired by a Cookie Clicker-style game, where users can log in, click to earn points, and receive prizes.

## Project Structure

- **Frontend**: The frontend of the application is a React app that runs on `http://localhost:3000`. It provides a user interface for logging in, viewing scores, and interacting with the clicker game.
- **Backend**: The backend is built with Node.js and Express, and it runs on `http://localhost:5000`. It handles user data, scoring, and prize distribution, and communicates with a MongoDB database. The backend follows the MVC (Model-View-Controller) architecture and includes a job processing system for handling game logic.

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) should be installed.
- MongoDB should be installed and running locally on port 27017.

### Backend Setup

1. Clone the repository:
    ```bash
    git clone [repository-link]
    cd [project-directory]
    ```

2. Navigate to the backend folder:
    ```bash
    cd backend
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the `backend` folder with the following content:
    ```env
    MONGO_URI=mongodb://localhost:27017/cookie
    PORT=5000
    ```

5. Start the backend server:
    ```bash
    npm start
    ```

   This will start the backend server on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend folder:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the frontend server:
    ```bash
    npm start
    ```

   This will start the React app on `http://localhost:3000`.

### Running Both Servers

Make sure both the frontend and backend servers are running concurrently:

- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000`

### Features

- **User Login**: Users can log in using their username.
- **Scoreboard**: Displays the current score and prizes.
- **Clicker Game**: Users can click to increment their score, with a chance to earn prizes.
- **Real-time Data Updates**: The frontend fetches updated user data from the backend, keeping the score and prizes up to date.

## Backend Description

This project is a backend system for a Cookie Clicker-style game, built using Node.js, Express.js, and MongoDB. It handles user data, scoring, and prize distribution. The backend follows the MVC (Model-View-Controller) architecture and includes a job processing system for handling game logic. Key features include:

- **User Management**: Users are created, fetched, and updated via API endpoints.
- **Game Logic**: The backend handles the score increment logic and prize distribution using a job system.
- **Data Persistence**: User data, including scores and prizes, is stored in a MongoDB database.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Basic username-based login
- **Architecture**: MVC (Model-View-Controller)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
