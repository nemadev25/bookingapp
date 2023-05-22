import { useState } from "react";
import "./register.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const username_regx =
    /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/;
  const email_regx =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const password_regx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleRegister = async (data) => {
    console.log(data);

    try {
      const res = await axios.post("/auth/register", data);
      if (res.status === 201) {
        reset();
        navigate("/auth/login");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit(handleRegister)}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="username"
          id="username"
          className="rInput"
          {...register("username", { required: true, pattern: username_regx })}
        />
        {errors.username && <small>Invalid Username</small>}
        <input
          type="text"
          placeholder="email"
          id="email"
          className="rInput"
          {...register("email", { required: true, pattern: email_regx })}
        />
        {errors.email && <small>Invalid Email</small>}
        <input
          type="password"
          placeholder="password"
          id="password"
          className="rInput"
          {...register("password", { required: true, pattern: password_regx })}
        />
        {errors.password && <small>Invalid Password</small>}

        <button type="submit" className="rButton">
          Register
        </button>
        {/* {error && <span>{error.message}</span>} */}
      </form>
    </div>
  );
};

export default Register;
