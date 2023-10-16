import { useAuthenticator } from '@aws-amplify/ui-react'
import styles from './Header.module.css'
import logo from '../../assets/images/logos/logo-words.png'
import { Link, useNavigate } from 'react-router-dom'
import { mapCognitoAttributesToUserProfile } from '../../common/User/mappers/UserMappers'
import Dropdown from '../../components/Dropdown/Dropdown'
import UserAvatar from '../../components/UserAvatar/UserAvatar'

type HeaderProps = {}
export default function Header(props: HeaderProps) {
  const {
    user: cognitoUser,
    authStatus,
    signOut,
  } = useAuthenticator((context) => [context.user])

  const navigate = useNavigate()

  const isAuthenticated = authStatus === 'authenticated'
  const user = cognitoUser ? mapCognitoAttributesToUserProfile(cognitoUser.attributes as any) : null

  const renderAuthButtons = () => {
    if (isAuthenticated) return (
      <div className={styles.authButtons}>
        <button onClick={() => signOut()} className={styles.authButton}>Sign Out</button>
      </div>
    )

    return (
      <div className={styles.authButtons}>
        <Link to='/login'>Sign in</Link>
      </div>
    )
  }

  const renderDropDown = () => {
    if (!isAuthenticated) return null

    const options = [
      { value: 'default', label: `${user?.email}`, action: () => { } },
      { value: 'profile', label: 'Profile', action: () => navigate('/profile') },
      { value: 'signout', label: 'Sign Out', action: () => signOut() },
    ]

    const onOptionSelected = (event: any) => {
      const option = options.find((option) => option.value === event?.value)
      if (option) option.action()
    }

    return (
      <div >
        <Dropdown
          options={options.slice(1)}
          defaultValue={options[0]}
          onChange={(event) => onOptionSelected(event)}
        />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <Link to='/'>
          <img className={styles.logo} src={logo} alt='Unknown Neain Logo' />
        </Link>
      </div>
      <div className={styles.containerRight}>
        {renderDropDown()}
        <Link to='/profile'><UserAvatar className={styles.avatar} /></Link>
      </div>
    </div>
  )
}
