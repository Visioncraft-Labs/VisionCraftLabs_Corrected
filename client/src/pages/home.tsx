import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BeforeAfterSimple } from "@/components/before-after-simple";
import ScrollReveal from "@/components/scroll-reveal";
import { featuredPortfolio } from "@/data/portfolio";

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-primary via-bg-secondary to-bg-tertiary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold leading-tight">
                Where Products Become{" "}
                <span className="gradient-text-primary">Visual Stories</span>
              </h1>
              <p className="text-xl text-muted leading-relaxed">
                Transform your dull product images into high-end visual masterpieces that captivate customers and drive sales. Professional photography services for brands and e-commerce sellers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/portfolio">
                  <Button className="btn-luxury px-8 py-4 rounded-lg">
                    View Portfolio
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="btn-secondary px-8 py-4 rounded-lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <BeforeAfterSimple
                beforeImage="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                afterImage="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                beforeAlt="Product before VisionCraft transformation"
                afterAlt="Product after VisionCraft transformation"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-secondary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-inter font-bold mb-4">
                Our <span className="gradient-text-secondary">Transformations</span>
              </h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                See how we turn ordinary product photos into extraordinary visual experiences that sell.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPortfolio.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 100}>
                <div className="group">
                  <BeforeAfterSimple
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                    beforeAlt={item.beforeAlt}
                    afterAlt={item.afterAlt}
                    className="rounded-xl shadow-lg overflow-hidden h-64"
                  />
                  <div className="p-4">
                    <h3 className="font-inter font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button className="btn-luxury px-8 py-4 rounded-lg">
                View Complete Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-inter font-bold mb-4">
                Our <span className="gradient-text-primary">Process</span>
              </h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                From concept to completion, we transform your products through our proven methodology.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-inter font-semibold mb-4">Consultation</h3>
                <p className="text-muted">
                  We understand your brand, products, and vision to create the perfect visual strategy.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-inter font-semibold mb-4">Creation</h3>
                <p className="text-muted">
                  Professional photography and post-production to bring your products to life.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-inter font-semibold mb-4">Delivery</h3>
                <p className="text-muted">
                  High-resolution images ready for your marketing campaigns and e-commerce platforms.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;