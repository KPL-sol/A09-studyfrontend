import Card from "./Card";
import Link from "next/link";
 
type VenueItem = {
  _id: string;
  name: string;
  address: string;
  district: string;
  province: string;
  postalcode: string;
  tel: string;
  picture: string;
  dailyrate: number;
  __v: number;
  id: string;
};
 
type VenueJson = {
  success: boolean;
  count: number;
  pagination: object;
  data: VenueItem[];
};
 
type VenueCatalogProps = {
  venuesJson: Promise<VenueJson>;
};
 
export default async function VenueCatalog({ venuesJson }: VenueCatalogProps) {
  const venues = await venuesJson;
 
  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", padding: "24px" }}>
      {venues.data.map((venue) => (
        <Link key={venue.id} href={`/venue/${venue.id}`} style={{ textDecoration: "none" }}>
          <Card
            name={venue.name}
            image={venue.picture}
          />
        </Link>
      ))}
    </div>
  );
}
 