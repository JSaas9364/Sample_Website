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
SAMPLE_WEBSITE/
├── api-server/
│   ├── auth.db       # SQLite database for authentication <br/>
│   ├── data.db       # SQLite database for form submissions <br/>
│   ├── index.js      # Express server with routes and logic<br/>
├── css/<br/>
│   └── style.css     # Custom styles for the app<br/>
├── images/<br/>
│   ├── adventure.webp # Image assets<br/>
│   ├── background.mp4 # Video background<br/>
│   └── logo.png       # Logo image<br/>
├── js/<br/>
│   └── script.js      # JavaScript file for logic<br/>
│   └── node_modules/  # Node modules for the app<br/>
├── public/<br/>
│   └── images/        # Public images for the app<br/>
│   └── vite.svg       # Vite SVG icon<br/>
├── src/<br/>
│   ├── assets/        # Any assets needed<br/>
│   ├── pages/         # React components for each page<br/>
│   │   ├── FormPage.jsx # Form page for submitting messages<br/>
│   │   ├── HomePage.jsx # Home page<br/>
│   │   ├── LoginPage.jsx # Login page<br/>
│   │   └── RegisterPage.jsx # Register page<br/>
│   ├── App.jsx         # Main app component<br/>
│   ├── authContext.jsx # Context for user authentication state<br/>
│   ├── .gitignore      # Git ignore file<br/>
│   ├── package.json    # Lock file for npm packages<br/>
│   ├── package-lock.json # Lock file for npm packages<br/>
│   └── vite.config.js  # Vite configuration<br/>

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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

