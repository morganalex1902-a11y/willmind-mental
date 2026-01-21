import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-32 md:pt-40">
        <section className="py-12 md:py-16 lg:py-24 bg-white/95 flex justify-center">
          <div className="w-full max-w-[1200px] px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 text-muted-foreground leading-relaxed">

              {/* Main Heading */}
              <div className="text-center mb-8 md:mb-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
                  About WillMind Mental Health
                </h1>
                <p className="text-base sm:text-lg md:text-xl font-semibold text-primary leading-relaxed">
                  Compassionate, Evidence-Based Psychiatric Care
                </p>
              </div>

              {/* Hero Image */}
              <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg mb-8 md:mb-12">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F306a1616036f465a99fac4fefda23c7d%2F3e986ae5831947da980e5116e948f30f?format=webp&width=800"
                  alt="Tayo Maduagwu, PMHNP-BC - Mental Health Professional"
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Introduction */}
              <div className="space-y-4">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                  At WillMind Mental Health, I provide compassionate, evidence-based psychiatric care with a warm and patient-centered approach. I am dedicated to helping adults feel emotionally supported, understood, and empowered.
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                  Whether you're navigating anxiety, depression, ADHD, trauma, PTSD, maternal mental health concerns, or other psychiatric conditions, my care is designed to help you achieve lasting emotional wellness and reclaim your peace of mind.
                </p>
              </div>

              {/* Who We Are */}
              <div className="border-t pt-6 md:pt-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">Meet Tayo Maduagwu, MSN, APRN, PMHNP-BC</h2>
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                    I am a Board-Certified Psychiatric Mental Health Nurse Practitioner with a Master's degree in Nursing. With advanced training in psychiatric evaluation, medication management, and psychotherapy, I provide comprehensive mental health care that addresses the whole person.
                  </p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                    My approach blends psychiatric expertise, supportive therapy, evidence-based treatment modalities, and a genuine commitment to understanding your unique needs and goals. I believe in meeting clients exactly where they are and working together as partners in care.
                  </p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                    I provide comprehensive virtual psychiatric services to adults in Texas through secure telehealth appointments.
                  </p>
                </div>
              </div>

              {/* Our Mission */}
              <div className="border-t pt-6 md:pt-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">My Mission</h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                  To provide compassionate, evidence-based psychiatric care that helps adults feel emotionally supported, understood, and empowered. I am committed to creating a warm, collaborative relationship where you feel heard and respected throughout your healing journey.
                </p>
              </div>

              {/* Our Vision */}
              <div className="border-t pt-6 md:pt-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">My Vision</h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                  To be a trusted psychiatric partner who empowers adults to achieve lasting emotional wellness and mental clarity. I envision a practice where every client feels truly seen, valued, and supported in achieving their unique path to recovery and well-being.
                </p>
              </div>

              {/* Our Philosophy */}
              <div className="border-t pt-6 md:pt-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">My Philosophy</h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                  I believe mental wellness is more than the absence of illness—it is the presence of clarity, resilience, purpose, and peace. True healing happens when we address the biological, psychological, and social factors that shape your mental health. I blend evidence-based psychiatric medicine with a supportive, empathetic approach to help you achieve lasting wellness and feel truly understood.
                </p>
              </div>

              {/* Our Approach */}
              <div className="border-t pt-6 md:pt-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">My Approach to Care</h2>
                <div className="space-y-4 md:space-y-6">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                    Our approach is integrated, collaborative, and patient-centered. We look beyond symptoms to understand the biological, psychological, environmental, and spiritual factors that shape your mental health. You will always be treated as a whole person—not a diagnosis.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-primary p-3 sm:p-4 md:p-5 lg:p-6 rounded">
                    <h3 className="text-base sm:text-lg font-semibold text-primary mb-2 sm:mb-3">Holistic, Patient-Centered Care</h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                      I believe that true healing addresses the whole person. Mental health isn't just about brain chemistry—it's about your unique story, your goals, your coping abilities, and what wellness means to you. My approach combines psychiatric expertise with a warm, empathetic understanding of your individual needs and circumstances.
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-primary p-3 sm:p-4 md:p-5 lg:p-6 rounded">
                    <h3 className="text-base sm:text-lg font-semibold text-primary mb-2 sm:mb-3">Evidence-Based Treatment</h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                      Every recommendation we make is grounded in current scientific evidence. Whether it's medication selection, therapy approaches, or lifestyle interventions, we use proven, evidence-based treatments that have shown effectiveness for your specific condition.
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-primary p-3 sm:p-4 md:p-5 lg:p-6 rounded">
                    <h3 className="text-base sm:text-lg font-semibold text-primary mb-2 sm:mb-3">Collaborative Partnership</h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                      You are never "rushed" or treated as just a diagnosis. I take time to truly listen and understand your experiences, your goals, and what you hope to improve. Together, we work as partners in your care, exploring your symptoms and building a treatment plan that feels right for you.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-primary mb-4">Your personalized care plan may include:</p>
                    <ul className="space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base lg:text-lg">
                      <li className="flex items-start">
                        <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                        <span>Comprehensive psychiatric evaluation and diagnosis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                        <span>Medication management with close follow-up, education, and side effect monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                        <span>Brief supportive therapy or CBT-informed interventions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                        <span>Faith-inclusive and lifestyle-based interventions (sleep optimization, nutritional support, stress management, and mindfulness practices)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                        <span>Trauma-informed care and grief support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                        <span>Family and relationship counseling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                        <span>Clinical preceptorship for PMHNP students</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                        <span>Psychiatric evaluations for surgical clearance</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t pt-4 md:pt-6">
                    <h3 className="text-base sm:text-lg font-semibold text-primary mb-3">Who I Work With</h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-3">
                      I work with adults navigating:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm md:text-base lg:text-lg">
                      <li className="flex items-start">
                        <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                        <span>Anxiety, panic disorder, and stress management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                        <span>Depression and mood disorders</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                        <span>ADHD/ADD and focus concerns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                        <span>Trauma, PTSD, and emotional recovery</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                        <span>Maternal mental health and postpartum mood concerns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                        <span>Bipolar disorder and sleep disorders</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t pt-4 md:pt-6">
                    <h3 className="text-base sm:text-lg font-semibold text-primary mb-3">Access to Care</h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4">
                      I believe mental health care should be accessible to everyone. I serve adults in Texas through secure telehealth, making it easy to access care from the comfort of your home. I accept most major insurance plans and also offer sliding scale and cash-pay options. Let's verify your coverage and find a payment plan that works for you.
                    </p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-primary">
                      I offer virtual telehealth appointments throughout Texas.
                    </p>
                  </div>

                  <div className="border-t pt-4 md:pt-6">
                    <h3 className="text-base sm:text-lg font-semibold text-primary mb-3">Ready to Start Your Healing Journey?</h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                      Whether you're seeking relief from anxiety, clarity around depression, support with ADHD, help processing trauma, or simply a compassionate provider who truly listens, I'm here to support you. Book your first session today and take the first step toward feeling emotionally supported, understood, and empowered.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
