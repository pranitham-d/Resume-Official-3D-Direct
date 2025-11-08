
# Pranitham Devarakonda - Interactive 3D Portfolio

This repository contains the source code for my personal portfolio website. It's a modern, responsive, and visually engaging single-page application designed to showcase my skills, experience, and projects as a Linux & Azure Infrastructure & Automation Administrator.

**Live Demo:** [https://pranitham.netlify.app/](https://pranitham.netlify.app/)

## ✨ Features

- **Interactive 3D Graphics**: Built with Three.js and `@react-three/fiber` for an immersive user experience, including an animated hero sphere and a dynamic particle background.
- **Smooth Animations & Transitions**: Utilizes Framer Motion for elegant, performant animations on scroll and element interactions.
- **Fully Responsive Design**: A mobile-first approach ensures a seamless experience across all devices, from desktops to smartphones.
- **Custom Animated Cursor**: A unique cursor that enhances interactivity and provides visual feedback on hoverable elements.
- **Dynamic Content Sections**: Clearly organized sections for:
    - **Hero**: A captivating introduction.
    - **About Me**: A personal summary and professional photo.
    - **Skills**: An animated carousel showcasing key technical skills.
    - **Experience**: A clean, vertical timeline of my professional journey.
    - **Projects**: A grid of project cards with lazy-loaded images and detailed descriptions.
    - **Contact**: Easy-to-find contact information, social links, and a list of certifications.
- **Performance Optimized**: Implements best practices like lazy loading for images and efficient component rendering to ensure fast load times.

## 🛠️ Technologies Used

This project is built with a modern frontend stack:

- **Framework**: [React](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **3D Rendering**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction), [@react-three/drei](https://github.com/pmndrs/drei)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)

## 📂 Project Structure

The codebase is organized into a clean and maintainable structure.

```
/
├── public/
│   └── ... # Static assets
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── Section.tsx      # Reusable section wrapper
│   │   ├── About.tsx
│   │   ├── AnimatedBackground.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   └── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx                  # Main application component
│   ├── constants.ts             # All static text content, skills, project data, etc.
│   ├── index.css                # Global styles and Tailwind directives
│   ├── main.tsx                 # Application entry point
│   └── types.ts                 # TypeScript type definitions
├── index.html
├── package.json
└── Readme.md
```

## 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/pranitham-d/your-portfolio-repo.git
    cd your-portfolio-repo
    ```

2.  **Install dependencies:**
    (Using npm)
    ```bash
    npm install
    ```
    (or using yarn)
    ```bash
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the development server, typically at `http://localhost:5173`.

## 🌐 Deployment

This portfolio is deployed on [Netlify](https://www.netlify.com/), which provides continuous deployment from the `main` branch, ensuring the live site is always up-to-date with the latest changes.

## 👤 Author

**Pranitham Devarakonda**

-   **LinkedIn**: [@pranitham-devarakonda](https://www.linkedin.com/in/pranitham-devarakonda/)
-   **GitHub**: [@pranitham-d](https://github.com/pranitham-d)
-   **Email**: pranitham12374@gmail.com
