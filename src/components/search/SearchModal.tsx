import { useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface Props {
  authors: {
    id: number;
    name: string;
  }[];
  origins: string[];
  genres: string[];
  onSearch: (author: string, origin: string, genre: string) => void;
}

export function SearchModal({ authors, origins, genres, onSearch }: Props) {
  const { register, handleSubmit, reset } = useForm();
  const form = useRef<HTMLButtonElement>(null);

  function handleSearch(data: FieldValues): void {
    onSearch(data.author, data.origin, data.genre);
  }

  function submitForm(): void {
    form.current?.click();
  }

  return (
    <>
      <label
        htmlFor="my_modal_6"
        className="btn btn-circle btn-primary btn-lg fixed bottom-20 right-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </label>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <form>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Author</span>
              </div>
              <select
                className="select select-bordered"
                {...register("author")}
              >
                <option value="all">All</option>
                {authors?.map((x) => (
                  <option value={x.id} key={x.id}>
                    {x.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Origin</span>
              </div>
              <select
                className="select select-bordered"
                {...register("origin")}
              >
                <option value="all">All</option>
                {origins?.map((x) => (
                  <option value={x} key={x}>
                    {x}
                  </option>
                ))}
              </select>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Genre</span>
              </div>
              <select className="select select-bordered" {...register("genre")}>
                <option value="all">All</option>
                {genres?.map((x) => (
                  <option value={x} key={x}>
                    {x}
                  </option>
                ))}
              </select>
            </label>
          </form>
          <div className="modal-action">
            <form method="dialog" onSubmit={handleSubmit(handleSearch)}>
              {/* if there is a button in form, it will close the modal */}
              <button className="hidden" ref={form}></button>
              <button className="btn btn-error" onClick={() => reset()}>
                Reset
              </button>
            </form>
            <label
              className="btn btn-primary w-40"
              htmlFor="my_modal_6"
              onClick={submitForm}
            >
              Search
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
