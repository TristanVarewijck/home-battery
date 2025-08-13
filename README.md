# ThuisBatterij - Home Battery Landing Site

A production-ready Next.js 14+ landing site for a Dutch home battery company. Built with TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **SEO Optimized**: Comprehensive metadata, sitemap, robots.txt, structured data
- **Form Handling**: Client and server validation with Zod, React Hook Form
- **Database**: SQLite with Drizzle ORM for development
- **Testing**: Jest setup with React Testing Library
- **Design System**: Custom brand colors (blue/green energy theme)
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Performance**: Optimized images, lazy loading, efficient bundling

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Git

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd home-battery-site
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up the database**

   ```bash
   npm run db:generate
   npm run db:push
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Setup

The project uses SQLite with Drizzle ORM for development:

```bash
# Generate migrations
npm run db:generate

# Apply migrations
npm run db:migrate

# Push schema changes (development)
npm run db:push

# Open Drizzle Studio
npm run db:studio
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run Jest tests
- `npm run format` - Format code with Prettier
- `npm run db:generate` - Generate database migrations
- `npm run db:push` - Push schema to database

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── submit/        # Form submission endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page
│   └── sitemap.ts         # Dynamic sitemap
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── sections/         # Landing page sections
│   └── SubmissionForm.tsx # Form component
└── lib/                  # Utilities and configurations
    ├── db/               # Database setup
    ├── validations/      # Zod schemas
    └── utils.ts          # Utility functions
```

## 🎨 Design System

### Colors

- **Primary Blue**: `#2563eb` (brand-blue-600)
- **Accent Green**: `#22c55e` (brand-green-500)
- **Background**: White with subtle gradients
- **Text**: Gray scale for readability

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with proper hierarchy
- **Body**: Regular weight with good line height

## 📱 Responsive Design

The site is built mobile-first with responsive breakpoints:

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🔧 Configuration Files

- `tailwind.config.ts` - Tailwind CSS configuration
- `drizzle.config.ts` - Database configuration
- `jest.config.js` - Testing configuration
- `.prettierrc` - Code formatting rules
- `next.config.ts` - Next.js configuration

## 🌐 SEO Features

- **Metadata**: Comprehensive OpenGraph and Twitter cards
- **Sitemap**: Dynamic sitemap generation
- **Robots.txt**: Search engine crawling rules
- **Structured Data**: JSON-LD for rich snippets
- **Performance**: Optimized Core Web Vitals

## 📊 Form Validation

The submission form includes:

- **Client-side**: Real-time validation with React Hook Form
- **Server-side**: Zod schema validation
- **Fields**: Name, email, phone, postcode, annual usage, solar panels, consent
- **Error Handling**: User-friendly error messages

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set environment variables if needed
3. Deploy automatically on push

### Other Platforms

1. Build the project: `npm run build`
2. Start the server: `npm run start`
3. Configure your hosting platform

## 🔒 Environment Variables

Create a `.env.local` file for local development:

```env
# Database (optional for SQLite)
DATABASE_URL="file:./local.db"

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID="your-ga-id"

# Google Search Console (optional)
NEXT_PUBLIC_GOOGLE_VERIFICATION="your-verification-code"
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm test`
5. Format code: `npm run format`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or issues:

- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Updates

To update dependencies:

```bash
npm update
npm audit fix
```

## 📈 Performance Monitoring

The site includes:

- Core Web Vitals optimization
- Image optimization with Next.js
- Efficient bundling
- Lazy loading for components

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
