import HeroSection from '../sections/HeroSection';
import CategoryGrid from '../components/CategoryGrid';
import Stats from '../components/Stats';
import FeaturedEquipment from '../sections/FeaturedEquipment';
import HowItWorksSection from '../sections/HowItWorksSection';
import FAQSection from '../sections/FAQSection';
import type { Equipment } from '../data/equipment';

interface HomePageProps {
  onAdd: (eq: Equipment) => void;
  isInCart: (id: string) => boolean;
}

export default function HomePage({ onAdd, isInCart }: HomePageProps) {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <Stats />
      <FeaturedEquipment onAdd={onAdd} isInCart={isInCart} />
      <HowItWorksSection />
      <FAQSection />
    </>
  );
}
