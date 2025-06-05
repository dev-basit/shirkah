import { Featured } from "@/components/featured/featured";
import { Companies } from "@/components/companies/companies";
import { Services } from "@/components/services/services";
import { AboutUs } from "@/components/about-us/about-us";
import { Clients } from "@/components/clients/clients";
import { ContactUs } from "@/components/contact-us/contact-us";

export default function About_Us() {
  return (
    <>
      <Featured />
      <Companies />
      <Services />
      <AboutUs />
      <Clients />
      <ContactUs />
    </>
  );
}
