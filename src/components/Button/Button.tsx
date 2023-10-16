import styles from './Button.module.css'

const ButtonColorVariantsClassNames = {
  primary: 'buttonPrimary',
  secondary: 'buttonSecondary',
  tertiary: 'buttonTertiary',
}

const getButtonColorVariantClassName = (colorVariant: ButtonColorVariant, disabled: boolean) => {
  if (disabled) return styles.disabled

  return styles[ButtonColorVariantsClassNames[colorVariant]]
}

type ButtonColorVariant = 'primary' | 'secondary' | 'tertiary'
type ButtonProps = {
  className?: string
  colorVariant?: ButtonColorVariant
  children?: React.ReactNode
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
}
export default function Button(props: ButtonProps) {
  const {
    children = <></>,
    className: parentClassName = '',
    colorVariant = 'primary',
    onClick,
    disabled = false,
  } = props

  const className = `
  ${getButtonColorVariantClassName(colorVariant, disabled)}
  ${styles.button}
  ${parentClassName}
  `

  return (
    <button
      className={className}
      onClick={(e) => onClick(e)}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
