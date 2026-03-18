
import AboutLoading from "@/components/global/about/About.loading"
import ContactClient from "@/components/global/contact/Contact.client"
import { Suspense } from "react"

export const metadata = {
  title: "Contact",
};

function Contact() {
  return (
    <Suspense fallback={<AboutLoading/>}>
      <ContactClient/>
    </Suspense>
  )
}

export default Contact