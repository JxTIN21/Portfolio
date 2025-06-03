# 🚀 Jatin Srivastava - Personal Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer. Built with React and featuring stunning animations, gradient designs, and smooth user interactions.

## 🌟 Features

- **Modern Design**: Sleek, dark theme with vibrant cyan and purple gradients
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Animations**: Mouse-following effects, hover animations, and smooth transitions
- **Smooth Scrolling**: Navigation with scroll spy and section highlighting
- **Project Showcase**: Featured projects with live demos and GitHub links
- **Skills Display**: Organized technical skills with category-based layout
- **Contact Integration**: Direct links to email, LinkedIn, and GitHub
- **Resume Download**: One-click resume download functionality

## 🛠️ Tech Stack

- **Frontend**: React.js with Hooks (useState, useEffect)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS animations and transforms
- **Build Tool**: Create React App / Vite

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JxTIN21/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add your assets**
   - Place your profile image at `/public/images/Me.png`
   - Add project images in `/public/images/` directory
   - Add your resume PDF at `/public/resume/Jatin_Srivastava_Resume.pdf`

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── Me.png
│   │   ├── Hospital.png
│   │   ├── Agent.png
│   │   ├── Headliner.png
│   │   └── Spotify.png
│   └── resume/
│       └── Jatin_Srivastava_Resume.pdf
├── src/
│   │   
│   ├── App.js
│   └── index.js
└── README.md
```

## 🎨 Customization

### Personal Information
Update the following sections in `Portfolio.js`:

1. **Personal Details**
   ```javascript
   // Update name, title, and description
   <h2>Your Name</h2>
   <p>Your description...</p>
   ```

2. **Projects Array**
   ```javascript
   const projects = [
     {
       title: "Your Project",
       description: "Project description",
       tech: ["React", "Node.js"],
       github: "your-github-link",
       live: "your-live-demo-link",
       image: "/images/your-project-image.png"
     }
   ];
   ```

3. **Skills Array**
   ```javascript
   const skills = [
     {
       category: "Your Category",
       items: ["Skill 1", "Skill 2"],
       icon: <YourIcon className="w-6 h-6" />
     }
   ];
   ```

4. **Contact Links**
   ```javascript
   // Update email, LinkedIn, and GitHub links
   href="mailto:your-email@example.com"
   href="https://linkedin.com/in/your-profile"
   href="https://github.com/your-username"
   ```

### Styling
- Modify colors in Tailwind classes
- Adjust animations and transitions
- Update gradient combinations
- Change layout breakpoints

## 📱 Sections

1. **Hero Section**: Introduction with animated profile picture
2. **About**: Brief personal description
3. **Skills**: Technical skills organized by categories
4. **Projects**: Featured projects with images and links
5. **Contact**: Social links and contact information

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Configure custom domain (optional)

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 📊 Performance Features

- Optimized images and assets
- Smooth animations with CSS transforms
- Efficient React hooks usage
- Responsive design patterns
- Lazy loading considerations

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💬 Contact

**Jatin Srivastava**
- Email: jatinsrivastava4104@gmail.com
- LinkedIn: [jatin-srivastava-784223253](https://www.linkedin.com/in/jatin-srivastava-784223253)
- GitHub: [JxTIN21](https://github.com/JxTIN21)

## 🙏 Acknowledgments

- [Lucide React](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [React](https://reactjs.org/) for the component-based architecture

---

⭐ If you found this project helpful, please give it a star!

🚀 **Live Demo**: [View Portfolio](https://unrivaled-frangollo-12da7c.netlify.app/)
