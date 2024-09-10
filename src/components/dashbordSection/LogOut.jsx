"use client";
import { logout } from "@/redux/auth/authSlice";
import { getuserData } from "@/redux/auth/userDataSlice";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function LogOut() {
  const dispatch = useDispatch();
  const { userData, loading, error } = useSelector((state) => state.userData);
  const router = useRouter();
  useEffect(() => {
    dispatch(getuserData());
  }, []);
  const handleLogout = () => {
    dispatch(logout());
    router.push(`/`);
  };
  console.log(userData);
  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  return (
    <div className="flex flex-col gap-6 items-center p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <p id="name" className="text-lg font-medium">
            {userData.name}
          </p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <p id="email" className="text-lg font-medium">
            {userData.email}
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 mt-4 rounded-xl bg-[#FF5400] flex items-center justify-center text-white text-lg font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default LogOut;
