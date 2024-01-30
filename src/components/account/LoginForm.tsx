import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { NOVELS_ACCOUNT_SIGNIN } from "../../routes";

interface Props {
  onLogin: (data: FieldValues) => void;
}

const LoginForm = ({ onLogin }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FieldValues>();

  return (
    <div className="w-10/12 p-10 mx-auto mt-24 shadow-xl md:w-7/12 lg:w-5/12 card card-body">
      <div className="justify-center">
        <h2 className="justify-center pb-5 card-title">Login</h2>
        <form
          action=""
          onSubmit={handleSubmit(onLogin)}
          className="flex flex-col gap-5"
        >
          <label className="w-full form-control ">
            <input
              type="text"
              placeholder="Email"
              className="w-full input input-bordered"
              required
              autoComplete="current-email"
              {...register("email")}
            />
          </label>
          <label className="w-full form-control">
            <input
              type="password"
              placeholder="Password"
              className="w-full input input-bordered"
              required
              autoComplete="current-password"
              {...register("password")}
            />
          </label>
          <Link
            to={NOVELS_ACCOUNT_SIGNIN}
            className="text-center underline text-primary"
          >
            Did not have an account ?
          </Link>
          <button
            className={`btn btn-primary w-full ${
              isSubmitting ? "disabled" : ""
            }`}
          >
            {isSubmitting ? "Logging in ..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
