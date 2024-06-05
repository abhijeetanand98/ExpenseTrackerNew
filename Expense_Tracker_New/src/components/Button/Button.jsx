import styles from './Button.module.css'

export default function ExTrButton({ children, handleClick, style = 'primary', shadow = false, type = 'button' }) {

    return (
        <button
            type={type}
            onClick={handleClick}
            className={`${styles.button} ${styles[style]} ${shadow && styles.shadow}`}
        >
            {children}
        </button>
    )
}