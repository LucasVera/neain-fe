import { Authenticator } from '@aws-amplify/ui-react'
import styles from './Login.module.css'
import '@aws-amplify/ui-react/styles.css'
import { Navigate } from 'react-router-dom'

export default function Login() {
  const signOut = (amplifySignOut = () => { }) => {
    amplifySignOut()
    console.log('signOut')
  }

  return (
    <div className={styles.container}>
      <Authenticator
        className={styles.authenticatorContainer}
        socialProviders={['google']}
      >
        {(_) => <Navigate to='/' />}
      </Authenticator>
    </div>
  )
}
