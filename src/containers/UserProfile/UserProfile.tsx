import { useEffect, useState } from "react"
import { UserProfile as UserProfileType } from "../../common/User/types/User"
import InputWithLabel from "../../components/Input/Input"
import styles from './UserProfile.module.css'
import DatePicker from "../../components/DatePicker/DatePicker"
import Spinner from "../../components/Spinner"

type UserProfileProps = {
  userProfile?: UserProfileType | null
  isLoading: boolean
  onSaveProfileClicked: (
    name: string,
    nickname: string,
    dateOfBirth: string
  ) => void
}
export default function UserProfile(props: UserProfileProps) {
  const {
    userProfile = null,
    isLoading,
    onSaveProfileClicked
  } = props

  const [name, setName] = useState(userProfile?.name ?? '')
  const [nickname, setNickname] = useState(userProfile?.nickname ?? '')
  const [dateOfBirth, setDateOfBirth] = useState(userProfile?.dateOfBirth ?? new Date().toISOString())

  useEffect(() => {
    setName(userProfile?.name ?? '')
    setNickname(userProfile?.nickname ?? '')
    setDateOfBirth(userProfile?.dateOfBirth ?? new Date().toISOString())
  }, [userProfile])

  const onSaveButtonClicked = () => onSaveProfileClicked(
    name ?? '',
    nickname ?? '',
    dateOfBirth ?? ''
  )

  return (
    <>
      {isLoading ? <Spinner /> : (
        <div className={styles.container}>
          <InputWithLabel
            label="Name"
            placeholder="Name"
            value={name}
            onChange={(newValue) => setName(newValue)}
            key='name'
          />
          <InputWithLabel
            label="Nickname"
            placeholder="Nickname"
            value={nickname}
            onChange={(newValue) => setNickname(newValue)}
            key='nickname'
            className={styles.input}
          />
          <DatePicker
            value={dateOfBirth}
            onChange={(newValue) => setDateOfBirth(newValue)}
            label="Date of Birth"
            className={styles.input}
          />

          <div className={styles.containerInfoTexts}>
            <p className={styles.infoText}>Email: {userProfile?.email}</p>
            <p className={styles.infoText}>Email Verified: {userProfile?.emailVerified ? 'true' : 'false'}</p>
            <p className={styles.infoText}>Created at: {userProfile?.createdAt && new Date(userProfile.createdAt * 1000).toDateString()}</p>
          </div>

          <button className={styles.saveProfileButton} onClick={() => onSaveButtonClicked()}>Save Profile</button>
        </div>
      )}
    </>

  )
}
