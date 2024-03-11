import { useForm } from "react-hook-form";
import { loginUser, otpValidation } from "../../services/api/account";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { InputTextField } from "../../components/FormFields";
import Button from "../../components/ui/Button";
import getValidation from "../../utils/validations";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [screen, setScreen] = useState("login");
  const [email, setEmail] = useState(null)
  const { setUser, setAccessToken, setRefreshToken } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    if (screen == "login") {
      const payload = {
        email: data.email,
        password: data.password,
      };
      const res = await loginUser(payload);
      if (res?.success) {
        setScreen("otp");
        toast.success("OTP has been sent to your mail, Enter the OTP here", {
          duration: 6000,
        });
        setEmail(data.email)
      }
    } else {
      const payload = {
        email : email,
        otp : data.otp,
      };

      const res = await otpValidation(payload);

      if (res?.success) {
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        navigate("/");
        toast.success("Logged in successfully");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RenderScreen
        screen={screen}
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
      />
    </form>
  );
};

const RenderScreen = ({ screen, register, errors, isSubmitting }) => {
  switch (screen) {
    case "login":
      return (
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
      );

    default:
      return (
        <div className="flex flex-col items-center gap-8 p-20">
          <InputTextField
            type="number"
            required
            errors={errors?.otp}
            title="OTP"
            placeholder="Enter otp"
            validation={{
              ...register("otp", getValidation("otp")),
            }}
          />
          <Button type="submit" isSubmitting={isSubmitting}>
            Submit
          </Button>
        </div>
      );
  }
};

export default LoginPage;
