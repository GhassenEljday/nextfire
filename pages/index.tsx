import styles from '../styles/Home.module.css'
import Loader from '../components/Loader'
import toast from 'react-hot-toast'

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Just wait...</h2>
     <Loader show />
     <br/>
     <br/>
     <button onClick={() => toast.success('You did it')}>
       Click me!
     </button>
    </div>
  )
}
