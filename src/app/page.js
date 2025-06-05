import { Featured } from "@/components/featured/featured";
import { Companies } from "@/components/companies/companies";
import { Services } from "@/components/services/services";
import { AboutUs } from "@/components/about-us/about-us";
import { Clients } from "@/components/clients/clients";

export default function Home() {
  return (
    <>
      <Featured />
      <Companies />
      <Services />
      <AboutUs />
      <Clients />
    </>
  );
}
