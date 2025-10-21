# BRANA Arts - Ethiopian Art Gallery Platform

A full-stack web application showcasing Ethiopian traditional arts and crafts with user authentication, artwork management, and e-commerce functionality.

## 🌟 Features

- **User Authentication**: Registration, login, and profile management
- **Artwork Gallery**: Browse, like, comment, and purchase artworks
- **Artist Dashboard**: Upload, manage, and sell artworks
- **Responsive Design**: Mobile-first design with dark/light theme support
- **Real-time Features**: Like system, comments, and user interactions
- **E-commerce**: Buy/sell functionality with transaction management

## 🛠 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Modules** - Component-scoped styling

### Backend
- **NestJS** - Node.js framework with TypeScript
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Token authentication
- **Bcrypt** - Password hashing

## 📁 Project Structure

```
art-gallery/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   ├── components/      # Reusable React components
│   │   ├── lib/            # API client and utilities
│   │   └── styles/         # Global styles
│   ├── public/             # Static assets
│   └── package.json
├── backend/                 # NestJS backend application
│   ├── src/
│   │   ├── auth/           # Authentication module
│   │   ├── users/          # User management
│   │   ├── artworks/       # Artwork management
│   │   └── common/         # Shared utilities
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance)
- **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/mahderhawaz/Brana-artworks.git
cd Brana-artworks
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

#### Backend Environment Variables (.env)

```env
# Database
MONGODB_URI=mongodb://localhost:27017/brana-arts
# or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/brana-arts

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d

# Server Configuration
PORT=10000
NODE_ENV=development
```

#### Start Backend Server

```bash
# Development mode with hot reload
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

The backend server will run on `http://localhost:10000`

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Create environment file
touch .env.local
```

#### Frontend Environment Variables (.env.local)

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:10000

# For production deployment:
# NEXT_PUBLIC_API_URL=https://your-backend-domain.com
```

#### Start Frontend Server

```bash
# Development mode
npm run dev

# Build for production
npm run build
npm run start
```

The frontend will run on `http://localhost:3000`

## 🗄 Database Setup

### Local MongoDB

1. **Install MongoDB** locally or use **MongoDB Compass**
2. **Create database** named `brana-arts`
3. **Update connection string** in backend `.env` file

### MongoDB Atlas (Cloud)

1. **Create account** at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. **Create cluster** and database
3. **Get connection string** and update backend `.env`
4. **Whitelist IP addresses** in Atlas security settings

## 🚀 Deployment

### Frontend Deployment (Vercel)

1. **Connect GitHub repository** to Vercel
2. **Set environment variables**:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-domain.com
   ```
3. **Deploy** - Vercel will auto-deploy on git push

### Backend Deployment (Render/Railway/Heroku)

1. **Create new service** on your chosen platform
2. **Connect GitHub repository**
3. **Set environment variables**:
   ```
   MONGODB_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   PORT=10000
   NODE_ENV=production
   ```
4. **Deploy** - Platform will auto-deploy on git push

## 🎨 Features in Detail

### Authentication System
- **Registration** with email validation
- **Login** with JWT tokens
- **Profile Management** with avatar upload

### Artwork Management
- **Upload** artworks with images
- **Gallery View** with filtering and search
- **Like System** with real-time updates
- **Comments** on artworks
- **Buy/Sell** functionality

### Responsive Design
- **Mobile-first** approach
- **Dark/Light** theme support
- **Transparent mobile menu** on dashboard pages
- **Adaptive layouts** for all screen sizes

## 🐛 Troubleshooting

### Common Issues

#### Backend Connection Issues
```bash
# Check if MongoDB is running
mongod --version

# Check backend server logs
npm run start:dev
```

#### Frontend API Connection
```bash
# Verify API URL in browser console
# Check Network tab for failed requests
# Ensure backend server is running on correct port
```

#### Environment Variables
```bash
# Verify .env files exist and have correct values
# Restart servers after changing environment variables
# Check for typos in variable names
```

## 📝 API Documentation

### Authentication Endpoints
```
POST /auth/register     # User registration
POST /auth/login        # User login
GET  /auth/profile      # Get user profile
```

### Artwork Endpoints
```
GET    /artworks        # Get all artworks
POST   /artworks        # Create new artwork
GET    /artworks/:id    # Get specific artwork
PUT    /artworks/:id/like    # Like/unlike artwork
POST   /artworks/:id/comment # Add comment
PUT    /artworks/:id/sell    # Put artwork for sale
POST   /artworks/:id/buy     # Purchase artwork
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** changes (`git commit -m 'Add amazing feature'`)
4. **Push** to branch (`git push origin feature/amazing-feature`)
5. **Open** Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Ethiopian traditional art and craft inspiration
- Next.js and NestJS communities
- Contributors and testers

## 📞 Support

For support and questions:
- **GitHub Issues**: [Create an issue](https://github.com/mahderhawaz/Brana-artworks/issues)
- **Email**: support@brana-arts.com

---

**Live Demo**: [https://brana-artworks.vercel.app](https://brana-artworks.vercel.app)

**API Documentation**: [https://brana-artworks-api.onrender.com](https://brana-artworks-api.onrender.com)
