import { useNavigate } from 'react-router-dom';

import classes from '../styles/ComputerCard.module.css';

import genericPc from '../assets/generic-pc.png'

export default function ComputerCard({ title, number }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/computadoras/${number}`);
  }

  return (
    <div className={classes['computer-card']}>
      <div className={classes['image-field']} >
        <img src={genericPc} alt='pc del laboratorio' className={classes.image} />
      </div>
      <p>{title} #{number}</p>
      <button className={classes['view-button']} onClick={handleClick}>Ver equipo</button>
    </div>
  );
}