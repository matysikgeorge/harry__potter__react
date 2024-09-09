import { Input } from "../../ui/Input/Input";
import { Select } from "../../ui/Select/Select";
import { Container } from "../Container/Container";
import s from "./Header.module.scss";

export const Header = ({ cardFind }) => {
  return (
    <>
      <header className={s.header}>
        <Container>
          <h1 className={s.header__title}>Harry Potter</h1>
          <p className={s.header__subtitle}>
            View all characters from the Harry Potter universe
          </p>
          <div className={s.header__wrapper}>
            <Input cardFind={cardFind}></Input>
            <Select />
          </div>
        </Container>
      </header>
    </>
  );
};
