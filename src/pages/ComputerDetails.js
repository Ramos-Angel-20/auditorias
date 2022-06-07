import classes from '../styles/ComputerDetails.module.css';
import pc from '../assets/generic-pc.png';

export default function ComputerDetails() {
  return (
    <div className={classes.details}>
      <img src={pc} alt="PC"/>

      <div className={classes.text}>
        <p>Computadora Lanix Mini Torre 6020 v5</p>
        <p>Especificaciones:</p>

        <ul>
          <li>Memoria RAM: 8GB</li>
          <li>Tipo de memoria interna: DDR4-SDRAM</li>
          <li>Almacenamiento: 1000 GB</li>
          <li>Modelo del procesador: i3-10105</li>
          <li>Tarjeta gráfica: N/A</li>
        </ul>
      </div>
    </div>
  );
}