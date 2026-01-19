import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const formElement = e.currentTarget;
      const formDataObj = new FormData(formElement);

      const response = await fetch("https://formsubmit.co/patience@serenemindswellness.us", {
        method: "POST",
        body: formDataObj
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll be in touch soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-32 md:pt-40">
        <section className="py-12 md:py-16 bg-white/95 flex justify-center">
          <div className="w-full max-w-[1200px] px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-8 md:mb-12">Contact Us</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="h-fit">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-heading font-semibold mb-6">Send Us a Message</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value={`${window.location.origin}/?success=true`} />
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 md:w-6 h-5 md:h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold mb-2">Service Locations</h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        580 Lexington Green Lane<br />
                        Sanford, Florida 32771<br />
                        <br />
                        <span className="font-semibold">Telehealth Statewide Available</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 md:w-6 h-5 md:h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold mb-2">Phone</h3>
                      <a href="tel:4076937055" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                        (407) 693-7055
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 md:w-6 h-5 md:h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold mb-2">Email</h3>
                      <a href="mailto:patience@serenemindswellness.us" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors break-all">
                        patience@serenemindswellness.us
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 md:p-8">
                  <h3 className="font-heading font-semibold mb-3">Office Hours</h3>
                  <div className="space-y-2 text-xs md:text-sm text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: By Appointment</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12 md:mt-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6 text-center">Our Service Areas</h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223022.93596913127!2d-81.5186806!3d28.54916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e73a37c2c2c2c2%3A0x1234567890ab!2sLake%20Mary%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
