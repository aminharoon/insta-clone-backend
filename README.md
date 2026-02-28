# Instagram Clone - Full Stack Application

A full-stack Instagram clone application featuring a robust **Node.js/Express** backend and a modern **React + Vite** frontend.

**GitHub Repository:** [https://github.com/aminharoon/insta-clone-backend](https://github.com/aminharoon/insta-clone-backend)

## 📋 Project Overview

This project is a complete Instagram clone with user authentication, post creation, social interactions (likes & follows), and cloud image storage. The application is organized into two main directories:

- **Backend** - Node.js/Express API server with MongoDB
- **frontend** - React frontend with Vite build tool

## 📂 Repository Structure

```
insta-clone/
├── .git/                   # Git repository (moved to root)
├── .vscode/                # VS Code workspace settings
├── Backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── constants.js
│   │   ├── config/         # Database configuration
│   │   ├── controllers/    # Business logic (auth, posts, follows)
│   │   ├── middleware/     # JWT authentication
│   │   ├── models/         # MongoDB schemas
│   │   ├── routes/         # API endpoints
│   │   └── utils/          # Helper utilities
│   ├── package.json
│   ├── server.js
│   └── README.md          # Backend documentation
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── app.routes.jsx
│   │   ├── main.jsx
│   │   └── features/      # Feature modules (auth, posts, shared)
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── README.md          # Frontend documentation
└── README.md              # This file
```

## ✨ Features

### Backend

- ✅ User authentication (Register/Login with JWT)
- ✅ User profiles and profile management
- ✅ Post creation and management
- ✅ Like/Unlike posts with duplicate prevention
- ✅ Follow/Unfollow system with request management
- ✅ Cloud image storage (ImageKit integration)
- ✅ Secure password hashing (bcryptjs)
- ✅ Centralized error handling

### Frontend

- 🚀 React-based UI with modern components
- 🎨 Responsive design (Vite + SCSS)
- 🔐 Authentication context
- 📱 Feed and profile pages
- ❤️ Post interaction (likes, follows)
- 🔄 Real-time state management

## 🛠️ Tech Stack

### Backend

- Node.js & Express.js
- MongoDB & Mongoose
- JWT for authentication
- bcryptjs for password security
- ImageKit for cloud storage
- Multer for file uploads

### Frontend

- React with JSX
- Vite build tool
- SCSS for styling
- Context API for state management
- ESLint for code quality

## 🚀 Getting Started

### Prerequisites

- **Node.js** v14.0 or higher
- **npm** or **yarn**
- **MongoDB** (local or MongoDB Atlas)
- **ImageKit** account (for image hosting)
- **Git**

### Installation & Setup

#### 1. Clone & Navigate

```bash
git clone https://github.com/aminharoon/insta-clone-backend
cd insta-clone
```

#### 2. Backend Setup

```bash
cd Backend

# Install dependencies
npm install

# Create .env file with:
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret
# IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
# IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
# IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
# PORT=5000

# Start backend server
npm start
```

Backend will run on `http://localhost:5000`

#### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run on `http://localhost:5173` (Vite default)

## 📚 Documentation

For detailed information about each part of the project, refer to:

- **[Backend README](./Backend/README.md)** - API documentation, features, and structure
- **[Frontend README](./frontend/README.md)** - Frontend setup and development guide

## 🔌 API Endpoints

### Authentication Routes (`/api/auth`)

- `POST /register` - Register new user
- `POST /login` - Login user
- `GET /profile` - Get user profile
- `POST /logout` - Logout user
- `POST /refresh-token` - Refresh JWT token

### Post Routes (`/api/posts`)

- `POST /` - Create new post
- `GET /` - Get all posts
- `GET /:id` - Get specific post
- `DELETE /:id` - Delete post
- `POST /:id/like` - Like post
- `POST /:id/unlike` - Unlike post

### Follow Routes (`/api/follow`)

- `POST /follow/:userId` - Follow user
- `POST /unfollow/:userId` - Unfollow user
- `POST /accept-request/:userId` - Accept follow request
- `POST /reject-request/:userId` - Reject follow request

## 🔧 Development Workflow

### Backend Development

```bash
cd Backend
npm start          # Run server
npm run dev       # Run with nodemon (auto-reload)
```

### Frontend Development

```bash
cd frontend
npm run dev       # Development server with HMR
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 📝 Environment Variables

### Backend (.env)

```
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your_secret_key
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/...
PORT=5000
NODE_ENV=development
```

### Frontend (.env.local) - if needed

```
VITE_API_URL=http://localhost:5000/api
```

## 🐛 Troubleshooting

### Backend won't start

- Check MongoDB connection string in `.env`
- Ensure port 5000 is available
- Install dependencies: `npm install`

### Frontend build issues

- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf .vite`
- Check Node.js version compatibility

### Image upload not working

- Verify ImageKit credentials in `.env`
- Check file upload middleware configuration

## 📞 Support & Contribution

For issues, bugs, or feature requests, please create an issue in the repository.

## 📄 License

This project is open source and available under the MIT License.

---

**Last Updated:** February 2026  
**Project Status:** Backend Core Complete ✅ | Frontend in Development 🚀
