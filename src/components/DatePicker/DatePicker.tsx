// DatePicker.js
import React, { useState } from 'react'
import styles from './DatePicker.module.css'

type DatePickerProps = {
  value: string
  onChange: (newValue: string) => void
  label: string
  className?: string
}
function DatePicker(props: DatePickerProps) {
  const {
    value,
    onChange,
    label,
    className = ''
  } = props
  return (
    <div className={`${styles.datePicker} ${className}`}>
      <label className={styles.label}>{label}</label>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.dateInput}
      />
    </div>
  )
}

export default DatePicker