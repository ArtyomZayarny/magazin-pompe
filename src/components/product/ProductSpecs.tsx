import { ProductSpec } from "@/types/product";

interface ProductSpecsProps {
  specs: ProductSpec[];
}

export function ProductSpecs({ specs }: ProductSpecsProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <h3 className="px-4 py-3 bg-muted font-semibold text-sm">
        Specificații Tehnice
      </h3>
      <div className="divide-y">
        {specs.map((spec, i) => (
          <div
            key={i}
            className={`flex px-4 py-2.5 text-sm ${i % 2 === 0 ? "bg-white" : "bg-muted/30"}`}
          >
            <span className="w-1/2 text-muted-foreground">{spec.label}</span>
            <span className="w-1/2 font-medium">
              {spec.value}
              {spec.unit && (
                <span className="text-muted-foreground ml-1">{spec.unit}</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
