import defaultAvatar from '../../assets/images/default-avatar-small.png'

type UserAvatarProps = {
  className?: string
}
export default function UserAvatar(props: UserAvatarProps) {
  const { className } = props
  return (
    <div style={{ padding: 0, margin: 0 }}>
      <img className={className} src={defaultAvatar} alt='User Avatar' />
    </div>
  )
}
