import * as React from "react";
import ContactForm from "@/components/forms/contact-page-form";
import Header from "@/components/Header";


export default function Services() {
  return (
    <>
      <Header num={0} url={"/assets/images/contactUs-hero-bg.png"}/>
      <ContactForm />
      {/* <iframe
       src="https://www.google.com/maps/dir//Best+IT+Solutions+Company+in+Dubai,+Capital+Golden+Tower+-+Al+Khaleej+Al+Tejari+2+St+-+Business+Bay+-+Dubai+-+United+Arab+Emirates/@25.1998536,55.261058,15.8z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e5f69b08b3a2385:0xc9a9ff4dae7539e1!2m2!1d55.2738369!2d25.1780034?entry=ttu"
        width={"100%"}
        height={393}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> */}
    </>
  );
}
