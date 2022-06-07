import Hero from "../components/Hero";
import ComputerCard from "../components/ComputerCard";
import classes from '../styles/Computers.module.css';


const data = [
  {
    id: 1,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 2,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 3,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 4,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 5,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 6,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 7,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 8,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 9,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 10,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 11,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 12,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 13,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 14,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 15,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 16,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 17,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 18,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 19,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 20,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 21,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 22,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 23,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 24,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 25,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 26,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 27,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 28,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 29,
    title: 'Computadora de escritorio Lanix'
  },
  {
    id: 30,
    title: 'Computadora de escritorio Lanix'
  },

];

export default function Computers() {
  return (
    <div className={classes.computers} >
      <Hero/>
      <h1>Equipo de computo</h1>
      <main className={classes.grid} >
        {
          data.map(computer => (
            <ComputerCard key={computer.id} number={computer.id} title={computer.title} />
          ))
        }
      </main>
    </div>
  );
}