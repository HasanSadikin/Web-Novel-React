import { FieldValues, useForm } from "react-hook-form";

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
    <div className="card shadow-xl">
      <div className="card-body justify-center h-screen">
        <h2 className="card-title justify-center pb-5">Login</h2>
        <form
          action=""
          onSubmit={handleSubmit(onLogin)}
          className="flex flex-col gap-5"
        >
          <label className="form-control w-full ">
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full"
              required
              autoComplete="current-email"
              {...register("email")}
            />
          </label>
          <label className="form-control w-full">
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
              autoComplete="current-password"
              {...register("password")}
            />
          </label>
          <button
            className={`btn btn-primary w-full ${
              isSubmitting ? "disabled" : ""
            }`}
          >
            {isSubmitting ? "Logging in ..." : "Login"}
          </button>
          <button
            type="button"
            className={`btn-disabled btn btn-primary w-full ${
              isSubmitting ? "disabled" : ""
            }`}
          >
            {isSubmitting ? "Logging in ..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
