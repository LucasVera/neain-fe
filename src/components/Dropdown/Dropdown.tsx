import Select from 'react-select'

type DropdownOption = {
  label: string
  value: string
  action: () => void
}
type DropdownProps = {
  options: DropdownOption[]
  defaultValue?: DropdownOption
  onChange: (event: DropdownOption | null) => void
}

export default function Dropdown(props: DropdownProps) {
  const { options, defaultValue, onChange } = props

  return (
    <Select
      options={options}
      defaultValue={defaultValue}
      onChange={(event) => onChange(event)}
      theme={(theme) => ({
        ...theme,
        colors: { // taken from colors in src/assets/css_variables/colors.css
          ...theme.colors,
          primary: '#293c50',
          primary25: '#293c50',
          primary50: '#293c50',
          primary75: '#293c50',
          neutral0: '#3e5b7b',
          neutral5: '#537aa5',
          neutral10: '#3e5b7b',
          neutral20: '#537aa5',
          neutral30: '#537aa5',
          neutral40: '#537aa5',
          neutral50: '#537aa5',
          neutral60: '#537aa5',
          neutral70: '#3e5b7b',
          neutral80: '#dde6f1',
          neutral90: '#537aa5',
        }
      })}
    />
  )
}
