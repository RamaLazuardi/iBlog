import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/navbar'
import WisataDaratComp from '../components/wisata_darat'


// import styles from '../styles/Home.module.css'


export default function WisataDarat() {
  return(
    <div>
      <Header />
      <WisataDaratComp />
    </div>
  )
}
