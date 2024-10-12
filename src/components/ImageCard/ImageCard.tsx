import css from "./ImageCard.module.css";
import { Card } from "../../types";

type Props = {
  card: Card;
};

export default function ImageCard({ card }: Props) {
  return (
    <div className={css.card}>
      <img src={card.urls.small} alt="" width="350" />
    </div>
  );
}
