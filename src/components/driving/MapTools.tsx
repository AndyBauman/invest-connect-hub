
import MapPreview from "./MapPreview";
import AddPropertyForm from "./AddPropertyForm";
import ModeSelector from "./ModeSelector";

const MapTools = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-12 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          <div className="w-full lg:w-auto">
            <MapPreview />
          </div>
          
          {/* Tools & Features */}
          <div className="space-y-4 col-span-1 lg:col-span-2 w-full">
            <AddPropertyForm />
            <ModeSelector />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapTools;
