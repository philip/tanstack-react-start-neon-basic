# TanStack Start + Neon Auth Example

A complete example showing how to integrate **Neon Auth** with **TanStack Start** for SSR-compatible authentication.

## Features

- **Neon Auth Integration** - Complete authentication flow with Stack Auth
- **SSR Compatible** - Works with TanStack Start's server-side rendering
- **Client-Only Handler** - Properly handles auth callbacks without SSR issues
- **Modern UI** - Clean, responsive interface with Tailwind CSS
- **Full-Stack** - Database integration with Neon PostgreSQL

## Quick Start

1. **Clone and install:**
   ```bash
   git clone <your-repo>
   cd start-neon-basic
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   # Copy the example environment file
   cp env.example .env
   
   # Edit .env with your Neon Auth credentials:
   VITE_STACK_PROJECT_ID=your_neon_auth_project_id
   VITE_STACK_PUBLISHABLE_CLIENT_KEY=your_neon_auth_publishable_key
   STACK_SECRET_SERVER_KEY=your_neon_auth_secret_key
   
   # Optional: Set DATABASE_URL or leave commented out to auto-create with Neon Launchpad
   # DATABASE_URL=postgresql://username:password@host:port/database
   ```

3. **Get your Neon Auth credentials:**
   - Create a Neon project at [neon.tech](https://neon.tech)
   - Go to "Auth" section and get your credentials
   - Update `.env` with your actual values

4. **Run the app:**
   ```bash
   npm run dev
   ```

5. **Visit** `http://localhost:3000` and test authentication!

## How It Works

### Authentication Flow
1. User clicks "Log In" or "Sign Up"
2. Stack Auth handles the authentication flow
3. `/handler/*` route processes callbacks (client-only)
4. User is redirected back to the app

### Key Implementation Details
- **Handler Route**: `src/routes/handler.$.tsx` (catch-all with client-only rendering)
- **SSR Safety**: All Stack Auth components use `useState` + `useEffect` pattern
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

## Troubleshooting

If you encounter issues:

1. **404 on `/handler/sign-in`**: Ensure file is named `handler.$.tsx` (with `$` symbol)
2. **SSR errors**: All Stack Auth components must be client-only
3. **Route conflicts**: Delete `src/routeTree.gen.ts` and restart dev server
4. **Environment variables**: Ensure `VITE_STACK_PROJECT_ID` and `VITE_STACK_PUBLISHABLE_CLIENT_KEY` are set

See [AUTHENTICATION_TROUBLESHOOTING.md](./AUTHENTICATION_TROUBLESHOOTING.md) for detailed solutions.

## What This Solves

This example demonstrates the **correct way** to integrate Stack Auth with TanStack Start:

- **SSR Compatibility** - No `window is not defined` errors
- **Proper Route Naming** - Uses `handler.$.tsx` (the only working approach)
- **Clean Architecture** - Separation of auth logic and UI
- **Production Ready** - Follows Stack Auth best practices

## Learn More

- [TanStack Start Documentation](https://tanstack.com/start)
- [Neon Auth Documentation](https://neon.com/docs/neon-auth/overview)
- [Neon Database](https://neon.com/docs)
