"use client";
import { PasswordWithEyes } from "@/common/PasswordWithEyes";
import { TextFieldComp } from "@/common/TextField";
import { useForm } from "react-hook-form";
import { Button, CircularProgress } from "@mui/material";
import { BaseSyntheticEvent, useState } from "react";
import { signIn } from "next-auth/react";
// import { ToastContainer, toast, Zoom } from "react-toastify";
import toast, { Toaster } from "react-hot-toast";
import { useSWReg } from "@/lib/provider/SWRegProvider";
import { useRouter } from "next/navigation";

interface LoginInput {
  username: string;
  password: string;
}

const base64ToUint8Array = (base64: any) => {
  console.log(base64);
  const padding = "=".repeat((4 - (base64.length % 4)) % 4);
  const b64 = (base64 + padding).replace(/-/g, "+").replace(/_/g, "/");
  console.log(b64);

  const rawData = window.atob(b64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const SW = useSWReg();
  const SWReg = SW?.SWReg;
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const loginUser = async (values: LoginInput) => {
    setLoading(true);
    const sub = await SWReg?.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: base64ToUint8Array(process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY),
    });
    console.log(sub);
    const res = await signIn("credentials", {
      username: values.username,
      password: values.password,
      subscription: JSON.stringify({ sub }),
      callbackUrl: "/",
      redirect: false,
    });
    if (res?.status === 200) {
      router.replace("/dashboard");
    } else if (res?.status === 401) {
      toast.error("❌ Credentials not match");
    } else {
      toast.error("❌ Failed to login");
    }
    setLoading(false);
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
          {loading ? (
            <CircularProgress />
          ) : (
            <Button type="submit" className="btn-primary">
              Login
            </Button>
          )}
        </div>
      </form>
      <Toaster />
    </div>
  );
}
