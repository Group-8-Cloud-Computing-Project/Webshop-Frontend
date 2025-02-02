# 🌐 Frontend Development Branch
## 📝 Overview
This repository contains the React-based frontend for the Three-Tier Webshop Demo Application as part of the Cloud Computing project for WiSe2024. The project demonstrates a scalable and high-availability architecture using modern cloud services and technologies.

The demo focuses on:

- A dynamic Web Frontend for the shop.
- A robust Middleware with REST API capabilities.
- A reliable Storage Backend for structured (relational/NoSQL) and unstructured (BLOB) data.

## 🏗️ Architecture
The application follows a Three-Tier Architecture:

1. Presentation Tier (Frontend):
A dynamic user interface implemented using a modern JavaScript framework (React). It interacts with the backend via REST APIs to display products, manage shopping carts, and handle checkouts.

2. Application Tier (Middleware):
The business logic layer implemented in Python 3 using Django or Flask. It provides REST API endpoints for managing products, orders, inventory, and notifications.

3. Data Tier (Storage Backend):

- A relational or NoSQL database for storing structured data such as products, orders, and inventory.
- A BLOB storage service for unstructured data like product images.

## ✨ Features
### Frontend:
- Product catalog with images, descriptions, and prices.
- Search and filter functionality.
- Shopping cart and checkout process with responsive design.
### Middleware:
- CRUD operations for products and orders.
- Inventory management and email notifications (mocked).
- RESTful APIs for seamless frontend-backend communication.
### Database:
- Tables for product, order, and inventory management.
- BLOB storage for handling large unstructured data.

## ☁️ Cloud Service Provider (CSP)
The chosen CSP is determined by group-specific guidelines. Services include:

Compute Instances: Hosting frontend and backend components.
Database Solutions: Relational or NoSQL databases.
Storage Solutions: For BLOBs and backups.
Load Balancers: Ensuring high availability and scalability.

## Project Setup Guide

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Group-8-Cloud-Computing-Project/Webshop-Frontend.git
   cd webshop-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Build for production:**
   ```bash
   npm run build
   # or
   yarn build
   ```

### Running Tests
To run tests:
```bash
npm test
# or
yarn test
```

## Project Structure

```
webshop-frontend/
├── node_modules/               # Project dependencies
├── public/                     # Static files
├── src/                        # Source files
│   ├── components/             # Reusable components
│   │   ├── Common/             # Common UI elements
│   │   │   ├── Cart.jsx        # Cart component
│   │   └── Layout/             # Layout components
│   │       ├── Footer.jsx      # Footer component
│   │       ├── Layout.js       # Layout wrapper
│   │       └── Navbar.jsx      # Navigation bar
│   ├── Pages/                  # Page components
│   │   ├── CartModal.jsx       # Cart modal page
│   │   ├── Checkout.jsx        # Checkout page
│   │   ├── Home.jsx            # Home page
│   │   └── ProductDetails.jsx  # Product details page
│   ├── context/                # React context for state management
│   │   └── context.js          # Context API implementation
│   ├── App.css                 # App-wide CSS
│   ├── App.js                  # Main app component
│   ├── index.css               # Global styles
│   └── index.js                # Entry point for React
├── .gitignore                  # Git ignore rules
├── package-lock.json           # npm lock file
├── package.json                # Project metadata and scripts
└── README.md                   # Project documentation
```

## Available Scripts
- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm run eject` - Ejects the app from Create React App (if applicable)
