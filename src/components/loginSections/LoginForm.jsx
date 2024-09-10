"use client";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { LoginExcute } from "@/redux/auth/authSlice";
import { useRouter } from "next/navigation";
import CustomTextField from "../customs/CustomTextField";
import CustomPassWordField from "../customs/CustomPassWordField";
import FormLogo from "./FormLogo";
import FromHeader from "./FromHeader";
import { RiAccountCircleLine } from "react-icons/ri";

function LoginForm() {
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const {
    handleSubmit,
    formState: { errors, isValid },
  } = methods;
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const userData = useSelector((state) => state.authLogin);

  const onSubmit = async (dataForm) => {
    setIsLoading(true);
    try {
      await dispatch(LoginExcute({ dataForm })).unwrap();
      router.push(`/dashboard/profile`);
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-4 py-6 bg-[#FFFFFF] relative z-20 w-[90%] md:w-[40%] md:px-8 md:py-7 rounded-2xl">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3.5 md:gap-5"
        >
          <div className="flex justify-center mb-6">
            <FormLogo />
          </div>
          <FromHeader />
          <div className="grid grid-cols-1 gap-3">
            {/* Email */}
            <CustomTextField
              name="email"
              label="Email"
              type="email"
              required
              IconInput={RiAccountCircleLine}
              erroStatus={errors.email ? true : false}
              textErroe={errors.email?.message}
              defaultValue=""
            />
            {/* Password */}
            <CustomPassWordField
              name="password"
              errorSignIn={errors.password?.message}
            />
            {/* Button */}
            <button
              type="submit"
              disabled={!isValid || isLoading}
              className={`w-full py-4 rounded-xl flex items-center justify-center ${
                !isValid || isLoading ? "bg-gray-400" : "bg-[#FF5400]"
              } text-white text-xl`}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default LoginForm;
