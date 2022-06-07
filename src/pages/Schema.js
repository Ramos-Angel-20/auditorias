import Hero from '../components/Hero';
import classes from '../styles/Schema.module.css';
import plano from '../assets/Red-ITT.png'

export default function Schema() {
  return (
    <div className={classes.schema} >
      <Hero />
      <main>
        <h1>Plano</h1>
        <img src={plano} alt="Plano de red" />

        <div className={classes.text}>
          <span>Topología en estrella</span> <br />
          Una red en estrella es una red en la cual las estaciones están conectadas directamente a un punto central y todas las comunicaciones se han de hacer necesariamente a través de éste.
          Dado su transmisión, una red en estrella activa tiene un nodo central activo que normalmente tiene los medios para prevenir problemas relacionados con el eco.
          Se utiliza sobre todo para redes locales. La mayoría de las redes de área local que tienen un enrutador (router), un conmutador (switch) o un concentrador (hub) siguen esta topología. El nodo central en estas sería el enrutador, el conmutador o el concentrador, por el que pasan todos los paquetes.
          <br />
          <br />
          <span>Ventajas:</span><br />
          <ul>
            <li>Tiene los medios para prevenir problemas.</li>
            <li>Si una PC se desconecta o se rompe el cable solo queda fuera de la red esa PC.</li>
            <li>Fácil de agregar, reconfigurar arquitectura PC.</li>
            <li>Fácil de prevenir daños o conflictos.</li>
            <li>Permite que todos los nodos se comuniquen entre sí de manera conveniente.</li>
            <li>El mantenimiento resulta más económico y fácil que la topología bus.</li>
          </ul>
          <br />
          <span>Desventajas:</span>
          <ul>
            <li>Si el nodo central falla, toda la red se desconecta.</li>
            <li>Es costosa, ya que requiere más cable que las topologías bus o anillo.</li>
            <li>El cable viaja por separado del hub a cada computadora.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}