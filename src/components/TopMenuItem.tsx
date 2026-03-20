import Link from "next/link";

export default function TopMenuItem({ title, pageRef }: { title: string, pageRef: string }) {
  return (
    <Link href={pageRef}>
      <div
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          color: "black",
          fontWeight: "bold"
        }}
      >
        {title}
      </div>
    </Link>
  );
}