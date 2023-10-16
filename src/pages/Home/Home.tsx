import { useState } from 'react'
import useAuth from '../../common/User/hooks/useAuth'
import styles from './Home.module.css'

export default function Home() {
  const { signOut, user } = useAuth()
  const [counter, setCounter] = useState(0)

  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <h2>Hi, {user?.email} {user?.name}</h2>
      <p>Counter: {counter}</p>

      <button onClick={() => signOut()}>Sign Out</button>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}
