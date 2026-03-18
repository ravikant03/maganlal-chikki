import AboutServer from "@/components/global/about/About.server"
import AboutLoading from "@/components/global/about/About.loading"
import { Suspense } from "react"

export const metadata = {
  title: "About",
};

function About() {
  return (
    <div>
      <Suspense fallback={<AboutLoading/>}>
        <AboutServer/>
      </Suspense>
    </div>
  )
}

export default About