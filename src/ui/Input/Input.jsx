import s from "./Input.module.scss";

export const Input = (cardFind) => {
  return (
    <>
      <div className={s.input}>
        <form className={s.input__form} action="#" method="get">
          <label className={s.input__label} for="search__name">
            Name
          </label>
          <input
          onChange={cardFind}
            className={s.input__name}
            type="text"
            name="name"
            id="search__name"
            placeholder="Type name"
          />
        </form>
      </div>
    </>
  );
};
