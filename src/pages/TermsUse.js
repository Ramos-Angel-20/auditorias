import classes from '../styles/Terms.module.css';
import Hero from '../components/Hero';
import normas from '../assets/normasUso.png';

export default function TermsUse() {
  return (
    <div className={classes.termsUse} >
      <Hero/>
      <h1>Normas de uso</h1>
      <main>
      <img src={normas} alt="Plano de red" />

        <div className={classes.text} >
          <ul>
            <li>No introducir alimentos ni bebidas dentro del área de cómputo.</li>
            <li>Cuidar y mantener limpios los equipos de cómputo.</li>
            <li>Está prohibido golpear o maltratar el equipo o cualquiera de sus componentes.</li>
            <li>Mantener el equipo alejado de áreas húmedas.</li>
            <li>Prohibido fumar dentro del área de cómputo.</li>
            <li>Mantener el equipo en un lugar fresco, seco.</li>
            <li>Prohibido instalar algún tipo de software sin la debida autorización.</li>
            <li>Asegurarse de apagar el equipo de cómputo al terminar.</li>
            <li>Tirar la basura en su lugar.</li>
            <li>No cubrir el sistema de ventilación y disipación.</li>
            <li>No apagar el equipo directamente del botón de encendido o tirando del cable.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}