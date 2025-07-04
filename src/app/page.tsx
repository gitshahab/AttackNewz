import Accordion from "@/components/Accordian";
import AnalyticsBanner from "@/components/AnalyticsBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MapGlobe from "@/components/MapGlobe";


export default function Home() {
  return (
    <>
    <Header />
    <div className="mt-10 p-4 sm:p-10 max-w-7xl mx-auto">
      <AnalyticsBanner />
    </div>
    <MapGlobe />
    <div className="max-w-7xl mx-auto">
      <h3 className="text-2xl font-bold font-sans px-2  mb-8">
        Frequently Asked Questions
      </h3>
      <Accordion />
    </div>
    <Footer />
    </>
  );
}
