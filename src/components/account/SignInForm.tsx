import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { NOVELS_ACCOUNT } from "../../routes";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { signUp } from "../../store/user/userSlice";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const dispatch = useDispatch<AppDispatch>();

  async function onLogin(data: FieldValues) {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "custom",
        message: "Password did not match!",
      });
      setError("password", {
        type: "custom",
        message: "Password did not match!",
      });
      return;
    }

    try {
      await dispatch(
        signUp({
          email: data.email,
          password: data.password,
        })
      ).unwrap();
    } catch (e) {
      setError("email", {
        type: "custom",
        message: "Email already taken!",
      });
    }
  }

  return (
    <div className="w-10/12 p-10 mx-auto mt-24 shadow-xl md:w-7/12 lg:w-5/12 card card-body">
      <div className="justify-center">
        <h2 className="justify-center pb-5 card-title">Sign Up</h2>
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
              autoComplete="current-email"
              {...register("email", {
                required: "Email is required",
                validate: (value) => {
                  if (!value.includes("@")) {
                    return "Email must include @";
                  }
                },
              })}
            />
            {errors.email && (
              <div className="label">
                <span className="label-text-alt text-error">
                  {errors.email?.message && `${errors.email?.message}`}
                </span>
              </div>
            )}
          </label>
          <label className="w-full form-control">
            <input
              type="password"
              placeholder="Password"
              className="w-full input input-bordered"
              autoComplete="current-password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <div className="label">
                <span className="label-text-alt text-error">
                  {errors.password?.message && `${errors.password?.message}`}
                </span>
              </div>
            )}
          </label>
          <label className="w-full form-control">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered"
              autoComplete="confirm-password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
              })}
            />
            {errors.confirmPassword && (
              <div className="label">
                <span className="label-text-alt text-error">
                  {errors.confirmPassword?.message &&
                    `${errors.confirmPassword?.message}`}
                </span>
              </div>
            )}
          </label>
          <Link
            to={NOVELS_ACCOUNT}
            className="text-center underline text-primary"
          >
            Already have an account ?
          </Link>
          <button
            className={`btn btn-primary w-full ${
              isSubmitting ? "disabled" : ""
            }`}
          >
            {isSubmitting ? "Signing Up ..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
