import getVenues from "@/libs/getVenues";
import VenueCatalog from "@/components/VenueCatalog";
 
export default function VenuePage() {
  const venuesJson = getVenues();
 
  return (
    <main>
      <VenueCatalog venuesJson={venuesJson} />
    </main>
  );
}