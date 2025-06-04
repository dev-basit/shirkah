import { Featured } from "@/components/featured/featured";
import { Companies } from "@/components/companies/companies";
import { Services } from "@/components/services/services";

export default function Home() {
  return (
    <>
      <Featured />
      <Companies />
      <Services />
    </>
  );
}
