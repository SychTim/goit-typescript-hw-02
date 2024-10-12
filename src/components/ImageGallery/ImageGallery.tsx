import ImageCard from "../ImageCard/ImageCard";
import { Card } from "../../types";
import css from "./ImageGallery.module.css";

type Props = {
  collection: Card[];
  handleClickCard: (card: Card) => void;
};

export default function ImageGallery({ collection, handleClickCard }: Props) {
  return (
    <ul className={css.list}>
      {collection.map((card) => {
        return (
          <li
            key={card.id}
            className={css.card}
            onClick={() => {
              handleClickCard(card);
            }}
          >
            <ImageCard card={card} />
          </li>
        );
      })}
    </ul>
  );
}
