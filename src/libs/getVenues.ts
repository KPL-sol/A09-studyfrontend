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
 
export default async function getVenues(): Promise<VenueJson> {
  const response = await fetch(
    "https://a08-venue-explorer-backend.vercel.app/api/v1/venues"
  );
  return response.json();
}