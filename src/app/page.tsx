import React from "react";
import { Metadata } from 'next'
import { redirect } from "next/navigation";
import { validateRequest } from "@/lib/auth";

export const metadata: Metadata = {
  title: 'ECCD Kids Scheduler',
  description: 'Sheduling assistant for ECCD Kids',
}

export default async function Home() {
  const { user } = await validateRequest();
	if (!user) {
		return redirect("/login");
	}

  return (
    <div className="h-screen w-full dark:bg-slate-950 bg-white  dark:bg-grid-white/[0.2] bg-grid-slate-950/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <h1>Hi, {user.username}</h1>
    </div>
  );
}
