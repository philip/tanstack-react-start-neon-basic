# Important

This example was written to live in the TanStack Router monorepo:

    https://github.com/TanStack/router/tree/main/examples/react

It's designed to work with the monorepo's shared dependencies and build system.

---

# TanStack Start + Neon Auth Example

An example showing how to integrate **Neon Auth** with **TanStack Start** for SSR-compatible authentication.

- [TanStack Router Docs](https://tanstack.com/router)
- [Neon Auth Documentation](https://neon.com/docs/neon-auth/overview)

## Features

- **Neon Auth Integration** - Complete authentication flow with Neon Auth (based on Stack Auth)
- **SSR Compatible** - Works with TanStack Start's server-side rendering
- **Client-Only Handler** - Properly handles auth callbacks without SSR issues
- **Modern UI** - Clean, responsive interface with Tailwind CSS
- **Full-Stack** - Database integration with Neon PostgreSQL
- **Auto Database Setup** - Neon Launchpad automatically creates database connection

## Quick Start

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Set up environment variables:**
   ```bash
   cp env.example .env
   ```

3. **Get your Neon Auth credentials:**
   - The Neon Launchpad will automatically create a project for you
   - Claim your project when prompted (a browser tab will open automatically, and the claim URL is also saved to .env)
   - Go to the "Auth" section in your project dashboard, enable Auth, and get your credentials
   - Edit `.env` and replace these values with your actual credentials:
   ```bash
   VITE_STACK_PROJECT_ID=your_actual_project_id
   VITE_STACK_PUBLISHABLE_CLIENT_KEY=your_actual_publishable_key
   STACK_SECRET_SERVER_KEY=your_actual_secret_key
   ```

4. **Run the app:**
   ```bash
   pnpm dev
   ```

5. **Visit** `http://localhost:3000` and test authentication!

## Environment Setup

### Required Variables

Required environment variables:

- `VITE_STACK_PROJECT_ID` - Your Neon Auth project ID
- `VITE_STACK_PUBLISHABLE_CLIENT_KEY` - Your Neon Auth publishable key
- `STACK_SECRET_SERVER_KEY` - Your Neon Auth secret key (server-side only)

### Database Auto-Creation

This example uses the `@neondatabase/vite-plugin-postgres` plugin which automatically:
- Creates a Neon database connection via [Neon Launchpad](https://neon.com/docs/reference/neon-launchpad)
- Sets up the `DATABASE_URL` environment variable
- Handles database initialization

You can override this by setting your own `DATABASE_URL` in the `.env` file before running `pnpm dev`.

## How It Works

### Authentication Flow
1. User clicks "Log In" or "Sign Up"
2. Neon Auth handles the authentication flow
3. `/handler/*` route processes callbacks (client-only)
4. User is redirected back to the app

### Technical Details
- **Handler Route**: `src/routes/handler.$.tsx` (catch-all with client-only rendering)
- **SSR Compatibility**: All Stack Auth components use `useState` + `useEffect` pattern (designed to work with server-side rendering without errors)
- **Route Structure**: Clean file-based routing with TanStack Start conventions

## Project Structure

```
src/
├── routes/
│   ├── __root.tsx          # Root with StackProvider
│   ├── handler.$.tsx       # Auth callbacks (client-only)
│   ├── index.tsx           # Home page
│   └── _authed/            # Protected routes
├── stack.ts                # Stack Auth configuration
└── utils/                  # Database utilities
```

## What This Solves

This example demonstrates a working approach to integrate Neon Auth with TanStack Start:

- **SSR Compatibility** - No `window is not defined` errors
- **Proper Route Naming** - Uses `handler.$.tsx` (the only working approach)
- **Clean Architecture** - Separation of auth logic and UI
- **Production Ready** - Follows Stack Auth best practices

## Troubleshooting

Common issues and solutions:

1. **404 on `/handler/sign-in`**: Ensure file is named `handler.$.tsx` (with `$` symbol)
2. **SSR errors**: All Stack Auth components must be client-only
3. **Route conflicts**: Delete `src/routeTree.gen.ts` and restart dev server
4. **Environment variables**: Ensure `VITE_STACK_PROJECT_ID` and `VITE_STACK_PUBLISHABLE_CLIENT_KEY` are set

See [AUTHENTICATION_TROUBLESHOOTING.md](./AUTHENTICATION_TROUBLESHOOTING.md) for detailed solutions.
