# Employee Management System

## Overview
The **Employee Management System** is a full-stack web application for managing employee records efficiently.  
It uses **React** for the frontend, **Spring Boot** for the backend, and **MySQL** for persistent data storage.  
The application allows users to **add, view, update, and delete employees** via a web interface.

---

## Features
- Add new employee records
- View all employees
- Update employee information
- Delete employee records
- Responsive and user-friendly interface

---

## Technologies Used
- **Frontend:** React, HTML, CSS, JavaScript
- **Backend:** Java, Spring Boot
- **Database:** MySQL
- **Build Tools:** Maven (backend), Node.js / npm (frontend)

---

## Project Structure
```

Employee-Management-System/
├─ frontend/
│  ├─ public/
│  ├─ src/
│  ├─ .gitignore
│  ├─ package.json
│  └─ package-lock.json
├─ backend/
│  ├─ src/
│  ├─ .gitignore
│  ├─ mvnw
│  ├─ mvnw.cmd
│  └─ pom.xml
└─ README.md

````

---

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/Kasturi-Pushpanathan/Employee-Management-System.git
cd Employee-Management-System
````

### 2. Set up the MySQL database

1. Install MySQL if not installed.
2. Create a database:

```sql
CREATE DATABASE employee_db;
```

3. Update the backend Spring Boot configuration (`backend/src/main/resources/application.properties`) with your MySQL credentials:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### 3. Backend Setup (Spring Boot)

1. Navigate to the backend folder:

```bash
cd backend
```

2. Build and run the backend:

```bash
./mvnw clean install
./mvnw spring-boot:run
```

> Backend server will start, usually at `http://localhost:8080`.

### 4. Frontend Setup (React)

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Run the frontend:

```bash
npm start
```

> The app will start on `http://localhost:3000` and communicate with the backend.

---

## Usage

1. Open `http://localhost:3000` in your browser.
2. Use the interface to **add, update, view, or delete employees**.
3. All changes are stored in the MySQL database via the Spring Boot backend.

---

## Contributing

* Fork the repository.
* Create a new branch: `git checkout -b feature-name`.
* Make your changes and commit: `git commit -m "Description of changes"`.
* Push to your branch: `git push origin feature-name`.
* Open a pull request.

---

## License

This project is open-source and available under the **MIT License**.





