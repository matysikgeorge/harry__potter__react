import { Cards } from "../Cards/Cards";
import s from "./Main.module.scss";

export const Main = ({data}) => {
  console.log(data);
  
  return (
    <>
      <Cards 
      data = {data}/>
    </>
  );
};
