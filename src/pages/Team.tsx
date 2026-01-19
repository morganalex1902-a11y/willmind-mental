import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Tayo Maduagwu, MSN, APRN, PMHNP-BC",
      title: "Psychiatric Mental Health Nurse Practitioner",
      bio: "Tayo is a board-certified Psychiatric Mental Health Nurse Practitioner dedicated to helping adults feel emotionally supported, understood, and empowered. With expertise in medication management, evidence-based therapy, and a compassionate, patient-centered approach, Tayo provides personalized psychiatric care with a focus on whole-person healing.",
      specialties: ["Medication Management", "Psychiatric Evaluation", "Individual Therapy", "Evidence-Based Care"],
      image: "https://cdn.builder.io/api/v1/image/assets%2F8c5319227ec44fd9bdef2d63efcb9acb%2F0854667eb6364130ac305c6e07c7cade?format=webp&width=800"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-32 md:pt-40">
        <section className="py-12 md:py-16 lg:py-20 bg-white/95 flex justify-center">
          <div className="w-full max-w-[1200px] px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-16">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-primary">Our Team</h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Meet our dedicated team of mental health professionals committed to your wellness journey. Each member brings extensive clinical experience, compassion, and a commitment to evidence-based, faith-informed care.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:gap-8 max-w-xl mx-auto mb-12 md:mb-16">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 35%' }}
                    />
                  </div>
                  <CardContent className="p-4 sm:p-5 md:p-6">
                    <div className="mb-4">
                      <h2 className="text-base sm:text-lg md:text-xl font-heading font-bold text-primary mb-2">{member.name}</h2>
                      <p className="text-xs sm:text-sm font-semibold text-primary mb-4">{member.title}</p>
                    </div>

                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>

                    <div>
                      <h3 className="font-semibold text-xs sm:text-sm mb-3">Specialties</h3>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="inline-block bg-primary/10 text-primary text-xs px-2 sm:px-3 py-1 rounded-full line-clamp-1"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <section className="bg-primary rounded-lg p-4 sm:p-6 md:p-8 mb-12 md:mb-16">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4 md:mb-6">What You Can Expect From Me</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div>
                  <h3 className="font-semibold text-white mb-2 sm:mb-3 text-base sm:text-lg">Warm & Welcoming Space</h3>
                  <p className="text-white text-xs sm:text-sm leading-relaxed">
                    In your first session, you can expect a warm, calm, and welcoming space where you are truly heard. I take time to understand your story and symptoms.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 sm:mb-3 text-base sm:text-lg">Clear Communication</h3>
                  <p className="text-white text-xs sm:text-sm leading-relaxed">
                    I explain everything clearly, from diagnosis to treatment options, ensuring you feel informed and empowered in your care.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 sm:mb-3 text-base sm:text-lg">Collaborative Partnership</h3>
                  <p className="text-white text-xs sm:text-sm leading-relaxed">
                    We work together as partners in your care. I believe in a supportive, empathetic, and collaborative approach to healing.
                  </p>
                </div>
              </div>
            </section>

            <section className="border-t-2 border-primary pt-8 md:pt-12">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-primary mb-6 md:mb-8">Professional Credentials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-4">
                  <h3 className="font-semibold text-base md:text-lg text-foreground">Certifications & Licenses</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm">Board-Certified Psychiatric Mental Health Nurse Practitioner (PMHNP-BC)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm">Licensed Professional Counselor (LPC)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm">Master of Science in Nursing (MSN)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm">Advanced Practice Registered Nurse (APRN)</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-base md:text-lg text-foreground">Specialized Training</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm">Cognitive Behavioral Therapy (CBT)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm">Trauma-Informed Care</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm">Medication Management & Psychopharmacology</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm">Faith-Informed Mental Health Care</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
