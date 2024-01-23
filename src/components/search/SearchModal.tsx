import { useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";

type Data = {
  id: string;
  name: string;
};

interface Props {
  authors: Data[];
  origins: string[];
  genres: string[];
  onSearch: (author: string, origin: string, genre: string) => void;
}

export function SearchModal({ authors, origins, genres, onSearch }: Props) {
  const { register, handleSubmit, reset } = useForm();
  const form = useRef<HTMLButtonElement>(null);

  function handleSearch(data: FieldValues): void {
    console.log(data);
    onSearch(data.author, data.origin, data.genre);
  }

  function submitForm(): void {
    form.current?.click();
  }

  return (
    <>
      <div className="w-11/12 mx-auto mb-5">
        <label htmlFor="my_modal_6" className="btn w-full btn-primary btn-md">
          Filter
        </label>
      </div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Filter</h3>
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
              {/* A Button To Submit Form programatically, Because useForm disable it */}
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
