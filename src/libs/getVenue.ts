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

type VenueItemJson = {
  success: boolean;
  data: VenueItem;
};

export default async function getVenue(vid: string): Promise<VenueItemJson> {
  const response = await fetch(
    `https://a08-venue-explorer-backend.vercel.app/api/v1/venues/${vid}`
  );
  return response.json();
}