import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "Anxiety",
      image: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2Fdb075835d29a449ca7f04c41d5d31e5f?format=webp&width=800",
      description: "Anxiety disorders affect millions of people and can significantly impact daily life. Our comprehensive anxiety treatment includes cognitive-behavioral therapy (CBT), medication management, and evidence-based interventions to help you manage symptoms and regain control.",
      details: [
        "Generalized Anxiety Disorder (GAD)",
        "Social Anxiety Disorder",
        "Panic Disorder",
        "Specific Phobias",
        "Medication management and optimization",
        "Coping strategies and lifestyle modifications"
      ]
    },
    {
      title: "Depression",
      image: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2Fc6a9ac09644b4efe8c33f8ec8fdf3615?format=webp&width=800",
      description: "Depression is a serious medical condition that requires professional treatment. We provide compassionate, evidence-based care including therapy, medication management, and support to help you find hope and restore joy to your life.",
      details: [
        "Major Depressive Disorder",
        "Persistent Depressive Disorder (Dysthymia)",
        "Seasonal Affective Disorder",
        "Treatment-resistant depression",
        "Psychiatric medication management",
        "Integrative therapy approaches"
      ]
    },
    {
      title: "Phobias",
      image: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2Fb6aabe7c254f4bfbab45a3622c15d855?format=webp&width=800",
      description: "Phobias are intense, irrational fears that can limit your life. Our specialized treatment uses exposure therapy, behavioral techniques, and medication when appropriate to help you overcome your fears and live freely.",
      details: [
        "Specific Phobias assessment and treatment",
        "Exposure therapy techniques",
        "Agoraphobia management",
        "Social anxiety and phobias",
        "Gradual desensitization programs",
        "Coping skills development"
      ]
    },
    {
      title: "PTSD",
      image: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2F7d5ed89b01104158804a3c1d2878c137?format=webp&width=800",
      description: "Post-Traumatic Stress Disorder (PTSD) can develop after experiencing or witnessing traumatic events. We offer trauma-informed care including evidence-based therapies like EMDR and CPT, combined with medication management when needed.",
      details: [
        "Trauma-informed care approach",
        "Cognitive Processing Therapy (CPT)",
        "Eye Movement Desensitization and Reprocessing (EMDR)",
        "Prolonged Exposure Therapy",
        "Crisis support and safety planning",
        "Family and relationship support"
      ]
    },
    {
      title: "OCD",
      image: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2F89e5597d636346d3b20cdb9a7eb2e9e9?format=webp&width=800",
      description: "Obsessive-Compulsive Disorder involves intrusive thoughts and repetitive behaviors. Our specialized OCD treatment includes Exposure and Response Prevention (ERP) therapy and medication management to help break the OCD cycle.",
      details: [
        "Comprehensive OCD assessment",
        "Exposure and Response Prevention (ERP)",
        "Cognitive therapy for obsessions",
        "Medication optimization",
        "Specialized therapists trained in OCD treatment",
        "Support for families and loved ones"
      ]
    },
    {
      title: "ADHD/ADD",
      image: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2Fb762263c8ff2455ca2541e2d30a19c5b?format=webp&width=800",
      description: "ADHD/ADD can impact focus, organization, and relationships. We provide comprehensive evaluation and treatment including medication management, behavioral strategies, and coaching to help you reach your potential.",
      details: [
        "Adult ADHD evaluation and diagnosis",
        "Pediatric ADHD assessment",
        "Medication management and monitoring",
        "Executive function coaching",
        "Behavioral interventions",
        "School and workplace accommodations support"
      ]
    },
    {
      title: "Bipolar Disorders",
      image: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2F334ac2ed3ee24930b494249abcad2809?format=webp&width=800",
      description: "Bipolar disorder involves extreme mood swings between depression and mania. Our integrated approach includes mood stabilizing medications, therapy, and lifestyle management to help you achieve stability and wellness.",
      details: [
        "Bipolar I and Bipolar II Disorder treatment",
        "Mood stabilizer medication management",
        "Psychoeducation on triggers and patterns",
        "Relapse prevention strategies",
        "Sleep and routine optimization",
        "Family-centered treatment planning"
      ]
    },
    {
      title: "Eating Disorders",
      image: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2Fa47e62bf9fe84f14be8f79b5652064aa?format=webp&width=800",
      description: "Eating disorders are serious mental health conditions requiring specialized care. We provide compassionate, evidence-based treatment including therapy, nutrition support, and medical monitoring for recovery.",
      details: [
        "Anorexia Nervosa treatment",
        "Bulimia Nervosa treatment",
        "Binge Eating Disorder support",
        "Avoidant/Restrictive Food Intake Disorder",
        "Medical monitoring and medication",
        "Nutritionist and therapy collaboration"
      ]
    },
    {
      title: "Preceptorship for PMHNP Students",
      image: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2F38318bfc4fb248a3b3b5eebe52d7cc90?format=webp&width=800",
      description: "We are proud to offer clinical preceptorship opportunities for psychiatric mental health nurse practitioner (PMHNP) students. Our program provides comprehensive, hands-on training in psychiatric evaluation, medication management, psychotherapy, and faith-informed care.",
      details: [
        "Comprehensive clinical training",
        "Psychiatric evaluation and diagnosis skills",
        "Medication management experience",
        "Psychotherapy techniques and practice",
        "Faith-informed care approaches",
        "Patient interaction and communication skills",
        "Professional development and mentoring",
        "Flexible scheduling for student availability"
      ]
    },
    {
      title: "Surgical Clearance Evaluations",
      image: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2Fd57dd6e23a23450b993707e30e18ec4c?format=webp&width=800",
      description: "Before undergoing surgery, many patients require psychiatric clearance to ensure they are mentally and emotionally ready for the procedure. Our comprehensive surgical clearance evaluations assess your mental health status, medications, coping abilities, and support systems.",
      details: [
        "Comprehensive mental health assessment",
        "Medication review and optimization",
        "Risk assessment for surgery",
        "Evaluation of coping strategies",
        "Support system assessment",
        "Clear documentation for surgical team",
        "Post-operative mental health planning",
        "Coordination with surgical and medical teams"
      ]
    },
    {
      title: "Insomnia & Sleep Disorders",
      image: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2F746ef32d4e3a4bc3a7212d9113899bd5?format=webp&width=800",
      description: "Sleep is essential for physical health, emotional well-being, and cognitive function. Sleep disturbances can impact every aspect of your life. We provide comprehensive sleep disorder evaluation and treatment including sleep hygiene optimization, cognitive-behavioral therapy for insomnia (CBT-I), medication management, and lifestyle modifications to help you achieve restorative, quality sleep.",
      details: [
        "Comprehensive sleep assessment and evaluation",
        "Cognitive-Behavioral Therapy for Insomnia (CBT-I)",
        "Sleep hygiene and routine optimization",
        "Medication management for sleep disorders",
        "Evaluation of underlying medical and psychiatric causes",
        "Sleep apnea screening and referral when needed",
        "Relaxation techniques and mindfulness for sleep",
        "Lifestyle and nutritional modifications"
      ]
    }
  ];

  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-32 md:pt-40">
        <section className="py-12 md:py-16 lg:py-24 bg-white/95 flex justify-center">
          <div className="w-full max-w-[1200px] px-4 md:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-4 md:mb-6 text-primary">My Services</h1>
            <p className="text-center text-muted-foreground mb-8 md:mb-12 lg:mb-16 max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              I offer a comprehensive range of mental health services designed to support your journey to wellness. At WillMind Mental Health, my evidence-based, patient-centered approach addresses the biological, psychological, and social factors that shape your mental health.
            </p>

            <div className="mb-12 md:mb-16 max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary mb-6">Conditions I Treat</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <ul className="space-y-2 text-xs sm:text-sm md:text-base text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                      <span>Anxiety & panic disorders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                      <span>Depression & mood disorders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                      <span>ADHD</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                      <span>Trauma & PTSD</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                      <span>OCD & intrusive thoughts</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-xs sm:text-sm md:text-base text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                      <span>Burnout & chronic stress</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                      <span>Insomnia & sleep disturbances</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                      <span>Women's hormonal mood concerns (PMDD, perinatal, perimenopause)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                      <span>Bipolar disorder</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                      <span>Eating disorders</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12 md:mb-16 max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary mb-6">Treatment Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <ul className="space-y-2 text-xs sm:text-sm md:text-base text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                    <span>Psychiatric evaluation & diagnosis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                    <span>Medication management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                    <span>Brief supportive and CBT-informed therapy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                    <span>Faith-based and holistic counseling integration</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-xs sm:text-sm md:text-base text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                    <span>Lifestyle & wellness guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                    <span>Collaborative care with therapists, PCPs, and OB-GYNs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                    <span>Evaluations for surgical and medical clearance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-12 md:mb-16 max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary mb-6">Additional Services</h2>
              <ul className="space-y-2 text-xs sm:text-sm md:text-base text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                  <span><strong>PMHNP Student Preceptorship:</strong> We provide preceptorship opportunities for PMHNP students seeking high-quality clinical training in integrative psychiatric care, evaluations, and supportive therapy.</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group h-full" onClick={() => setSelectedService(service)}>
                  <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/40" />
                  </div>
                  <CardContent className="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col h-full justify-between">
                    <div>
                      <h3 className="font-heading font-semibold text-base sm:text-lg md:text-lg lg:text-xl mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">{service.title}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed">{service.description}</p>
                    </div>
                    <Button variant="outline" className="mt-3 sm:mt-4 w-full text-xs sm:text-sm" size="sm">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Service Details Dialog */}
      <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto w-[95vw] sm:w-full">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="text-lg sm:text-xl md:text-2xl break-words">{selectedService.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 sm:space-y-6">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg"
                />
                <div>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">What We Offer</h3>
                  <ul className="space-y-1 sm:space-y-2">
                    {selectedService.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span className="text-xs sm:text-sm md:text-base text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base"
                    onClick={() => navigate('/contact')}
                  >
                    Request Appointment
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 text-sm sm:text-base"
                    onClick={() => setSelectedService(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Services;
