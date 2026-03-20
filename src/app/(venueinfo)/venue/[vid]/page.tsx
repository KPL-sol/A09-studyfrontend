import Image from "next/image";
import getVenue from "@/libs/getVenue";

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>;
}) {
  const { vid } = await params;
  const venueData = await getVenue(vid);  // ← แก้ตรงนี้
  const venue = venueData.data;           // ← เพิ่มตรงนี้

  return (
    <main style={{ padding: "24px" }}>
      <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
        <div
          style={{
            position: "relative",
            width: "300px",
            height: "200px",
            borderRadius: "12px",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <Image
            src={venue.picture}
            alt={venue.name}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
  <h2 style={{ margin: "0 0 8px 0" }}>{venue.name}</h2>
  <p style={{ margin: "4px 0", color: "#555" }}>
    {venue.address} {venue.district} {venue.province}
  </p>
  <p style={{ margin: "4px 0", color: "#555" }}>
    รหัสไปรษณีย์: {venue.postalcode}
  </p>
  <p style={{ margin: "4px 0", color: "#555" }}>
    {venue.tel}
  </p>
  <p style={{ margin: "4px 0", color: "#555" }}>
    อัตราค่าเช่า: {venue.dailyrate.toLocaleString()} บาท/วัน
  </p>
</div>
      </div>
    </main>
  );
}