# LifeLink - Blood Donation Management System

LifeLink is a modern, responsive full-stack web application designed to connect blood donors with patients in need. It features a robust admin dashboard, user registration, blood requests, and a comprehensive backend API.

## Tech Stack
- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router.
- **Backend**: Node.js, Express, TypeScript, MySQL, JWT Auth, NodeMailer.

## Prerequisites
- **Node.js** (v18+ recommended) and **npm**
- **MySQL Server** (running locally or via Docker)

## Installation

1. **Clone or Download** the repository.
2. **Database Setup**:
   - Open your MySQL client.
   - Run the script provided in `backend/database.sql` to create the schema and tables.

3. **Backend Setup**:
   ```bash
   cd backend
   npm install
   # Update the .env file with your database and SMTP credentials
   npm run dev
   ```

4. **Frontend Setup**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## Next Steps for Development
The foundational files, project structure, schemas, and configurations have been laid out. Next steps involve building out individual React pages (`src/pages`) and wiring them up to the complete API endpoints in `src/routes`.
