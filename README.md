# Sample Website

A sample full-stack web application containing a React frontend, an Express API server, SQLite databases, JWT-based authentication, and an older static HTML/CSS/JavaScript frontend.

## Features

* User registration and login
* Password hashing with bcrypt
* JWT authentication
* React-based frontend
* Client-side routing with React Router
* REST API built with Express
* SQLite storage for users and form submissions
* Static HTML/CSS/JavaScript example pages

## Technologies

### Frontend

* React 19
* React Router
* Vite
* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express
* SQLite
* JSON Web Tokens (JWT)
* bcrypt
* CORS

## Project Structure

```text
Sample_Website/
├── api-server/
│   ├── auth.db
│   ├── data.db
│   └── index.js
│
├── css/
├── images/
├── js/
│
├── react-app/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── pages/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── authContext.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── form.html
├── index.html
├── package.json
└── package-lock.json
```

## Running the Project

### 1. Clone the repository

```bash
git clone https://github.com/JSaas9364/Sample_Website.git
cd Sample_Website
```

### 2. Install backend dependencies

From the repository root:

```bash
npm install
```

The root `package.json` contains the Express, SQLite, JWT, bcrypt, and CORS dependencies used by the API server.

### 3. Start the backend

Change into the API server directory:

```bash
cd api-server
node index.js
```

The Express API server runs on:

```text
http://localhost:3001
```

Leave this terminal running.

### 4. Start the React frontend

Open a second terminal and return to the repository:

```bash
cd Sample_Website
cd react-app
npm install
npm run dev
```

Vite will display the local development URL in the terminal.

Open that URL in your browser.

## API

The backend provides API routes for user authentication and application data.

Authentication uses JWT tokens, and passwords are hashed with bcrypt before being stored in SQLite.

The backend uses two SQLite databases:

```text
api-server/auth.db
api-server/data.db
```

`auth.db` stores authentication data.

`data.db` stores submitted application data.

## Static Frontend

The repository also contains an older static frontend at the repository root:

```text
index.html
form.html
css/
js/
images/
```

The newer React application is located separately under:

```text
react-app/
```

## Development Scripts

React development commands must be run from the `react-app` directory.

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

Preview a production build:

```bash
npm run preview
```

## License

The root `package.json` currently declares the project license as ISC.
