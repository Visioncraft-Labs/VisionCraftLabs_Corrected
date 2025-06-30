interface BeforeAfterSimpleProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}

export const BeforeAfterSimple = ({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  className = "",
}: BeforeAfterSimpleProps) => {
  return (
    <div className={`grid grid-cols-2 gap-2 rounded-lg overflow-hidden ${className}`}>
      {/* Before Image */}
      <div className="relative group">
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-2 left-2">
          <span className="bg-red-500/80 text-white px-2 py-1 rounded text-sm font-medium">
            Before
          </span>
        </div>
      </div>
      
      {/* After Image */}
      <div className="relative group">
        <img
          src={afterImage}
          alt={afterAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-2 left-2">
          <span className="bg-green-500/80 text-white px-2 py-1 rounded text-sm font-medium">
            After
          </span>
        </div>
      </div>
    </div>
  );
};