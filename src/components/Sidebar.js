import classes from '../styles/Sidebar.module.css';
import { useContext } from 'react';
import { uiContext } from '../context';

export default function Sidebar() {
  const { sideIsOpen, toggleSidebar } = useContext(uiContext);

  const open = sideIsOpen ? classes.sidebar : classes.closed;

  return (
    <aside className={open}>
      <p>Centro de computo ITT</p>

      <div className={classes['links']}>
        <a href='/' onClick={toggleSidebar}  >Equipo de computo</a>
        <a href='/normas-uso' onClick={toggleSidebar} >Normas de uso</a>
        <a href='/plano' onClick={toggleSidebar}  >Plano</a>
      </div>
    </aside>
  );
}