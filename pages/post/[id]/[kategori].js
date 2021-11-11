import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../../components/navbar'
import Cover from '../../components/cover'
import KumpulanNews from '../../components/kumpulan_berita'
import Link from 'next/link'

// import styles from '../styles/Home.module.css'


export async function getServerSideProps(context) {
    
     let idArtikel = context.params.id;
     let judulArtikel = context.params.judul;
    
     return { 
         props: { 
             idArtikel, 
             judulArtikel } };

    }

    const Kategori = (props) => (
     <div className={styles.container}>
        <Header />
        
        <main className={styles.main}>
        <h1 className={styles.title}>Detail Artikel</h1>
        <div className={styles.grid}>
        <table>
        <tr>
        <td>ID</td>
        <td>:</td>
        <td>{props.idArtikel}</td>
        </tr>
        <tr>
        <td>Judul</td>
        <td>:</td>
        <td>{props.judulArtikel}</td>
        </tr>
        </table>
        </div>
        </main>
     </div>
    );
    export default Kategori;