Here’s your complete, polished version in that exact format 👇

🌍 BRANA – Ethiopian Art Marketplace

BRANA is a modern digital art marketplace that connects Ethiopian artists with global art collectors and enthusiasts.
Built with Next.js and NestJS, it enables artists to showcase their work, build portfolios, and reach international audiences — preserving Ethiopian cultural heritage through digital innovation.

✨ Key Features

🎨 Artist Portfolios – Create, manage, and display artwork collections
🧭 Art Discovery – Filter by artist, category, or price range
🔐 Secure Authentication – Role-based access for Artists, Buyers, and Admins
📊 Dashboards – Insights for both artists and buyers
🌗 Dark/Light Mode – Customizable viewing experience
📱 Responsive Design – Optimized for mobile and desktop
📩 Password Reset – Secure email-based recovery
📞 Contact & About Pages – Easy communication and platform information

🛠️ Technology Stack
Frontend

Framework: Next.js (React + TypeScript)

Styling: Tailwind CSS

Rendering: Server-side rendering (SEO-optimized)

State Management: React Hooks + Context API

Deployment: Vercel

Backend

Framework: NestJS (TypeScript)

Database: PostgreSQL

ORM: TypeORM

Authentication: JWT + Role-based Access Control

Email Service: Nodemailer

Deployment: Render / Railway / Heroku

Development Tools

Version Control: Git + GitHub

Testing: Jest

Code Quality: ESLint + Prettier

CI/CD: GitHub Actions

Package Manager: npm

📁 Project Structure
brana-art-marketplace/
├── 📁 frontend/              # Next.js Frontend
│   ├── 📁 components/        # UI Components
│   ├── 📁 pages/             # Application Pages
│   ├── 📁 styles/            # Tailwind CSS
│   └── 📁 utils/             # Frontend Utilities
│
├── 📁 backend/               # NestJS Backend
│   ├── 📁 src/               # Application Source Code
│   │   ├── 📁 auth/          # Authentication Module
│   │   ├── 📁 artworks/      # Artwork Management
│   │   ├── 📁 users/         # User Management
│   │   ├── 📁 portfolio/     # Artist Portfolios
│   │   ├── 📁 dashboard/     # Analytics & Stats
│   │   └── 📁 common/        # Shared Utilities
│   └── 📁 test/              # Test Files
│
├── 📄 package.json
├── 📄 README.md
└── 📄 .env.example

🚀 Getting Started
Prerequisites

Ensure the following are installed:

Node.js (v18+)

PostgreSQL

Git

npm or yarn

Installation
# Clone the repository
git clone https://github.com/your-username/brana-art-marketplace.git
cd brana-art-marketplace

# Install dependencies
npm install

Environment Variables
Frontend (.env.local)
NEXT_PUBLIC_API_URL=http://localhost:5000

Backend (.env)
DATABASE_URL=postgresql://user:password@localhost:5432/brana_db
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_app_password
PORT=5000

Run the Project
# Start the backend
cd backend
npm run start:dev

# Start the frontend
cd frontend
npm run dev


Frontend: http://localhost:3000

Backend: http://localhost:5000

🗃️ Database Configuration
Local Setup

Install PostgreSQL and create a database named brana_db.

Update the .env file with your local credentials.

Run database migrations or sync:

npm run db:sync

Cloud Setup (Optional)

Use a hosted PostgreSQL service such as Render, Neon, or Supabase.

Replace the DATABASE_URL in your .env file with the cloud connection string.

⚙️ Available Scripts
Command	Description
npm run dev	Start both frontend and backend in development mode
npm run dev:frontend	Start only the Next.js frontend
npm run dev:backend	Start only the NestJS backend
npm run build	Build applications for production
npm run start	Run production builds
npm run test	Run tests
npm run lint	Lint code for errors
npm run type-check	Validate TypeScript types
🏗️ Architecture Overview
Frontend Architecture

Framework: Next.js (React + TypeScript)

Server-side rendering for SEO

Tailwind CSS for styling

Context API for global state management

Component-based modular design

Backend Architecture

Framework: NestJS (TypeScript)

RESTful API with modular structure

PostgreSQL database via TypeORM

JWT authentication and role-based access

Email verification and password reset flow

🔐 Security Features

HTTPS encryption for all communications

Secure JWT-based authentication

Role-based access control (Artist, Buyer, Admin)

Password hashing with bcrypt

Input validation and rate limiting

CORS configuration for safe API access

🧪 Testing
# Run unit tests
npm run test

# Run tests with coverage
npm run test:coverage

☁️ Deployment
Frontend (Vercel)

Connect your GitHub repository to Vercel
.

Add environment variables from .env.local.

Deploy automatically on push to main.

Backend (Render / Railway / Heroku)

Connect the GitHub repository.

Add environment variables in the platform dashboard.

Link your PostgreSQL database.

Deploy automatically on push.

🤝 Contributing

We welcome contributions from the community!

How to Contribute

Fork this repository

Create a feature branch

git checkout -b feature/your-feature


Commit changes

git commit -m "Add: your feature description"


Push and open a Pull Request

Contribution Guidelines

Follow TypeScript and NestJS best practices

Use ESLint + Prettier for formatting

Include tests for new features

Update documentation as needed

📄 License

This project is licensed under the MIT License.
See the LICENSE
 file for more details.
