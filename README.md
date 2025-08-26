# FinanceWise - SEBI Registered Research Analyst Website

A stunning light-themed website for FinanceWise, a SEBI Registered Research Analyst platform, built with React, Tailwind CSS, Framer Motion, and Express.js.

## 🎨 Design Features

- **Light Theme**: Clean white background with navy blue grid lines
- **Color Scheme**: Blue, Black, and White palette for professional appearance
- **Animations**: Smooth Framer Motion animations throughout
- **Icons**: Custom SVG icons for all sections
- **Responsive**: Fully responsive design for all devices
- **Modern UI**: Contemporary design with beautiful gradients and shadows

## 🚀 Tech Stack

### Frontend

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **Vite** - Fast build tool

### Backend

- **Express.js** - Node.js web framework
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger
- **dotenv** - Environment variables

## 📁 Project Structure

```
projext2/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Research.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── Compliance.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── postcss.config.js
└── server/                 # Express backend
    ├── server.js
    ├── package.json
    └── .env
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### 1. Clone and Navigate

```bash
cd "C:\Users\USER\OneDrive\Desktop\Intern Folder\LAST2\projext2"
```

### 2. Setup Frontend

```bash
cd client
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`

### 3. Setup Backend (in a new terminal)

```bash
cd server
npm install
npm run dev
```

The backend will run on `http://localhost:5000`

## 🌟 Website Sections

### 1. **Hero Section**

- Professional introduction
- SEBI registration details
- Call-to-action buttons
- Animated chart visualization

### 2. **About Section**

- Professional credentials
- Years of experience
- Educational background
- Philosophy and approach

### 3. **Services Section**

- 6 core services with custom icons:
  - Equity Research Reports
  - Portfolio Advisory
  - Thematic Research
  - Market Commentary
  - Risk Management
  - Investment Webinars

### 4. **Research & Analysis**

- Research methodology
- Sample reports
- Mandatory disclosures
- SEBI compliance information

### 5. **Pricing Section**

- 3 pricing tiers
- Monthly/Yearly billing toggle
- Feature comparisons
- Money-back guarantee

### 6. **Compliance Section**

- SEBI registration details
- Regulatory information
- Important disclaimers
- Grievance officer details

### 7. **Blog Section**

- Market updates and analysis
- Regulatory updates
- Newsletter subscription
- Featured articles

### 8. **Contact Section**

- Contact information
- Interactive contact form
- Office location
- Response statistics

### 9. **Footer**

- Company information
- Quick links
- Important disclaimers
- Social media links

## 🎭 Animation Features

- **Scroll-triggered animations** using Framer Motion
- **Hover effects** on cards and buttons
- **Staggered animations** for lists and grids
- **Scale and transform effects** for interactive elements
- **Smooth page transitions** between sections

## 🎨 Design System

### Colors

- **Primary Blue**: #0ea5e9 (Tailwind sky-500)
- **Navy**: #0f172a to #1e293b (Tailwind slate-900 to slate-800)
- **White**: #ffffff (Background)
- **Grid Lines**: Navy blue with 10% opacity

### Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weight with gradient text effects
- **Body**: Regular weight for readability

### Components

- **Cards**: White background with subtle shadows
- **Buttons**: Primary and secondary variants
- **Grid Pattern**: 30px x 30px navy grid on white background

## 🔧 Customization

### Changing Colors

Edit `tailwind.config.js` to modify the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom primary colors
      },
      navy: {
        // Your custom navy colors
      }
    }
  }
}
```

### Adding New Sections

1. Create component in `src/components/`
2. Import and add to `App.jsx`
3. Add navigation link to `Header.jsx`

### Modifying Animations

Framer Motion animations can be customized in each component:

```javascript
const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
```

## 🚀 Production Deployment

### Frontend Build

```bash
cd client
npm run build
```

### Backend Production

```bash
cd server
npm start
```

### Environment Variables

Update `.env` file with production values:

```
NODE_ENV=production
CLIENT_URL=https://your-domain.com
PORT=5000
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔒 Security Features

- **Helmet.js** for security headers
- **CORS** configuration
- **Input validation** on forms
- **Environment variables** for sensitive data

## 📈 Performance Optimizations

- **Vite** for fast development and building
- **Code splitting** with React Router
- **Optimized images** and SVG icons
- **Efficient animations** with Framer Motion
- **Tailwind CSS purging** for smaller bundle size

## 🎯 SEBI Compliance Features

- Registration number display
- Mandatory disclaimers
- Grievance officer information
- Risk disclosure statements
- Transparent fee structure

## 📞 Support

For any questions or support:

- **Email**: info@financewise.com
- **Phone**: +91-22-1234-5678
- **Registration**: INH000007789

## 📄 License

This project is proprietary software for FinanceWise.

---

Built with ❤️ for professional financial services.
