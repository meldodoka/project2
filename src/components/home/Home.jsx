import React from 'react'
import { Link } from 'react-router-dom'
import Kedua from '../pages/Kedua'
import "./home.css"

const Home = () => {
  return (
    <div  className='countainer'>
        <span>
            <span>Masukan Data Anda</span>
            <br />
            <br />
            <input   className='input' type="text" placeholder='Email' />
            <br />
            <br />
            <input  className='input' type="password" placeholder='Password' />
            <br />
            <br />
            <input  className='pesan' type="input" placeholder='Tulis Pesan Anda..' />
            <br />
            <br />
            <br />
            <button className='button'>Login</button>
            <br />
            <br />
            <span className='nanya'>Belum punya akun? </span>
            <Link to={"/Kedua"}>
              <span>   Daftar</span>
            </Link>
        </span>
    </div>
  )
}

export default Home