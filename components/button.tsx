import styles from '../styles/button.module.css'

type Props = {
  buttonTypes: 'primary' | 'secondary' | 'danger' | 'disabled',
  buttonTitle: string,
  buttonOnClick?: any,
}

export default function Button({ buttonTypes, buttonTitle, buttonOnClick }: Props) {
  return (
    <button
      className={styles[buttonTypes]}
      onClick={buttonOnClick}
    >
      {buttonTitle}
    </button>
  )
}
