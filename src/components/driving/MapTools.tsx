
import MapPreview from "./MapPreview";
import AddPropertyForm from "./AddPropertyForm";
import ModeSelector from "./ModeSelector";

const MapTools = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-slate-50 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <MapPreview />
          
          {/* Tools & Features */}
          <div className="space-y-4 sm:space-y-6 col-span-1 lg:col-span-2">
            <AddPropertyForm />
            <ModeSelector />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapTools;
