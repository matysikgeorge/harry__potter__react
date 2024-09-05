import { Card } from "../../components/Card/Card";
import { Container } from "../Container/Container";
import s from "./Cards.module.scss";

export const Cards = ({ data }) => {
  console.log(data);
  
  return (
    <>
      <section>
        <Container>
          <div className={s.cards__wrapper}>
            {data.map((el) => (
              <Card
                key={el.id}
                img={el.image}
                name={el.name}
                actor={el.actor}
                gender={el.gender}
                house={el.house}
                core={el.wand.core}
                alive={el.alive}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

// data.map =
// actor = actor
// el.wand.core
