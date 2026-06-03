<div align="center">
  <br />
    <a href="#" target="_blank">
      <img src="public/readme.webp" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=React&logoColor=black" />
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" />
    <img src="https://img.shields.io/badge/-TanStack_Start-000000?style=for-the-badge&logo=ReactRouter&logoColor=white" />
    <img src="https://img.shields.io/badge/-TanStack_Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white" />
    <br />
    <img src="https://img.shields.io/badge/-Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=black" />
    <img src="https://img.shields.io/badge/-Data_Connect-FFCA28?style=for-the-badge&logo=Firebase&logoColor=black" />
    <img src="https://img.shields.io/badge/-TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white" />
    <img src="https://img.shields.io/badge/-Zod-3E67B1?style=for-the-badge&logo=Zod&logoColor=white" />
    <br />
    <img src="https://img.shields.io/badge/-Biome-60A5FA?style=for-the-badge&logo=Biome&logoColor=white" />
    <img src="https://img.shields.io/badge/-Authentication-7C3AED?style=for-the-badge" />
    <img src="https://img.shields.io/badge/-Server_Functions-000000?style=for-the-badge" />
  </div>

  <h3 align="center">AgentMart | AI Agent Marketplace</h3>
</div>

## 📋 Table of Contents

1. ✨ Introduction
2. ⚙️ Tech Stack
3. 🔋 Features
4. 🏗 Architecture
5. 🤸 Quick Start
6. 🔐 Authentication
7. 📚 Skill Marketplace
8. 🚀 Publishing Skills
9. 🔍 Search & Discovery
10. 📂 Project Structure

---

## ✨ Introduction

AgentMart is a modern full-stack AI Agent Marketplace built using TanStack Start and Firebase.

The platform enables developers, creators, and AI enthusiasts to publish, discover, and manage reusable AI agent skills from a centralized registry.

Users can browse skills, search by category or tags, publish new skills, save favorites, and manage their personal workspace through a type-safe, server-driven architecture powered by Firebase Data Connect and TanStack Start.

---

## ⚙️ Tech Stack

### Frontend

* React
* TypeScript
* TanStack Start
* TanStack Router
* TanStack Query
* Tailwind CSS

### Backend

* Firebase
* Firebase Authentication
* Firebase Data Connect
* Cloud SQL PostgreSQL

### Validation

* Zod

### Development Tools

* Biome
* Vite

---

## 🔋 Features

👉 Authentication with Firebase

👉 Protected Routes

👉 AI Skill Publishing

👉 AI Skill Discovery

👉 Advanced Search

👉 Tag-Based Filtering

👉 Category Filtering

👉 Server Functions

👉 Zod Validation

👉 Firebase Data Connect Integration

👉 Responsive Design

👉 Modern Dark UI

👉 User Profiles

👉 Saved Skills

👉 Skill Detail Pages

👉 Type-Safe End-to-End Architecture

And much more.

---

## 🏗 Architecture

```text
Browser
   ↓
TanStack Router
   ↓
TanStack Query
   ↓
Server Functions
   ↓
Firebase Data Connect
   ↓
Cloud SQL PostgreSQL
```

### Form Submission Flow

```text
User Form
   ↓
Zod Validation
   ↓
Server Function
   ↓
Firebase Data Connect
   ↓
Database
```

---

## 🤸 Quick Start

### Prerequisites

* Git
* Node.js
* npm

### Clone Repository

```bash
git clone https://github.com/your-username/agentmart.git

cd agentmart
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file:

```env
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
```

### Run Development Server

```bash
npm run dev
```

Application runs on:

```text
http://localhost:3000
```

---

## 🔐 Authentication

AgentMart uses Firebase Authentication for secure user authentication and session management.

Features include:

* Registration
* Login
* Logout
* Protected Routes
* User Sessions

---

## 📚 Skill Marketplace

Users can:

* Browse Skills
* Search Skills
* View Skill Details
* Save Skills
* Explore Categories

Each skill contains:

* Title
* Description
* Tags
* Category
* Install Command
* Prompt Configuration
* Author Information

---

## 🚀 Publishing Skills

Authenticated users can publish new skills.

Supported fields:

```text
Title
Description
Category
Tags
Install Command
Prompt Configuration
Readme Instructions
Visibility
```

All submissions are validated using Zod before reaching the database.

---

## 🔍 Search & Discovery

Search supports:

* Skill Title
* Description
* Tags
* Author Name

Filters:

* Newest
* Popular
* Category
* Saved Skills

Pagination and filtering are handled server-side for maximum performance.

---

## 📂 Project Structure

```text
src/
├── routes/
├── components/
├── hooks/
├── services/
├── server/
├── lib/
└── styles/

dataconnect/
├── schema/
├── connectors/
└── dataconnect.yaml
```

---

## 🚀 Future Enhancements

* Skill Ratings
* Reviews
* Skill Collections
* Team Workspaces
* AI Recommendations
* Skill Analytics
* Skill Versioning

---

## 👨‍💻 Author

Built with ❤️ using TanStack Start, Firebase, TypeScript, and Tailwind CSS.
