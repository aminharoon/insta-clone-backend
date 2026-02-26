# Insta-Clone

A full-stack Instagram clone application built with **Node.js/Express** backend and modern frontend framework.

## ⚠️ Status

✅ **BACKEND CORE COMPLETE** - Core backend features are fully implemented. Authentication, Posts, and Follow system are production-ready. Comments and feed optimization coming soon.

## 📋 Features

- ✅ **User Authentication** - Register and login with JWT access & refresh tokens
- ✅ **User Profiles** - Get profile details, bio, and profile pictures
- ✅ **Post Creation** - Create posts with image uploads via ImageKit
- ✅ **Post Management** - View all posts, get specific post details, delete posts
- ✅ **Post Interactions** - Like and unlike posts with duplicate prevention
- ✅ **Follow System** - Follow/Unfollow users with request acceptance/rejection
- ✅ **Cloud Storage** - Image hosting with ImageKit integration
- ✅ **Database** - MongoDB for persistent data storage with Mongoose ODM
- ✅ **Security** - Password hashing with bcryptjs, JWT token-based authentication
- ✅ **Error Handling** - Centralized API error handling and standardized responses
- ✅ **Async Utilities** - AsyncHandler for consistent error management

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
│   ├── app.js                        # Express application setup & route configuration
│   ├── constants.js                  # Application constants
│   ├── config/
│   │   └── db.js                     # MongoDB connection configuration
│   ├── controllers/
│   │   ├── auth.controler.js         # Authentication logic (register, login, profile, logout, refresh token)
│   │   ├── post.controler.js         # Post creation, retrieval, deletion, likes
│   │   └── follow.user.controler.js  # Follow/unfollow, accept/reject requests
│   ├── middleware/
│   │   └── auth.middleware.js        # JWT authentication middleware
│   ├── models/
│   │   ├── user.model.js             # User account schema with password hashing & JWT methods
│   │   ├── post.model.js             # Post data schema
│   │   ├── likes.model.js            # Post likes schema with unique constraint
│   │   └── follow.model.js           # Follow relationship schema with status tracking
│   ├── routes/
│   │   ├── auth.route.js             # Authentication & user profile routes
│   │   ├── post.routes.js            # Post management routes
│   │   └── follow.user.route.js      # Follow/unfollow routes
│   └── utils/
│       ├── apiError.js               # Custom error handling class
│       ├── apiresponse.js            # Standardized API response format
│       └── asynhandler.js            # Async error wrapper utility
├── .env                              # Environment variables
├── .gitignore                        # Git ignore rules
├── package.json                      # Dependencies and scripts
├── README.md                         # Project documentation
└── server.js                         # Server entry point
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

### Authentication (`/api/auth`)

| Method | Endpoint                | Description                                   | Auth Required |
| ------ | ----------------------- | --------------------------------------------- | ------------- |
| POST   | `/register`             | Register a new user                           | No            |
| POST   | `/login`                | Login user (returns access & refresh tokens)  | Yes           |
| GET    | `/profile`              | Get current user profile                      | Yes           |
| GET    | `/logout`               | Logout user and clear tokens                  | Yes           |
| POST   | `/refresh_refreshToken` | Refresh access token using refresh token      | No            |
| GET    | `/profileDet/:username` | Get specific user profile details by username | Yes           |

### Posts (`/api/posts`)

| Method | Endpoint           | Description                         | Auth Required |
| ------ | ------------------ | ----------------------------------- | ------------- |
| POST   | `/create`          | Create a new post with image upload | Yes           |
| GET    | `/getPoste`        | Get all posts                       | Yes           |
| GET    | `/details/:postId` | Get specific post details by ID     | Yes           |
| POST   | `/delete/:postId`  | Delete a post                       | Yes           |
| POST   | `/like/:postID`    | Like a post                         | Yes           |
| POST   | `/unlike/:postID`  | Unlike a post                       | Yes           |

### Users/Follow (`/api/users`)

| Method | Endpoint                   | Description                      | Auth Required |
| ------ | -------------------------- | -------------------------------- | ------------- |
| POST   | `/follow/:userID`          | Follow a user                    | Yes           |
| POST   | `/unfollow/:userID`        | Unfollow a user                  | Yes           |
| POST   | `/follow/:userID/accept`   | Accept a follow request          | Yes           |
| POST   | `/follow/:userID/reject`   | Reject a follow request          | Yes           |
| GET    | `/follow/requests/pending` | List all pending follow requests | Yes           |

### Request/Response Examples

**Create Post** - `POST /api/posts/create`

- **Headers**: `Authorization: Bearer <token>`, `Content-Type: multipart/form-data`
- **Body**: FormData with `image` (file), `caption` (string)
- **Response**: Created post object with user details

**Like Post** - `POST /api/posts/like/:postID`

- **Headers**: `Authorization: Bearer <token>`
- **Response**: Success message or error if already liked

**Follow User** - `POST /api/users/follow/:userID`

- **Headers**: `Authorization: Bearer <token>`
- **Response**: Follow request created with pending status

## 👨‍💻 Author

Amin Haroon - [GitHub](https://github.com/aminharoon)

## 📊 Development Progress

### Completed ✅

- [x] Project setup & initialization
- [x] Database connection & configuration
- [x] User registration & login system
- [x] JWT token implementation (access & refresh tokens)
- [x] User authentication middleware
- [x] MongoDB integration with Mongoose
- [x] User model with password hashing & JWT methods
- [x] Post model & schema
- [x] Likes model with unique constraint
- [x] Follow model with status tracking (pending, accepted, rejected)
- [x] Post creation endpoint with image upload
- [x] Post retrieval (all posts & specific post details)
- [x] Post deletion functionality
- [x] Like/Unlike post functionality
- [x] Follow/Unfollow functionality
- [x] Accept/Reject follow requests
- [x] Pending follow requests listing
- [x] User profile endpoints
- [x] Image upload with Multer & ImageKit integration
- [x] Error handling & async utilities (AsyncHandler)
- [x] Centralized API response format
- [x] CORS configuration

### In Progress 🔄

- [ ] Comments on posts system
- [ ] Comment creation, retrieval, deletion endpoints
- [ ] Post feed with pagination
- [ ] Search functionality for users & posts

### TODO 📋

- [ ] Frontend application (React/Vue)
- [ ] Real-time notifications with WebSockets
- [ ] Direct messaging system
- [ ] Hashtag support in posts
- [ ] Trending posts algorithm
- [ ] User recommendations engine
- [ ] Post sharing functionality
- [ ] Story feature
- [ ] User blocking feature
- [ ] Advanced filtering & sorting
- [ ] API rate limiting
- [ ] Caching implementation

---

**Next Steps:**

1. Implement comments system for posts
2. Build frontend application with React/Vite
3. Add paginated post feed
4. Implement search functionality
5. Add real-time notifications
