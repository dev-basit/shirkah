import { Mission } from "@/components/aboutus/mission/mission";
import { AboutUsFeatured } from "@/components/aboutus/aboutus-featured/aboutus-featured";
import { Vision } from "@/components/aboutus/vision/vision";
import { Clients } from "@/components/home/clients/clients";

export default function About_Us() {
  return (
    <>
      <AboutUsFeatured />
      <Mission />
      <Vision />
      <Clients />
    </>
  );
}
