import s from "./Card.module.scss";

// верстку доделать карточки, и поиск по людям,
export const Card = ({ img, name, actor, gender, house, core, alive }) => {   
       
  // console.log(props); // props это объект
  return (
    <>
      <article className={s.card}>
        <img className={s.card__img} src={img} />
        <div className={s.card__text__block}>
          <h2 className={s.card__hero}> {name}</h2>
          <p className={s.card__text}>Actor: {actor}</p>
          <p className={s.card__text}>Gender: {gender}</p>
          <p className={s.card__text}>House: {house}</p>
          <p className={s.card__text}>Wand core: {core ? 'core' : 'нет палочки :('}</p>
          <p className={s.card__text}>Alive: {alive ? 'А когда не живой?' : 'мертвый' }</p>
        </div>
      </article>
    </>
  );
};
