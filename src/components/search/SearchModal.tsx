import { useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNovelFilterParams } from "../../hooks/useNovelFilterParams";

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
  const [authorParams, genreParams, originParams] = useNovelFilterParams();
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
      <div className="w-11/12 mx-auto mb-5">
        <label htmlFor="my_modal_6" className="w-full btn btn-primary btn-md">
          Filter
        </label>
      </div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold text-center">Filter</h3>
          <form>
            <label className="w-full form-control">
              <div className="label">
                <span className="label-text">Author</span>
              </div>
              <select
                className="select select-bordered"
                {...register("author")}
              >
                <option value="all" selected={authorParams === "all"}>
                  All
                </option>
                {authors?.map((x) => (
                  <option
                    value={x.id}
                    key={x.id}
                    selected={Number(authorParams) === x.id}
                  >
                    {x.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="w-full form-control">
              <div className="label">
                <span className="label-text">Origin</span>
              </div>
              <select
                className="select select-bordered"
                {...register("origin")}
              >
                <option value="all" selected={originParams === "all"}>
                  All
                </option>
                {origins?.map((x) => (
                  <option value={x} key={x} selected={originParams === x}>
                    {x}
                  </option>
                ))}
              </select>
            </label>
            <label className="w-full form-control">
              <div className="label">
                <span className="label-text">Genre</span>
              </div>
              <select className="select select-bordered" {...register("genre")}>
                <option value="all" selected={genreParams === "all"}>
                  All
                </option>
                {genres?.map((x) => (
                  <option value={x} key={x} selected={genreParams === x}>
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
              className="w-40 btn btn-primary"
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
