import { useEffect, useState } from 'react'
import UserAvatar from '../../components/UserAvatar/UserAvatar'
import styles from './Profile.module.css'
import getUserProfile from '../../common/graphql/queries/getUserProfile'
import { UserProfile as UserProfileType } from '../../common/User/types/User'
import UserProfile from '../../containers/UserProfile/UserProfile'
import { Auth } from 'aws-amplify'
import updateUserProfile from '../../common/graphql/mutations/updateUserProfile'

type ProfileOption = {
  value: string
  label: string
}

export default function Profile() {
  const [isLoading, setIsLoading] = useState(false)
  const [userProfile, setUserProfile] = useState(null as UserProfileType | null)

  const options: ProfileOption[] = [
    { value: 'profile', label: 'Profile', },
    { value: 'stats', label: 'Stats' },
    { value: 'settings', label: 'Settings', },
  ]

  const [chosenOption, setChosenOption] = useState(options[0])

  const fetchUserProfile = async () => {
    setIsLoading(true)
    try {
      const currentAuthenticatedUser = await Auth.currentAuthenticatedUser()
      console.log('authenticatedu user', currentAuthenticatedUser)
      if (!currentAuthenticatedUser?.attributes?.email) return
      const userProfile = await getUserProfile()
      console.log(userProfile)
      setUserProfile(userProfile)
    } catch (ex) {
      console.log('Error fetching user profile', ex)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchUserProfile()
  }, [])

  const onOptionSelected = (optionChosen: ProfileOption) => {
    const option = options.find((option) => option.value === optionChosen?.value)
    if (option) setChosenOption(option)
  }

  const renderMenuOptions = () => options.map((option) => (
    <div className={styles.menuItem}>
      <p onClick={() => onOptionSelected(option)} className={styles.menuButton}>{option.label}</p>
    </div>
  ))

  const renderUserProfile = () => (
    <UserProfile
      userProfile={userProfile}
      onSaveProfileClicked={async (name: string, nickname: string, dateOfBirth: string) => {
        try {
          setIsLoading(true)
          await updateUserProfile(name, nickname, dateOfBirth)
        } catch (ex) {
          console.log('Error saving user profile', ex)
        } finally {
          setIsLoading(false)
        }
      }}
      isLoading={isLoading}
    />
  )

  const renderStats = () => <div>this is the stats view</div>
  const renderSettings = () => <div>this is the settings view</div>

  const renderChosenOption = () => {
    if (chosenOption.value === 'profile') return renderUserProfile()
    if (chosenOption.value === 'stats') return renderStats()
    if (chosenOption.value === 'settings') return renderSettings()
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <UserAvatar className={styles.avatar} />
        <div className={styles.containerMenu}>
          {renderMenuOptions()}
        </div>
      </div>
      <div className={styles.containerRight}>
        {renderChosenOption()}
      </div>
    </div>
  )
}
