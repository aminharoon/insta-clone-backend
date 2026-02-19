# Insta-Clone

A full-stack Instagram clone application built with **Node.js/Express** backend and modern frontend framework.

## ⚠️ Status

🔄 **UNDER PROCESS** - This project is actively under development. Features and API endpoints may change.

## 📋 Features

- **User Authentication** - Register, login with JWT tokens
- **Post Creation** - Create posts with image uploads to ImageKit
- **Image Storage** - Cloud-based image hosting with ImageKit
- **Database** - MongoDB for user and post data
- **Security** - Password hashing with bcryptjs, JWT authentication
- **Token-Based Auth** - Secure API endpoints with token validation

## 🛠️ Tech Stack

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **ImageKit** - Cloud image storage
- **Multer** - File upload middleware

### Frontend (Coming Soon)

- React, Vue, or Angular (to be decided)

## 📁 Project Structure

```
insta-clone/
├── src/
│   ├── controllers/
│   │   ├── auth.controler.js
│   │   └── post.controler.js
│   ├── middleware/
│   │   └── auth.middleware.js
│   ├── models/
│   │   ├── user.model.js
│   │   ├── post.model.js
│   │   └── follow.model.js
│   ├── routes/
│   │   ├── auth.route.js
│   │   └── post.routes.js
│   ├── config/
│   │   └── db.js
│   ├── app.js
│   └── constants.js
├── server.js
├── package.json
├── .env
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB
- ImageKit account

### Installation

1. Clone the repository:

```bash
git clone https://github.com/aminharoon/insta-clone.git
cd insta-clone
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file:

```env
DATABASE_URL=mongodb://localhost:27017
DB_NAME=insta-clone
JWT_SECRET=your_jwt_secret_key
IMAGE_KIT_KEY=your_imagekit_private_key
```

4. Start the server:

```bash
npm run dev
```

Server runs at `http://localhost:3000`

## 📡 API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Posts

- `POST /api/posts/create` - Create new post (requires valid token)

## 📝 License

MIT

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
