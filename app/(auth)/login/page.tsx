import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import LoginForm from "@/components/auth/LoginForm";

export default async function Login() {
  const session = await getServerSession();
  if (session) redirect("/");
  return (
    <div>
      <LoginForm />
    </div>
  );
}
