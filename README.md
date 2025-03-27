Full-Stack Web Application
This project is a simple full-stack web application built with React, Express, SQLite, and JWT authentication. It features a registration system, login functionality, and a basic form submission. User data is temporarily stored in localStorage for simplicity and speed.

Features:
User Authentication: Users can register and log in with a username and password.

Dynamic Routing: Seamless navigation between the home page, form page, and register page.

API Integration: Integrated RESTful APIs to manage user messages and authentication.

Local Storage for Data: Data is temporarily stored in localStorage for speed and ease of implementation.

File Structure:
graphql
Copy
SAMPLE_WEBSITE/
├── api-server/
│   ├── auth.db              # SQLite database for authentication
│   ├── data.db              # SQLite database for form submissions
│   ├── index.js             # Express server with routes and logic
├── css/
│   ├── style.css            # Custom styles for the app
├── images/
│   ├── adventure.webp       # Image assets
│   ├── background.mp4       # Video background
│   ├── logo.png             # Logo image
├── js/
│   ├── script.js            # JavaScript file for logic
│   ├── node_modules/        # Node modules for the app
├── react-app/
│   ├── node_modules/        # React node modules
│   ├── public/
│   │   ├── images/          # Public images for the app
│   │   ├── vite.svg         # Vite SVG icon
│   ├── src/
│   │   ├── assets/          # Any assets needed
│   │   ├── pages/           # React components for each page
│   │   │   ├── FormPage.jsx # Form page for submitting messages
│   │   │   ├── HomePage.jsx # Home page
│   │   │   ├── LoginPage.jsx# Login page
│   │   │   ├── RegisterPage.jsx # Register page
│   ├── App.jsx              # Main app component
│   ├── authContext.jsx      # Context for user authentication state
├── .gitignore               # Git ignore file
├── index.html               # Main HTML page
├── package-lock.json        # Lock file for npm packages
├── package.json             # Node.js project metadata
├── README.md                # Project documentation
└── vite.config.js           # Vite configuration


How to Run the Project:
Clone this repository:

bash
Copy
git clone https://github.com/yourusername/your-repository.git
Install dependencies:

bash
Copy
npm install
Start the development server:

bash
Copy
npm run dev
The backend is located in the api-server folder and is run separately with:

bash
Copy
node index.js
Technologies Used:
React: Frontend library

Express: Backend framework

SQLite: Database

JWT: Authentication mechanism

