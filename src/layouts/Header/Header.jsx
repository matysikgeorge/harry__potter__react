import { Input } from "../../ui/Input/Input";
import { Select } from "../../ui/Select/Select";
import { Container } from "../Container/Container";
import s from "./Header.module.scss";

export const Header = (cardFind) => {
  return (
    <>
      <header>
        <Container>
          <div classNames={s.header__wrapper}>
            <h1 className={s.header__title}>Harry Potter</h1>
            <p className={s.header__text__info}>
              View all characters from the Harry Potter universe
            </p>
            <div className={s.form__wrapper}>
              <Input cardFind={cardFind}></Input>
              <Select />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
