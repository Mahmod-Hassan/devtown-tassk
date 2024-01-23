import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

// form schema validation using zod
const schema = z.object({
  name: z.string().min(3, { message: "Must be 3 characters" }),
  email: z.string().email(),
  password: z
    .string()
    .trim()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
type UserData = z.infer<typeof schema>;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserData>({ resolver: zodResolver(schema) });

  const handleRegisterForm = (data: UserData) => {
    console.log(data);
    reset();
  };
  return (
    <div className="max-w-[400px] mx-auto mt-5 shadow-md rounded p-5">
      <h2 className="text-2xl font-bold text-pink-500 mb-5">Please Register</h2>
      <form onSubmit={handleSubmit(handleRegisterForm)} className="space-y-4">
        <div className="grid gap-2">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className="border p-2"
            placeholder="John Smith"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            className="border p-2"
            placeholder="john@gmail.com"
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
          <button className="bg-pink-500 px-5 py-2 text-white rounded">
            signup
          </button>
          <span className="text-gray-500">
            already have an account?{" "}
            <Link
              to="/login"
              className="text-pink-500 hover:font-bold transition-all"
            >
              login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
