import React, { PropsWithChildren, createContext } from "react"
import { UserProfile } from "../User/types/User"

export interface AuthContextType {
  authenticatedUser: UserProfile | null

  setAuthenticatedUser: (user: UserProfile | null) => void
}

const initialContext: AuthContextType = {
  authenticatedUser: null,
  setAuthenticatedUser: () => { },
}

export const AuthContext = createContext<AuthContextType>(initialContext)

export const AuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [authenticatedUser, setAuthenticatedUser] = React.useState<UserProfile | null>(null)

  return (
    <AuthContext.Provider value={{ authenticatedUser, setAuthenticatedUser }}>
      {children}
    </AuthContext.Provider>
  )
}
