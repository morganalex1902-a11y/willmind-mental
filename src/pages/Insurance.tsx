import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Insurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-32 md:pt-40">
        <section className="py-12 md:py-16 lg:py-20 bg-white/95 flex justify-center">
          <div className="w-full max-w-[1200px] px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">Insurance & Booking</h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                We accept most insurances. Verify your coverage easily and book your appointment through GrowTherapy.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              {/* GrowTherapy Primary Section */}
              <Card className="border-2 border-primary/30 bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="p-6 sm:p-8 md:p-10">
                  <div className="flex flex-col items-center text-center mb-6 md:mb-8">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fdf7e75028bff4b959bd5bdef48ded5a3%2F1e4cf4b9b50a4bdbac57f0e5b04f57b8?format=webp&width=800"
                      alt="GrowTherapy"
                      className="h-10 md:h-12 object-contain mb-4"
                    />
                    <h2 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-primary mb-3">Verify Insurance & Book on GrowTherapy</h2>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
                      The easiest way to check your insurance coverage and schedule your appointment in one place.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                      <div>
                        <h3 className="font-semibold text-sm md:text-base text-foreground mb-1">Instant Insurance Verification</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">Verify your insurance coverage instantly without waiting on hold.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                      <div>
                        <h3 className="font-semibold text-sm md:text-base text-foreground mb-1">Convenient Online Booking</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">Schedule your appointment 24/7 from your computer or phone.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                      <div>
                        <h3 className="font-semibold text-sm md:text-base text-foreground mb-1">Secure & Transparent</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">See your expected out-of-pocket costs before booking.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                      <div>
                        <h3 className="font-semibold text-sm md:text-base text-foreground mb-1">No Hidden Fees</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">Know exactly what you'll pay before your first appointment.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <a href="https://growtherapy.com/book-appointment?prsid=6nwhh2q28y21&ref=grow&setting=Virtual" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors text-sm md:text-base">
                        Verify Insurance & Book Now
                      </button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Insurance Acceptance Info */}
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-primary mb-4">Insurance Coverage</h2>
                  <div className="space-y-4">
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                      Serene Minds Wellness accepts most major insurance providers. Through GrowTherapy, you can quickly check if your insurance is accepted and see your coverage details in real-time.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-primary p-4 rounded">
                      <h3 className="font-semibold text-sm md:text-base text-foreground mb-2">What You'll Discover on GrowTherapy:</h3>
                      <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold flex-shrink-0">•</span>
                          <span>Whether your insurance plan is in-network with our practice</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold flex-shrink-0">•</span>
                          <span>Your copay, deductible, and coinsurance amounts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold flex-shrink-0">•</span>
                          <span>Expected out-of-pocket costs for your visit</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold flex-shrink-0">•</span>
                          <span>Available appointment times and pricing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Alternative Contact Methods */}
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-primary mb-4">Need Help?</h2>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                    If you prefer to speak with our team directly about your insurance coverage or have questions, we're happy to help.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-sm md:text-base text-foreground">Phone</h3>
                      <a href="tel:4076937055" className="text-primary hover:text-primary/80 transition-colors font-medium text-sm md:text-base">
                        (407) 693-7055
                      </a>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-sm md:text-base text-foreground">Email</h3>
                      <a href="mailto:patience@serenemindswellness.us" className="text-primary hover:text-primary/80 transition-colors font-medium text-sm md:text-base break-all">
                        patience@serenemindswellness.us
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
        </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Insurance;
