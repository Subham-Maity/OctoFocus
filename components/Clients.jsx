"use client";

export const LogoutButton = () => {
  const logoutHandler = () => {
    alert("Logged out");
  };
  return <button onClick={logoutHandler}>Logout</button>;
};
