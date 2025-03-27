# Full-Stack Web Application

This project is a **full-stack web application** built using **React**, **Express**, **SQLite**, and **JWT authentication**. It features a user registration system, login functionality, and basic form submission. For simplicity and speed, user data is temporarily stored in **localStorage**.

---

## Features

- **User Authentication**: Users can register and log in with a username and password.
- **Dynamic Routing**: Seamless navigation between the home page, form page, and register page.
- **API Integration**: Integrated **RESTful APIs** to manage user messages and authentication.
- **Local Storage for Data**: Data is temporarily stored in **localStorage** for speed and ease of implementation.

---

## Technologies Used

- **React**: Frontend library
- **Express**: Backend framework
- **SQLite**: Database
- **JWT**: Authentication mechanism

---

## File Structure
SAMPLE_WEBSITE/ ├── api-server/ │ ├── auth.db # SQLite database for authentication │ ├── data.db # SQLite database for form submissions │ ├── index.js # Express server with routes and logic ├── css/ │ ├── style.css # Custom styles for the app ├── images/ │ ├── adventure.webp # Image assets │ ├── background.mp4 # Video background │ ├── logo.png # Logo image ├── js/ │ ├── script.js # JavaScript file for logic │ ├── node_modules/ # Node modules for the app ├── public/ │ ├── images/ # Public images for the app │ ├── index.html # Main HTML page │ ├── vite.svg # Vite SVG icon ├── src/ │ ├── assets/ # Any assets needed │ ├── pages/ # React components for each page │ │ ├── FormPage.jsx # Form page for submitting messages │ │ ├── HomePage.jsx # Home page │ │ ├── LoginPage.jsx # Login page │ │ ├── RegisterPage.jsx # Register page │ ├── App.jsx # Main app component │ ├── authContext.jsx # Context for user authentication state │ ├── index.js # Main React entry point ├── .gitignore # Git ignore file ├── package-lock.json # Lock file for npm packages ├── package.json # Node.js project metadata ├── README.md # Project documentation ├── vite.config.js # Vite configuration

---

## How to Run the Project

1. **Clone this repository**:

    ```bash
    git clone https://github.com/yourusername/your-repository.git
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the development server**:

    ```bash
    npm run dev
    ```

4. **The backend is located in the `api-server` folder and is run separately with**:

    ```bash
    node index.js
    ```

---

## Technologies Used

- **React**: Frontend library
- **Express**: Backend framework
- **SQLite**: Database
- **JWT**: Authentication mechanism

---

## Contributing

We welcome contributions to improve this project. If you have any ideas or enhancements, feel free to fork the repository and create a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

