import { StackClientApp } from '@stackframe/react'
import { useNavigate as useTanstackNavigate } from '@tanstack/react-router'

const useAdaptedNavigate = () => {
  const navigate = useTanstackNavigate()
  return (to: string) => navigate({ to })
}

export const stackClientApp = new StackClientApp({
  projectId: import.meta.env.VITE_STACK_PROJECT_ID,
  publishableClientKey: import.meta.env.VITE_STACK_PUBLISHABLE_CLIENT_KEY,
  tokenStore: typeof window === 'undefined' ? 'memory' : 'cookie',
  redirectMethod: { useNavigate: useAdaptedNavigate },
})