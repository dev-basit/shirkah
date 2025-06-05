import { Featured } from "@/components/aboutus/featured/featured";
import { Companies } from "@/components/aboutus/companies/companies";
import { Services } from "@/components/aboutus/services/services";
import { Mission } from "@/components/aboutus/mission/mission";
import { AboutUsFeatured } from "@/components/aboutus/aboutus-featured/aboutus-featured";
import { ContactUs } from "@/components/aboutus/contact-us/contact-us";
import { Vision } from "@/components/aboutus/vision/vision";

export default function About_Us() {
  return (
    <>
      <AboutUsFeatured />
      <Mission />
      <Vision />
      {/* <Companies />
      <Services />
      <ContactUs /> */}
    </>
  );
}
