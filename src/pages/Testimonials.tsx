import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { format, parseISO } from "date-fns";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "The care and support I received at Serene Minds Wellness has been life-changing. The staff is compassionate and professional.",
      date: "2024-03-15"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Finally found a place where I feel heard and understood. Highly recommend their services to anyone seeking mental health support.",
      date: "2024-03-10"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "The teletherapy option made it so convenient for me to get the help I needed. Excellent service and caring professionals.",
      date: "2024-03-05"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 md:pt-40">
        <section className="py-12 md:py-16 lg:py-20 bg-white/95 flex justify-center">
          <div className="w-full max-w-[1200px] px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-primary">
              Patient Testimonials
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Read what our patients have to say about their experience with Serene Minds Wellness
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-4 sm:p-5 md:p-6 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-warm-accent text-warm-accent" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-sm md:text-base text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{format(parseISO(testimonial.date), "MM/dd/yyyy")}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
