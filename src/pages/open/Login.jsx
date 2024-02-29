import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center gap-8 p-20">
        <div className="flex flex-col">
          <label>Email / Userame</label>
          <input
            {...register("email_username", {
              required: "email or userName can't be empty",
            })}
            type="text"
            className="border-black-500 w-[200px] rounded-md border-2 p-2 text-sm"
            placeholder="Enter Email"
          />
          {errors.email_username && (
            <span className="text-sm text-red-500">
              {errors.email_username.message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must contain atleast 8 characters",
              },
            })}
            type="password"
            className="border-black-500 w-[200px] rounded-md border-2 p-2 text-sm"
            placeholder="Enter Password"
          />
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <button
          className={`sm rounded-md border-2 border-blue-800 px-2 py-1 text-sm text-white ${isSubmitting ? "bg-red-600" : "bg-green-600"}`}
          type="submit"
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default LoginPage;
