import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../common/User/hooks/useAuth'

interface AuthGuardProps {
  children: ReactNode,
}

export default function AuthGuard(props: AuthGuardProps) {
  const {
    children,
  } = props

  // (TODO): implement using amplify auth
  // const { user, isLoading } = useAuth()

  // if (isLoading) return <p>Loading...</p>

  // if (!user?.email) return <Navigate to='/login' />

  return <>{children}</>
}
