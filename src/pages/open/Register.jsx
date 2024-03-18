import { useForm } from "react-hook-form";
import { useState } from "react";
import { registerUser } from "../../services/api/account";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { InputTextField, ImageInputField } from "../../components/FormFields";
import Button from "../../components/ui/Button";
import getValidation from "../../utils/validations";

const Register = () => {
  const navigate = useNavigate();
  const [avatarImage, setAvatarImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data, e) => {
    const formData = new FormData();

    formData.append("userName", data.userName);
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("avatar", data.avatar[0]);
    formData.append("coverImage", data.coverImage[0] ?? null);

    const res = await registerUser(formData);
    if (res?.success) {
      navigate("/login");
      toast.success("User Registered Successfully, please Login");
    } else {
      toast.error("Error while creating user");
    }
  };

  const handleAvatarImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setAvatarImage(file);
    } else {
      setAvatarImage(null);
    }
  };
  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setCoverImage(file);
    } else {
      setCoverImage(null);
    }
  };



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center gap-8 p-20">
        <div className="grid grid-cols-2 gap-10">
          <InputTextField
            type="text"
            required
            errors={errors?.userName}
            title="UserName"
            placeholder="Enter UserName"
            validation={{
              ...register("userName", getValidation("userName")),
            }}
          />

          <InputTextField
            type="text"
            required
            errors={errors?.fullName}
            title="Full Name"
            placeholder="Enter Full Name"
            validation={{
              ...register("fullName", getValidation("fullName")),
            }}
          />

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

          <div className="flex flex-col">
            <label>Avatar Image</label>
            <input
              {...register("avatar", {
                required: "Avatar Image is required",
              })}
              type="file"
              accept="image/*"
              onChange={handleAvatarImageChange}
            />
            {errors?.avatar && (
              <span className="text-sm text-red-500">
                {errors.avatar?.message}
              </span>
            )}
            {avatarImage && (
              <div>
                <h2>Preview:</h2>
                <img
                  src={URL.createObjectURL(avatarImage)}
                  alt="Selected"
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
              </div>
            )}
          </div>


          {/* <ImageInputField 
          title="Avatar Image"
          required
          errors={errors?.avatar}
          handleChange={handleAvatarImageChange}
          preview={avatarImage}
          validation={{...register("avatar",getValidation("avatar"))}}
          /> */}

          <div className="flex flex-col">
            <label>Cover Image</label>
            <input
              {...register("coverImage")}
              type="file"
              accept="image/*"
              onChange={handleCoverImageChange}
            />
            {coverImage && (
              <div>
                <h2>Preview:</h2>
                <img
                  src={URL.createObjectURL(coverImage)}
                  alt="Selected"
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
              </div>
            )}
          </div>
        </div>
        <button
          className={`sm rounded-md border-2 w-[200px] h-[50px] border-blue-800 px-2 py-1 text-sm text-white ${
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
export default Register;

/*

OLDER WAY TO WRITE FORMS IN REACT

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-8 p-20">
        <div className="flex flex-col">
          <label>Email / Userame</label>
          <input
            className="border-black-500 w-[200px] rounded-md border-2 p-2 text-sm"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Password</label>
          <input
            className="border-black-500 w-[200px] rounded-md border-2 p-2 text-sm"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <button
          className="sm rounded-md border-2 border-blue-800 px-2 py-1 text-sm"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
  };
  */
