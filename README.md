# Full-Stack Web Application

This project is a **full-stack web application** built using **React**, **Express**, **SQLite**, and **JWT authentication**. It features a user registration system, login functionality, and basic form submission.

---

## Features

- **User Authentication**: Users can register and log in with a username and password.
- **Dynamic Routing**: Seamless navigation between the home page, form page, and register page.
- **API Integration**: Integrated **RESTful APIs** to manage user messages and authentication.

---

## Technologies Used

- **React**: Frontend library
- **Express**: Backend framework
- **SQLite**: Database
- **JWT**: Authentication mechanism

---

## File Structure

```text
SAMPLE_WEBSITE/
├── api-server/
│   ├── auth.db         # SQLite database for authentication
│   ├── data.db         # SQLite database for form submissions
│   ├── index.js        # Express server with routes and logic
│   └── package.json    # Backend package file
├── public/
│   ├── images/         # Public images for the app
│   └── vite.svg        # Vite SVG icon
├── src/
│   ├── assets/         # Asset files
│   ├── pages/          # React components for each page
│   │   ├── FormPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   └── RegisterPage.jsx
│   ├── App.jsx         # Main app component
│   ├── authContext.jsx # Context for user authentication state
│   └── main.jsx        # Entry point
├── .gitignore          # Git ignore file
├── package.json        # Frontend package file
└── vite.config.js      # Vite configuration
