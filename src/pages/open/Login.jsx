import { useForm } from "react-hook-form";
import { loginUser } from "../../services/api/account";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { InputTextField } from "../../components/FormFields";
import Button from "../../components/ui/Button";
import getValidation from "../../utils/validations";

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
        <InputTextField
          type="text"
          required
          errors={errors?.email}
          title="Email"
          placeholder="Enter mail"
          validation={{
            ...register("email", getValidation("email")),
          }}
        />
        <InputTextField
          type="password"
          required
          errors={errors?.password}
          title="Password"
          placeholder="Enter Password"
          validation={{ ...register("password", getValidation("pass")) }}
        />
        <Button type="submit" isSubmitting={isSubmitting}>
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginPage;
