import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Link from "next/link";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "#eeeeee",
        display: "flex",
        justifyContent: "flex-end", 
        alignItems: "center",
        gap: "20px",
        paddingRight: "30px",
        paddingLeft: "30px", 
      }}
    >
      {session ? (
        <Link 
          href="/api/auth/signout" 
          style={{ textDecoration: "underline", color: "#333", marginRight: "auto" }}
        >
          Sign-Out
        </Link>
      ) : (
        <Link 
          href="/api/auth/signin" 
          style={{ textDecoration: "underline", color: "#333", marginRight: "auto" }}
        >
          Sign-In
        </Link>
      )}

      <TopMenuItem title="Booking" pageRef="/booking" />
      <img src="/img/logo.png" height="40" alt="logo" />
    </div>
  );
}