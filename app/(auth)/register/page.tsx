import RegisterForm from "@/components/auth/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function Register() {
  const session = await getServerSession();
  if (session) redirect("/");
  return (
    <div>
      <RegisterForm />
    </div>
  );
}
