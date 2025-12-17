import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import Industries from '@/components/sections/Industries';
import BusinessGrowth from '@/components/sections/BusinessGrowth';
import DriverSection from '@/components/sections/DriverSection';
import HowItWorks from '@/components/sections/HowItWorks';
import Footer from '@/components/Footer';
import DownloadApp from '@/components/sections/DownloadApp';

// ... import other sections

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Industries />
      <BusinessGrowth/>
      <DriverSection />
      <HowItWorks />
      <DownloadApp/>
      <Footer/>


      
    </>
  )
}