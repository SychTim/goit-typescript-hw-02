import { CiSearch } from "react-icons/ci";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

type Props = {
  onSubmit: (searchText: string) => void;
};

export default function SearchBar({ onSubmit }: Props) {
  const notify = () => toast.error("Search request can not be empty!");

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    const form = evt.target as HTMLFormElement;
    const searchText = (form.elements.namedItem('textField') as HTMLInputElement).value;

    if (searchText === "") {
      notify();
      return;
    }

    onSubmit(searchText);
  }

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <button type="submit" className={css.button}>
          <CiSearch size={20} color="black" />
        </button>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          name="textField"
          placeholder="Search images and photos"
        />
        <Toaster
          position="bottom-center"
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
          }}
        />
      </form>
    </header>
  );
}