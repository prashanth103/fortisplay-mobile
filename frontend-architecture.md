# Fortisplay Mobile - Frontend Architecture

This document provides an overview of the frontend architecture for the **Fortisplay Mobile** application. The app is built on a modern, scalable React Native stack with Expo, featuring a dynamic custom design system and structured to support robust state management.

## 🏗️ 1. Core Technology Stack

*   **Framework:** [React Native](https://reactnative.dev/) / [Expo](https://expo.dev/) (SDK 57)
*   **Routing:** [Expo Router](https://docs.expo.dev/router/introduction/) (File-based navigation)
*   **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict typing across the app)
*   **State Management (Future):** [TanStack Query](https://tanstack.com/query/v5) (for server-state fetching and caching)
*   **Local State / Logic:** React Hooks (`useState`, `useMemo`, `useContext`)
*   **Styling & Theming:** Custom Design System (Dynamic Dark/Light mode, `StyleSheet`)

## 📂 2. Directory Structure

The project follows a feature-based and layer-based architectural pattern, making it highly modular and easy to scale.

```text
src/
├── app/               # Expo Router file-based routing (Screens & Layouts)
│   ├── (auth)/        # Authentication flow routes
│   └── (tabs)/        # Main app tab navigation flow
├── assets/            # Static assets (fonts, images)
├── components/        # Reusable UI components
│   ├── common/        # Shared components (Buttons, Inputs, Headers)
│   ├── bet/           # Feature: Betting specific components
│   ├── home/          # Feature: Home/Racing specific components
│   └── layout/        # Layout wrappers (Screens, AuthLayout)
├── data/              # Static data / Mock data
├── hooks/             # Custom React hooks (e.g., useThemeColors, useDevice)
├── styles/            # Shared complex style definitions
└── theme/             # Custom Design System
    ├── colors.ts      # LIGHT_COLORS and DARK_COLORS palettes
    ├── spacing.ts     # Standardized spacing constants
    ├── typography.ts  # Standardized typography
    └── ...            # Radius, breakpoints, etc.
```

## 🧩 3. Architectural Layers

### 3.1. Presentation Layer (UI)
The UI is built using functional React Native components. 
*   **Expo Router (`src/app/`)** acts as the entry point and handles navigation state automatically based on the file system.
*   **UI Components (`src/components/`)** are strictly presentational. They receive data via props and delegate actions via callback functions, keeping them decoupled from business logic.

### 3.2. Design System & Theming
The app employs a highly robust custom design system instead of third-party UI libraries. 
*   Colors are defined for both **Dark** and **Light** modes in `src/theme/colors.ts`.
*   The `useThemeColors()` hook reacts to system theme changes in real-time.
*   Components dynamically generate styles using a factory pattern: `useMemo(() => createStyles(COLORS), [COLORS])`, ensuring smooth re-rendering on theme switch.

### 3.3. State Management & Business Logic (Current & Future)
*   **Current State:** UI state is managed via local React Hooks (`useState`, `useMemo`). The application relies on static data sources (`src/data/`) passed down as props.
*   **Future Server State (TanStack Query):** 
    As the app connects to backend APIs, **TanStack Query (React Query)** will be introduced. It will act as the core asynchronous state manager, handling:
    *   **Caching & Deduping:** Minimizing redundant network requests.
    *   **Background Syncing:** Keeping data fresh (e.g., live race results, wallet balances).
    *   **Optimistic Updates:** Immediate UI feedback for betting actions before server confirmation.
    
    *Implementation Strategy:* API calls will be abstracted into dedicated query hooks (e.g., `useLiveRaces()`, `useWalletBalance()`) and consumed directly by the necessary components, avoiding prop-drilling.

### 3.4. Data Access Layer (Future)
When connected to real services, this layer will contain:
*   An **API Client** (e.g., `Axios` instance or configured `fetch`) handling authentication headers, interceptors, and error logging.
*   Local storage integrations (`SecureStore` or `AsyncStorage`) for persisting user tokens and settings.

## 🔄 4. Data Flow (Component Architecture)

1.  **User Action:** User interacts with a component (e.g., taps "Place Bet").
2.  **Hook Execution:** Component invokes a specific TanStack Query mutation (`usePlaceBetMutation`).
3.  **API Call:** Mutation triggers the API Client to send the request to the Backend.
4.  **Cache Update:** Upon success, TanStack Query invalidates necessary caches (e.g., `['walletBalance']`).
5.  **UI Re-render:** Components subscribed to the invalidated queries automatically fetch fresh data and re-render.

---

> **Draw.io Diagram Available**
> A visual representation of this architecture has been generated as an XML file. You can open `frontend-architecture.drawio.xml` using the Draw.io app or the VS Code Draw.io Integration extension.
