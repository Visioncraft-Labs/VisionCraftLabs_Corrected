// VisionCraft Labs Portfolio Data
// Replace these URLs with your actual before/after images

export interface PortfolioItem {
  id: number;
  category: "studio" | "lifestyle" | "commercial";
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  title: string;
  description: string;
  client?: string;
}

// Home Page Featured Portfolio (3 items)
export const featuredPortfolio: PortfolioItem[] = [
  {
    id: 1,
    category: "studio",
    beforeImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    afterImage: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    beforeAlt: "Electronics product before professional styling",
    afterAlt: "Electronics product after VisionCraft styling",
    title: "Studio Enhancement",
    description: "Professional studio photography with enhanced lighting and composition"
  },
  {
    id: 2,
    category: "lifestyle",
    beforeImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    afterImage: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    beforeAlt: "Fashion product before lifestyle styling",
    afterAlt: "Fashion product after VisionCraft lifestyle styling",
    title: "Lifestyle Styling",
    description: "Lifestyle photography that tells your product's story"
  },
  {
    id: 3,
    category: "commercial",
    beforeImage: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    afterImage: "https://images.unsplash.com/photo-1594736797933-d0101ba14811?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    beforeAlt: "Beauty product before commercial styling",
    afterAlt: "Beauty product after VisionCraft commercial styling",
    title: "Commercial Grade",
    description: "High-end commercial photography for premium brands"
  }
];

// Complete Portfolio (12 items total)
export const fullPortfolio: PortfolioItem[] = [
  // Studio Category
  {
    id: 4,
    category: "studio",
    beforeImage: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    afterImage: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    beforeAlt: "Camera equipment before professional studio setup",
    afterAlt: "Camera equipment after VisionCraft studio enhancement",
    title: "Professional Camera Styling",
    description: "Studio photography with perfect lighting and backdrop"
  },
  {
    id: 5,
    category: "studio",
    beforeImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    afterImage: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    beforeAlt: "Jewelry before luxury studio treatment",
    afterAlt: "Jewelry after VisionCraft luxury styling",
    title: "Luxury Jewelry Enhancement",
    description: "High-end jewelry photography with dramatic lighting"
  },
  {
    id: 6,
    category: "studio",
    beforeImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    afterImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    beforeAlt: "Home decor before studio styling",
    afterAlt: "Home decor after VisionCraft studio treatment",
    title: "Home Decor Studio Shot",
    description: "Clean studio photography for interior design products"
  },

  // Lifestyle Category
  {
    id: 7,
    category: "lifestyle",
    beforeImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    afterImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    beforeAlt: "Coffee product before lifestyle context",
    afterAlt: "Coffee product after VisionCraft lifestyle styling",
    title: "Coffee Lifestyle Shot",
    description: "Lifestyle photography that creates emotional connection"
  },
  {
    id: 8,
    category: "lifestyle",
    beforeImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    afterImage: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    beforeAlt: "Fashion clothing before lifestyle setup",
    afterAlt: "Fashion clothing after VisionCraft lifestyle treatment",
    title: "Fashion Lifestyle",
    description: "Clothing photography in natural lifestyle settings"
  },
  {
    id: 9,
    category: "lifestyle",
    beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    afterImage: "https://images.unsplash.com/photo-1593104812860-0d8ab2651cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    beforeAlt: "Skincare before lifestyle context",
    afterAlt: "Skincare after VisionCraft lifestyle enhancement",
    title: "Skincare Lifestyle",
    description: "Beauty products in authentic lifestyle moments"
  },

  // Commercial Category
  {
    id: 10,
    category: "commercial",
    beforeImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    afterImage: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    beforeAlt: "Smartphone before commercial treatment",
    afterAlt: "Smartphone after VisionCraft commercial styling",
    title: "Tech Product Commercial",
    description: "Commercial-grade photography for technology products"
  },
  {
    id: 11,
    category: "commercial",
    beforeImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    afterImage: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    beforeAlt: "Beauty product before commercial setup",
    afterAlt: "Beauty product after VisionCraft commercial treatment",
    title: "Beauty Product Commercial",
    description: "High-end commercial photography for beauty brands"
  },
  {
    id: 12,
    category: "commercial",
    beforeImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    afterImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    beforeAlt: "Athletic wear before commercial styling",
    afterAlt: "Athletic wear after VisionCraft commercial enhancement",
    title: "Athletic Wear Commercial",
    description: "Dynamic commercial photography for sports brands"
  }
];

// All portfolio items combined
export const allPortfolioItems = [...featuredPortfolio, ...fullPortfolio];

// Categories for filtering
export const portfolioCategories = [
  { name: "All", value: "all" },
  { name: "Studio", value: "studio" },
  { name: "Lifestyle", value: "lifestyle" },
  { name: "Commercial", value: "commercial" }
];