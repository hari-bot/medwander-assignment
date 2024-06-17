# Medwanders Assignment

## Description

This project is a web application that integrates a MySQL database with Google Sheets. It allows users to submit form entries, which are then stored in the MySQL database and can be updated to a Google Sheets document via a refresh button.

## Features

- Submit form entries to the database.
- Retrieve form entries from the database.
- Update Google Sheets with the latest form entries.

## Installation

## How to Run the Application

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hari-bot/medwander-assignment.git
   cd medwander-assignment
   ```

### Starting the Server

1. **Navigate to the server directory:**

   ```bash
   cd server
   ```

2. **Install server dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   - Create a `.env` file in the root directory and add the following environment variables:
     ```
     DB_NAME=your_database_name
     DB_USER=your_database_user
     DB_PASSWORD=your_database_password
     DB_HOST=your_database_host
     SPREADSHEET_ID=your_spreadsheet_id
     ```

4. **Provide Google API credentials:**

   - Place your `keyFile.json` file in the config directory.

5. **Start the server:**
   ```bash
   npm start
   ```
   - The server will start on `http://localhost:5000`.

### Starting the Client

1. **Navigate to the client directory:**

   ```bash
   cd client
   ```

2. **Install client dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   - Create a `.env` file in the root directory and add the following environment variables:

     ```
     REACT_APP_API_URL=http://localhost:5000
     REACT_APP_SPREADSHEET_URL=https://docs.google.com/spreadsheets/d/1t6o5SqXaHJsbljXG1_Al94DIM_XNIVB6Kqum-VCIjV4/edit

     ```

4. **Start the client:**
   ```bash
   npm start
   ```
   - The client will typically start on `http://localhost:3000` (or another port specified in your client configuration).

## API Endpoints

- **POST /api/form**

  - **Description:** Create a new form entry.
  - **Request Body:**
    ```json
    {
      "formType": "string",
      "name": "string",
      "phoneNumber": "string"
    }
    ```

- **GET /api/form**

  - **Description:** Retrieve all form entries.

- **POST /api/refresh-sheet**
  - **Description:** Update the Google Sheet with the latest form entries.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Make sure to follow the existing code style and write tests for new features.
