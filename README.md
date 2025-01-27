# Perfume



This project is a full-stack CRUD (Create, Read, Update, Delete) application built using the MERN stack:

- **MongoDB**: Database for storing data.
- **Express.js**: Backend framework for building APIs.
- **React.js**: Frontend library for building user interfaces.
- **Node.js**: Runtime environment for the backend.

## Features

- Add new items to the database.
- View a list of all items.
- Edit existing items.
- Delete items.
- Responsive design for seamless use on all devices.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vknir/Perfume.git
   cd mern-crud-app
   ```

2. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:
   ```bash
   cd ../frontend
   npm install
   ```

## Configuration

1. Create a `.env` file in the `backend` directory and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

2. (Optional) Adjust frontend API endpoints in `frontend/src/config.js` if necessary.

## Usage

### Running the Backend

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

2. The backend will run on `http://localhost:3000`.

### Running the Frontend

1. Start the React development server:
   ```bash
   cd frontend
   npm start
   ```

2. The frontend will run on `http://localhost:5173`.

### Access the Application

Navigate to `http://localhost:3000` in your browser to access the application.


│   └── package.json   # Frontend dependencies
└── README.md          # Project documentation
```

## Technologies Used

- **Frontend**: React.js, Axios, Tailwind CSS 
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB Atlas 

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.


