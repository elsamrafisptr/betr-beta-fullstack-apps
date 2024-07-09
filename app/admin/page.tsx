'use client'
import React, { useEffect } from "react";
import { useAuthContext } from "@/lib/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AdminPage: React.FC = () => {
    const { user } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (user == null) router.push("/");
    }, [user, router]);

    return <div className="h-screen w-full flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl">Welcome to Admin Dashboard</h1>
        <h2>Only logged in users can view this page</h2>
        <Link href={"/"} className="underline mt-6">Back to Home</Link>
    </div>
};

export default AdminPage;
