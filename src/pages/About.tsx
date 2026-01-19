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
                  About Serene Minds Wellness
                </h1>
                <p className="text-base sm:text-lg md:text-xl font-semibold text-primary leading-relaxed">
                  Faith, Balance, and Healing — Integrated Psychiatry for Women, Teens, and Adults
                </p>
              </div>

              {/* Introduction */}
              <div className="space-y-4">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                  At Serene Minds Wellness, we believe true healing begins when the mind, body, and spirit are in harmony.
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                  We provide integrated, holistic, and faith-informed psychiatric care for women, adolescent girls, and adults seeking clarity, emotional stability, and renewed balance. Whether you're navigating anxiety, depression, ADHD, trauma, burnout, hormonal mood changes, or major life stressors, our care is designed to help you reconnect with peace, strength, and purpose.
                </p>
              </div>

              {/* Who We Are */}
              <div className="border-t pt-6 md:pt-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">Who We Are</h2>
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                    Serene Minds Wellness was founded by Patience Amune, APRN, PMHNP-BC, a board-certified psychiatric mental health nurse practitioner dedicated to whole-person healing.
                  </p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                    Patience blends psychiatric expertise, supportive therapy, lifestyle guidance, medication management, and faith-informed care to provide personalized, evidence-based treatment that honors each person's individual needs.
                  </p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                    We serve clients across Florida through telehealth, and offer in-person care in Sanford, FL.
                  </p>
                </div>
              </div>

              {/* Our Mission */}
              <div className="border-t pt-6 md:pt-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">Our Mission</h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                  To provide integrated, compassionate, and evidence-based psychiatric care that empowers women, teens, and adults to heal, grow, and rediscover peace through the alignment of mind, body, and spirit.
                </p>
              </div>

              {/* Our Vision */}
              <div className="border-t pt-6 md:pt-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">Our Vision</h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                  To be a trusted leader in faith-informed and integrative mental health care, where each individual feels seen beyond a diagnosis and supported in their personal journey toward emotional stability and spiritual well-being.
                </p>
              </div>

              {/* Our Philosophy */}
              <div className="border-t pt-6 md:pt-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">Our Philosophy</h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                  We believe mental wellness is more than the absence of illness—it is the presence of balance, clarity, purpose, and inner peace. True healing happens when we treat the whole person, honoring the connection between biology, emotions, lived experiences, and faith. Our model blends modern psychiatric care with holistic principles to create a space for genuine restoration and transformation.
                </p>
              </div>

              {/* Our Approach */}
              <div className="border-t pt-6 md:pt-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">Our Approach</h2>
                <div className="space-y-4 md:space-y-6">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                    Our approach is integrated, collaborative, and patient-centered. We look beyond symptoms to understand the biological, psychological, environmental, and spiritual factors that shape your mental health. You will always be treated as a whole person—not a diagnosis.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-primary p-3 sm:p-4 md:p-5 lg:p-6 rounded">
                    <h3 className="text-base sm:text-lg font-semibold text-primary mb-2 sm:mb-3">Integrated Care Philosophy</h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                      We believe that true healing addresses the whole person. Mental health isn't just about brain chemistry—it's about your beliefs, values, relationships, sleep, nutrition, physical activity, and spiritual well-being. Our integrated approach combines psychiatric expertise with holistic healing to address all dimensions of your wellbeing.
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-primary p-3 sm:p-4 md:p-5 lg:p-6 rounded">
                    <h3 className="text-base sm:text-lg font-semibold text-primary mb-2 sm:mb-3">Evidence-Based Treatment</h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                      Every recommendation we make is grounded in current scientific evidence. Whether it's medication selection, therapy approaches, or lifestyle interventions, we use proven, evidence-based treatments that have shown effectiveness for your specific condition.
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-primary p-3 sm:p-4 md:p-5 lg:p-6 rounded">
                    <h3 className="text-base sm:text-lg font-semibold text-primary mb-2 sm:mb-3">Faith-Informed Care</h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                      For many people, faith and spirituality are central to their identity and healing journey. We honor and integrate faith-based perspectives into treatment, whether through prayer, spiritual practices, values clarification, or connecting you with spiritual resources. Your beliefs are respected and incorporated into your care plan.
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
                    <h3 className="text-base sm:text-lg font-semibold text-primary mb-3">Who We Serve</h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-3">
                      We serve a diverse population including:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm md:text-base lg:text-lg">
                      <li className="flex items-start">
                        <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                        <span>Women navigating hormonal mood changes, reproductive psychiatry, and life transitions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                        <span>Adolescent girls and young women with depression, anxiety, and identity questions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                        <span>Adults seeking clarity, emotional stability, and renewed purpose</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                        <span>Individuals facing burnout, trauma, ADHD, anxiety, depression, and other psychiatric conditions</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t pt-4 md:pt-6">
                    <h3 className="text-base sm:text-lg font-semibold text-primary mb-3">Access to Care</h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4">
                      We believe mental health care should be accessible to everyone. We serve clients across Florida through secure telehealth, making it easy to access care from the comfort of your home. We also offer in-person appointments in Sanford, FL for those who prefer face-to-face interactions. Most insurance plans are accepted, and we're happy to verify coverage and work with you on payment options.
                    </p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-primary">
                      We offer telehealth throughout Florida and in-person sessions in Sanford, FL.
                    </p>
                  </div>

                  <div className="border-t pt-4 md:pt-6">
                    <h3 className="text-base sm:text-lg font-semibold text-primary mb-3">Take the First Step Toward Healing</h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                      Whether you're seeking calm, clarity, emotional resilience, spiritual grounding, or a compassionate provider who truly listens, Serene Minds Wellness is here to help you restore balance and live with renewed purpose.
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
