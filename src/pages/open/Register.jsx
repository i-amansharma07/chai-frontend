import { useForm } from "react-hook-form";

const Register = () => {
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
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <label>Username</label>
            <input
              {...register("username", {
                required: "Username is required",
                validate: (value) => {
                  if (value.includes(" ")) {
                    return "Username does't contain space";
                  }
                  return true;
                },
              })}
              type="text"
              className="border-black-500 w-[200px] rounded-md border-2 p-2 text-sm"
              placeholder="Enter UserName"
            />
            {errors.username && (
              <span className="text-sm text-red-500">
                {errors.username.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label>Full Name</label>
            <input
              {...register("full_name", {
                required: "Full Name is required",
              })}
              type="text"
              className="border-black-500 w-[200px] rounded-md border-2 p-2 text-sm"
              placeholder="Enter Password"
            />
            {errors.full_name && (
              <span className="text-sm text-red-500">
                {errors.full_name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                validate: (value) => {
                  //custom validation
                  if (!value.includes("@")) {
                    return "Email must contain @"; // returning message is like returning error
                  }
                  return true; // this means no error found
                },
              })}
              type="text"
              className="border-black-500 w-[200px] rounded-md border-2 p-2 text-sm"
              placeholder="Enter Email"
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 8,
                  message: "Password must be greater than 8 characters",
                },
              })}
              type="password"
              className="border-black-500 w-[200px] rounded-md border-2 p-2 text-sm"
              placeholder="Enter Password"
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password?.message}
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
