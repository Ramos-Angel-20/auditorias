import { MdUsb } from 'react-icons/md';
import { HiMenu } from 'react-icons/hi';

import { useContext } from 'react';
import { uiContext } from '../context';
import styles from '../styles/Navbar.module.css';
import Sidebar from './Sidebar';

export default function Navbar() {
  const { toggleSidebar } = useContext(uiContext);
    
  return (
    <nav className={styles.navbar}>
      <div className={styles['icon_field']} >
        <MdUsb/>
      </div>

      <div className={styles['nav-links']} >
        <a href='/' >Equipo de computo</a>
        <a href='/normas-uso' >Normas de uso</a>
        <a href='/plano' >Plano</a>
      </div>

      <div className={styles.mobile} >
        <HiMenu onClick={toggleSidebar} />
      </div>
      <Sidebar/>  
    </nav>
  );
}