import { useForm } from "react-hook-form";
import { loginUser } from "../../services/api/account";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser, setAccessToken, setRefreshToken } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    const res = await loginUser(payload);
    if (res?.success) {
      setUser(res.data.user);
      setAccessToken(res.data.accessToken);
      setRefreshToken(res.data.refreshToken);
      navigate("/");
      toast.success("Logged in successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center gap-8 p-20">
        <div className="flex flex-col">
          <label>Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              validate: (value) => {
                if (!value.includes("@")) {
                  return "Email must contain @";
                }
                return true; 
              },
            })}
            type="text"
            className="border-black-500 w-[200px] rounded-md border-2 p-2 text-sm"
            placeholder="Enter Email"
          />
          {errors?.email && (
            <span className="text-sm text-red-500">
              {errors.email?.message}
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
            type="text"
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
          className={`sm rounded-md border-2 border-blue-800 px-2 py-1 text-sm text-white ${
            isSubmitting ? "bg-red-600" : "bg-green-600"
          }`}
          type="submit"
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default LoginPage;
