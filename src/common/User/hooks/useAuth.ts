import { useEffect, useState } from "react"
import { UserProfile } from "../types/User"
import { Auth, Logger } from 'aws-amplify'
import getUserDetails from "../../graphql/queries/getUserProfile"
import { useAuthenticator } from "@aws-amplify/ui-react"
import { mapCognitoAttributesToUserProfile } from "../mappers/UserMappers"
import { CognitoUserAttributes } from "../types/Cognito"

export default function useAuth() {
  const [user, setUser] = useState(null as UserProfile | null)
  const [isLoading, setIsLoading] = useState(false)
  const { user: cognitoUser, signOut: authenticatorSignOut } = useAuthenticator((context) => [context.user])


  // const getAuthenticatedUser = async (): Promise<User | null> => {
  //   setIsLoading(true)
  //   try {
  //     const userEmail = await getAuthenticatedUserEmail()
  //     if (!userEmail) {
  //       setUser(null)
  //       return null
  //     }


  //   } catch (ex) {
  //     const logger = new Logger('useAuth.getAuthenticatedUser')
  //     logger.error('error getting authenticated user: ', ex)
  //     return null
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  // const getAuthenticatedUserEmail = async (): Promise<string | null> => {
  //   try {
  //     const cognitoUser = await Auth.currentAuthenticatedUser()
  //     return cognitoUser.attributes.email
  //   } catch (ex) {
  //     return null
  //   }
  // }

  const signOut = async (): Promise<void> => {
    setIsLoading(true)
    try {
      authenticatorSignOut()
      setUser(null)
    }
    catch (ex) {
      console.log('error signing out: ', ex)
    }
    finally {
      setIsLoading(false)
    }
  }

  return {
    user,
    isLoading,
    signOut,
  }
}
