import css from "./LoadMoreBtn.module.css";

type Props = {
  forClick: () => void;
};

export default function LoadMoreBtn({ forClick }: Props) {
  return (
    <button
      className={css.button}
      onClick={() => {
        forClick();
      }}
    >
      Load more
    </button>
  );
}
