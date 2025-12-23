# Shubham's Portfolio

A modern, responsive personal portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Tech Stack

- **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [daisyUI](https://daisyui.com/)
- **Routing:** [React Router](https://reactrouter.com/)

## ✨ Features

- **Responsive Design:** Optimized for both desktop and mobile views.
- **Dynamic Sidebar:** Collapsible sidebar with navigation links.
- **Theming:** Custom color variables for light and dark modes (using CSS variables).
- **Reusable Components:** Modular components like `HorizontalCard` for displaying projects.

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/shubham-portfolio.git
    cd shubham-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components (Sidebar, Header, HorizontalCard)
├── pages/           # Page components (Home, Projects)
├── App.tsx          # Main application layout
├── main.tsx         # Entry point with Router provider
└── index.css        # Global styles and Tailwind/daisyUI configuration
```

## 🎨 Customizing

- **Sidebar Colors:** Edit `src/index.css` to adjust `--color-sidebar-bg` and `--color-sidebar-active`.
- **Navigation:** Update `src/components/Sidebar.tsx` to add or modify menu items.
- **Content:** Update `src/pages/Home.tsx` to change your bio and featured projects.

---

Made with ❤️ by Shubham
