import { Hero } from '@/components/sections/Hero';
import { HomeBatteryInfo } from '@/components/sections/HomeBatteryInfo';
// import { OurBatteryFeatures } from '@/components/sections/OurBatteryFeatures';
import { FAQ } from '@/components/sections/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeBatteryInfo />
      {/* <OurBatteryFeatures /> */}
      <FAQ />
    </>
  );
}
