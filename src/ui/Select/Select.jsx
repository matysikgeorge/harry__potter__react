import s from "./Select.module.scss";

export const Select = () => {
  return (
    <div className={s.select}>
      <label className={s.select__label}>School</label>
      <select className={s.select__house}>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Gryffindor">Gryffindor</option>
      </select>
    </div>
  );
};
