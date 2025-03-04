
import MapPreview from "./MapPreview";
import AddPropertyForm from "./AddPropertyForm";
import ModeSelector from "./ModeSelector";

const MapTools = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <MapPreview />
          
          {/* Tools & Features */}
          <div className="space-y-6">
            <AddPropertyForm />
            <ModeSelector />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapTools;
