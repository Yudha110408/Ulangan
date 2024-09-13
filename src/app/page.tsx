import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Background1 from '@/app/components/background1';
import Background2 from '@/app/components/background2';
import Background3 from '@/app/components/background3';
import MockupSection from '@/app/components/mockupSection';
import InfoSection from '@/app/components/infoSection';
import InfoSection2 from '@/app/components/infoSection2';
import InfoSection3 from '@/app/components/infoSection3';
import ReviewCarousel from '@/app/components/RiviewCarousel';
import Footer from '@/app/components/Footer';

const Home = () => {
  return (
    <>
      <Background1>
        <Header />
        <Hero />
      </Background1>
      <Background2>
        <MockupSection backgroundMode="light" />
        <InfoSection backgroundMode="light" />
        <InfoSection2 backgroundMode="light" />
        <InfoSection3 backgroundMode="light" />
        <ReviewCarousel />
      </Background2>
      <Background3>
        <Footer />
      </Background3>
    </>
  );
};

export default Home;