# smedrec-apps

This project was created with [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack), a modern TypeScript stack that combines React, TanStack Start, and more.

## Features

- **TypeScript** - For type safety and improved developer experience
- **TanStack Start** - SSR framework with TanStack Router
- **React Native** - Build mobile apps using React
- **Expo** - Tools for React Native development
- **TailwindCSS** - Utility-first CSS for rapid UI development
- **shadcn/ui** - Reusable UI components
- **Biome** - Linting and formatting
- **Husky** - Git hooks for code quality
- **Starlight** - Documentation site with Astro
- **Tauri** - Build native desktop applications
- **Turborepo** - Optimized monorepo build system

## Getting Started

First, install the dependencies:

```bash
bun install
```


Then, run the development server:

```bash
bun dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser to see the web application.
Use the Expo Go app to run the mobile application.



## Project Structure

```
smedrec-apps/
├── apps/
│   ├── web/         # Frontend application (React + TanStack Start)
│   ├── native/      # Mobile application (React Native, Expo)
│   ├── docs/        # Documentation site (Astro Starlight)
```

## Available Scripts

- `bun dev`: Start all applications in development mode
- `bun build`: Build all applications
- `bun dev:web`: Start only the web application
- `bun check-types`: Check TypeScript types across all apps
- `bun dev:native`: Start the React Native/Expo development server
- `bun check`: Run Biome formatting and linting
- `cd apps/web && bun desktop:dev`: Start Tauri desktop app in development
- `cd apps/web && bun desktop:build`: Build Tauri desktop app
- `cd apps/docs && bun dev`: Start documentation site
- `cd apps/docs && bun build`: Build documentation site
