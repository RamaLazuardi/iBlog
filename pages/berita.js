import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/navbar'
import Cover from '../components/cover'
import KumpulanNews from '../components/kumpulan_berita'
// import styles from '../styles/Home.module.css'


export default function Berita() {
  return(
    <div>
      <Header />
      <KumpulanNews />
    </div>
  )
}
