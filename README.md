# 🚀 Angular SSR + Partial Hydration Demo

This project demonstrates **Server-Side Rendering (SSR)** with **Partial Hydration** in Angular, exploring how selective component hydration can improve load times and user experience by only hydrating specific components as needed. Created as a demonstration for a LinkedIn post to showcase performance optimization techniques in Angular!

## 📖 Project Overview

In large applications, optimizing performance is key! SSR and partial hydration help achieve this by:
1. **Rendering on the Server**: This delivers HTML quickly to the browser, improving initial load times.
2. **Selective Hydration**: Only components marked for interactivity are hydrated on the client, reducing the JavaScript bundle size and speeding up time-to-interactivity.

> **Note:** Angular's native support for partial hydration is limited, so this demo uses lazy loading and SSR techniques to achieve a similar effect.

## 🔧 Features

- **Angular Universal for SSR**
- **Lazy Loading for On-Demand Component Hydration**
- **Optimized Bundle Sizes** by selectively loading JavaScript only where needed

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) >= 18.x
- [Angular CLI](https://angular.io/cli) >= 20.x

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/nkansah-wireko-brobbey/linkedIn-post-ssr-app.git
    cd angular-ssr-partial-hydration-demo
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the SSR server:
    ```bash
    npm run dev:ssr
    ```

4. Open the app in your browser at `http://localhost:4200`.

### 📜 How It Works

This demo renders critical components on the server and only hydrates selected components when needed. For example, interactive parts of the page (like buttons or forms) are only hydrated upon interaction, while static content remains unaffected.

Key steps:
1. **Server-Side Rendering**: The app renders the initial HTML on the server.
2. **Partial Hydration Simulation**: Interactive components are lazy-loaded, mimicking partial hydration to delay loading until interaction.

## 👩‍💻 Usage

- Visit the homepage and observe how quickly the content loads.
- Interact with various components to see JavaScript loading only when necessary.

## 🌐 Connect

This project was created for a LinkedIn post! Follow me on LinkedIn for more demos and technical deep dives into Angular performance optimization.

## 📜 License

This project is licensed under the MIT License.
