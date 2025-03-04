
import { DrivingForDollarsPromoBanner } from "./DrivingForDollarsPromoBanner";

export const HomePageBanners = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
      <h2 className="text-2xl font-display font-semibold text-center mb-8">Specialized Tools</h2>
      <DrivingForDollarsPromoBanner />
    </div>
  );
};

export default HomePageBanners;
