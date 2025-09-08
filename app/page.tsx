import HeroSection from '@/components/page-components/HeroSection'
// import FeaturesPreview from '@/components/page-components/FeaturesPreview'
import PortfolioSection from '@/components/page-components/PortfolioSection'
// import BenefitsSection from '@/components/page-components/BenefitsSection'
import FeaturesSection from '@/components/page-components/FeaturesSection'
// import WorkFlowSection from '@/components/page-components/WorkFlowSection'
// import TechnologiesSection from '@/components/page-components/TechnologiesSection'
import OrderFromSection from '@/components/page-components/OrderFromSection'
import PricingPlansSection from '@/components/page-components/PricingPlansSection'
import ContactSection from '@/components/page-components/ContactSection'

export default function HomePage() {
  return (
    <div className='overflow-hidden'>
      <div className='min-h-screen max-w-6xl m-auto border-x border-black/10 dark:border-white/10'>
        <HeroSection />
        {/* <FeaturesPreview /> */}
        <PortfolioSection />
        <PricingPlansSection />
        <OrderFromSection />
        {/* <BenefitsSection />
        <WorkFlowSection /> */}
        <FeaturesSection />
        {/* <TechnologiesSection /> */}
        <ContactSection />
      </div>
    </div>
  )
}
