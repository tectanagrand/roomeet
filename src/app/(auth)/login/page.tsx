"use client";
import { PasswordWithEyes } from "@/common/PasswordWithEyes";
import { TextFieldComp } from "@/common/TextField";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { BaseSyntheticEvent } from "react";
import { signIn } from "next-auth/react";
// import { ToastContainer, toast, Zoom } from "react-toastify";
import toast, { Toaster } from "react-hot-toast";

interface LoginInput {
  username: string;
  password: string;
}

export default function LoginPage() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const loginUser = async (values: LoginInput) => {
    console.log(values);
    const res = await signIn("credentials", {
      username: values.username,
      password: values.password,
      callbackUrl: "/",
      redirect: false,
    });
    if (res?.status === 200) {
      toast.success("✅ Login Success");
    } else if (res?.status === 401) {
      toast.error("❌ Credentials not match");
    } else {
      toast.error("❌ Failed to login");
    }
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="p-5 m-2 ">
        <h2>ROOMEET</h2>
      </div>
      <form onSubmit={handleSubmit(loginUser)} className="w-full grow ">
        <div className="my-4">
          <TextFieldComp
            control={control}
            label="Email / Username"
            name="username"
            rules={{ required: "this field required" }}
          />
        </div>
        <div className="my-4">
          <PasswordWithEyes
            control={control}
            label="Password"
            name="password"
            rules={{ required: "this field required" }}
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="btn-primary">
            Login
          </Button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}
