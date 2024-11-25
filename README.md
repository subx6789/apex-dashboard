# APEX Dashboard

This repository contains the code for a MERN stack dashboard application built using React.js, Redux Toolkit Query, Material-UI (MUI), Node.js, Express.js, and MongoDB Atlas. The app is designed to handle data-intensive operations and provides insightful visualizations and management tools.

## 🌟 Features

- **Interactive Dashboard:** Displays key business metrics such as total customers, daily and yearly sales, and sales by category.
- **Dynamic Data Fetching:** Utilizes Redux Toolkit Query to fetch and manage data efficiently from the MongoDB Atlas database.
- **Material-UI Components:** Built with responsive and visually appealing MUI components.
- **Data-Intensive Focus:** Designed to focus on heavy data visualization and interaction without additional complexity like authentication.
- **Charts and Graphs:** Includes line charts, pie charts, and tables for easy data analysis.

## 🚀 Tech Stack

### Frontend:

- React.js
- Redux and Redux Toolkit Query (for state management and API calls)
- Material-UI (MUI) (for UI components)

### Backend:

- Node.js
- Express.js
- MongoDB Atlas

## 🎯 Project Goals

This project was created to:

- Practice and implement Redux Toolkit Query for efficient data fetching and caching.
- Gain proficiency with MUI for designing modern, responsive UI components.
- Work with large datasets using MongoDB Atlas.
- Enhance skills in building a full-stack application without focusing on authentication to keep the app lightweight.

## ⚙️ Setup Instructions

- Clone the repository:

  ```bash
   git clone https://github.com/subx6789/apex-dashboard.git
   cd apex-dashboard
  ```

- Install dependencies:

**Backend:**

```bash
 cd server
 npm install
```

**Frontend:**

```bash
 cd client
 npm install
```

- Configure environment variables: Create a .env file in the aerver folder and add:

  ```bash
   MONGO_URL=your-mongodb-atlas-connection-string
   PORT=5001
  ```

- Configure environment variables: Create a .env file in the client folder and add:

  ```bash
   REACT_APP_BASE_URL=http://localhost:5001
  ```

- Start the application:

**Backend:**

```bash
 cd server
 npm run dev
```

**Frontend:**

```bash
 cd client
 npm run start
```

- Open your browser and navigate to http://localhost:3000.

## 📊 Screenshot

![Screenshot 2024-11-25 115006](https://github.com/user-attachments/assets/e677abad-05c3-4929-9774-39b9a6cc87d8)

## 🌐 Live Demo

Link to live project: [APEX-Dashboard](https://apex-dashboard.onrender.com)

## 🤝 Contributions

Contributions, issues, and feature requests are welcome! Feel free to fork this repository and submit a pull request.

## 📄 License

This project is licensed under the [MIT License](/LICENSE).
