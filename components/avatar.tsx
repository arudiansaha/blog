import Image from 'next/image'
import styles from '../styles/avatar.module.css'

type Props = {
  name: string,
  imageUrl: string,
}

export default function Avatar({ name, imageUrl }: Props) {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.image}
        src={imageUrl}
        alt={`${name}'s avatar`}
        width="48"
        height="48"
        loading="lazy"
      />
      <p className={styles.name}>{name}</p>
    </div>
  )
}
