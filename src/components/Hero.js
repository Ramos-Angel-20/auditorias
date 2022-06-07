import classes from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <div className={classes.hero}>
      <p>Centro de computo del <span>Instituto Tecnologico de Tijuana (ITT)</span>.</p>
      <br></br>
      <p>
        El Tecnológico Nacional de México campus Tijuana, 
        más comúnmente llamado Instituto Tecnológico de Tijuana, 
        es una institución de educación superior localizado en 
        Calz del Tecnológico s/n, Tomas Aquino, 22414 Tijuana, B.C.
      </p>
    </div>
  );
}