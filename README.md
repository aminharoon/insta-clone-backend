# Insta-Clone

A full-stack Instagram clone application built with **Node.js/Express** backend and modern frontend framework.

## ⚠️ Status

🔄 **UNDER PROCESS** - This project is actively under development. Core authentication and post features are functional. More features coming soon.

## 📋 Features

- ✅ **User Authentication** - Register and login with JWT tokens
- ✅ **Post Creation** - Create posts with image uploads via ImageKit
- ✅ **Cloud Storage** - Image hosting with ImageKit integration
- ✅ **Database** - MongoDB for persistent data storage
- ✅ **Security** - Password hashing with bcryptjs, JWT token-based authentication
- ✅ **Error Handling** - Centralized API error & response utilities
- 🔄 **Follow System** - Follow/Unfollow functionality (in development)
- 🔄 **Post Interactions** - Like, unlike, and comment features (coming soon)

## 🛠️ Tech Stack

### Backend

- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - NoSQL database for data persistence
- **Mongoose** - MongoDB Object Data Modeling (ODM)
- **JWT (jsonwebtoken)** - Secure token-based authentication
- **bcryptjs** - Password hashing and encryption
- **ImageKit** - Cloud image storage and CDN
- **Multer** - Middleware for handling file uploads
- **dotenv** - Environment variable management

### Frontend (Coming Soon)

- React, Vue, or Angular (to be decided)

## 📁 Project Structure

```
insta-clone-backend/
├── src/
│   ├── app.js                    # Express application setup
│   ├── constants.js              # Application constants
│   ├── config/
│   │   └── db.js                 # MongoDB connection configuration
│   ├── controllers/
│   │   ├── auth.controler.js     # Authentication logic (register, login)
│   │   ├── post.controler.js     # Post creation and management
│   │   └── user.controler.js     # User management endpoints
│   ├── middleware/
│   │   └── auth.middleware.js    # JWT authentication middleware
│   ├── models/
│   │   ├── follow.model.js       # Follow relationship schema
│   │   ├── post.model.js         # Post data schema
│   │   └── user.model.js         # User account schema
│   ├── routes/
│   │   ├── auth.route.js         # Authentication routes
│   │   ├── post.routes.js        # Post-related routes
│   │   └── user.route.js         # User profile routes
│   └── utils/
│       ├── apiError.js           # Custom error handling class
│       ├── apiresponse.js        # Standardized API response format
│       └── asynhandler.js        # Async error wrapper utility
├── .env                          # Environment variables
├── .gitignore                    # Git ignore rules
├── package.json                  # Dependencies and scripts
├── README.md                     # Project documentation
├── server.js                     # Server entry point
└── Task.md                       # Development task tracking
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** v14.0 or higher
- **npm** or **yarn** package manager
- **MongoDB** (local or MongoDB Atlas cloud database)
- **ImageKit** account (for image hosting)
- **Git** for version control

### Installation

1. Clone the repository:

```bash
git clone https://github.com/aminharoon/insta-clone-backend.git
cd insta-clone-backend
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file in the root directory:

```env
# Database Configuration
DATABASE_URL=mongodb://localhost:27017
DB_NAME=insta-clone

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_min_32_chars

# ImageKit Configuration
IMAGE_KIT_PUBLIC_KEY=your_imagekit_public_key
IMAGE_KIT_PRIVATE_KEY=your_imagekit_private_key
IMAGE_KIT_URL_ENDPOINT=your_imagekit_url_endpoint

# Server Configuration
PORT=8000
NODE_ENV=development
```

4. Start the development server:

```bash
npm run dev
```

**Server will run on:**

- Port specified in `.env` (e.g., `http://localhost:8000`)
- Default to `http://localhost:3000` if `PORT` is not set

### Environment Variables Explanation

| Variable       | Description                                                    |
| -------------- | -------------------------------------------------------------- |
| `DATABASE_URL` | MongoDB connection string                                      |
| `DB_NAME`      | Name of your MongoDB database                                  |
| `JWT_SECRET`   | Secret key for JWT token signing (use a strong, random string) |
| `IMAGE_KIT_*`  | ImageKit credentials for image upload and storage              |
| `PORT`         | Server port number                                             |
| `NODE_ENV`     | Environment mode (development/production)                      |

## 📡 API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Posts

- `POST /api/posts/create` - Create new post with image upload (requires JWT token)
  - **Body**: FormData with `image` file, `caption`, `description`
  - **Response**: Created post object
  - **Headers**: Content-Type: multipart/form-data

- `GET /api/posts/getPoste` - Get all posts (requires JWT token)
  - **Response**: Array of all posts
  - **Headers**: Authorization: Bearer `<token>`

- `GET /api/posts/details/:postId` - Get specific post details by ID (requires JWT token)
  - **Params**: `postId` - The post document ID
  - **Response**: Post details with user information
  - **Headers**: Authorization: Bearer `<token>`

## 👨‍💻 Author

Amin Haroon - [GitHub](https://github.com/aminharoon)

## 📊 Development Progress

### Completed ✅

- [x] Project setup & initialization
- [x] User authentication (register/login)
- [x] JWT token implementation
- [x] MongoDB integration
- [x] User model & schema
- [x] Post model & schema
- [x] Basic post creation endpoint
- [x] Image upload with Multer & ImageKit

### In Progress 🔄

- [ ] Follow/Unfollow functionality
- [ ] Like & Unlike posts
- [ ] Comments on posts
- [ ] Post feed with pagination
- [ ] User profile endpoints
- [ ] Search functionality

### TODO 📋

- [ ] Frontend application (React/Vue)
- [ ] Real-time notifications
- [ ] Direct messaging
- [ ] Hashtag support
- [ ] Trending posts
- [ ] User recommendations

---

**Next Steps:** Add frontend application and additional features
