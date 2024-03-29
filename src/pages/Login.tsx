import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

// form schema validation using zod
const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .trim()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
type UserData = z.infer<typeof schema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserData>({ resolver: zodResolver(schema) });

  const handleLoginForm = (data: UserData) => {
    console.log(data);
    reset();
  };
  return (
    <div className="max-w-[400px] mx-auto mt-5 shadow-md rounded p-5">
      <h2 className="text-2xl font-bold text-violet-500 mb-5">Please Login</h2>
      <form onSubmit={handleSubmit(handleLoginForm)} className="space-y-4">
        <div className="grid gap-2">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            className="border p-2"
            placeholder="abc@gmail.com"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="grid gap-2">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            className="border p-2"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="flex justify-between items-center">
          <button className="bg-violet-500 px-5 py-2 text-white rounded">
            Login
          </button>
          <Link
            to="/register"
            className="text-violet-500 hover:font-bold transition-all"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
