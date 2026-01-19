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
      title: "Anxiety Treatment",
      description: "Anxiety disorders affect millions of people and can significantly impact daily life. Our comprehensive anxiety treatment includes cognitive-behavioral therapy (CBT), medication management, and evidence-based interventions to help you manage symptoms and regain control.",
      details: [
        "Generalized Anxiety Disorder (GAD)",
        "Social Anxiety Disorder",
        "Panic Disorder",
        "Specific Phobias",
        "Medication management and optimization",
        "Coping strategies and lifestyle modifications",
        "Mindfulness and relaxation techniques"
      ]
    },
    {
      title: "Depression Care",
      description: "Depression is a serious medical condition that requires professional treatment. We provide compassionate, evidence-based care including therapy, medication management, and support to help you find hope and restore joy to your life. Whether you're experiencing major depressive disorder, persistent depression, or seasonal mood changes, we're here to help.",
      details: [
        "Major Depressive Disorder",
        "Persistent Depressive Disorder (Dysthymia)",
        "Seasonal Affective Disorder",
        "Treatment-resistant depression",
        "Psychiatric medication management",
        "Integrative therapy approaches",
        "Lifestyle and nutritional support"
      ]
    },
    {
      title: "Medication Management",
      description: "Expert psychiatric medication evaluation and ongoing management is at the core of our care. We provide thorough assessments to determine if medication is appropriate for you, select the right medication(s), and monitor your progress with close follow-up and education. Our approach emphasizes finding the right medication at the right dose with minimal side effects.",
      details: [
        "Comprehensive psychiatric evaluation",
        "Medication selection and optimization",
        "Close follow-up and monitoring",
        "Patient education on medications",
        "Side effect management",
        "Drug interaction screening",
        "Medication adjustments based on response"
      ]
    },
    {
      title: "PTSD Support",
      description: "Post-Traumatic Stress Disorder (PTSD) can develop after experiencing or witnessing traumatic events. We offer trauma-informed care including evidence-based therapies like EMDR and CPT, combined with medication management when needed. Our compassionate approach helps you process trauma and rebuild your sense of safety.",
      details: [
        "Trauma-informed care approach",
        "Cognitive Processing Therapy (CPT)",
        "Eye Movement Desensitization and Reprocessing (EMDR)",
        "Prolonged Exposure Therapy",
        "Crisis support and safety planning",
        "Family and relationship support",
        "Specialized trauma assessment"
      ]
    },
    {
      title: "OCD Treatment",
      description: "Obsessive-Compulsive Disorder involves intrusive thoughts and repetitive behaviors that can be exhausting and isolating. Our specialized OCD treatment includes Exposure and Response Prevention (ERP) therapy and medication management to help break the OCD cycle and restore your freedom.",
      details: [
        "Comprehensive OCD assessment",
        "Exposure and Response Prevention (ERP)",
        "Cognitive therapy for obsessions",
        "Medication optimization",
        "Specialized therapists trained in OCD treatment",
        "Support for families and loved ones",
        "Relapse prevention strategies"
      ]
    },
    {
      title: "Bipolar Disorder",
      description: "Bipolar disorder involves extreme mood swings between depression and mania that can affect your relationships, work, and overall quality of life. Our integrated approach includes mood stabilizing medications, therapy, and lifestyle management to help you achieve stability and wellness.",
      details: [
        "Bipolar I and Bipolar II Disorder treatment",
        "Mood stabilizer medication management",
        "Psychoeducation on triggers and patterns",
        "Relapse prevention strategies",
        "Sleep and routine optimization",
        "Family-centered treatment planning",
        "Lifestyle interventions"
      ]
    },
    {
      title: "ADHD/ADD Support",
      description: "ADHD/ADD can impact focus, organization, time management, and relationships in both children and adults. We provide comprehensive evaluation and treatment including medication management, behavioral strategies, and coaching to help you reach your potential and thrive.",
      details: [
        "Adult ADHD evaluation and diagnosis",
        "Pediatric ADHD assessment",
        "Medication management and monitoring",
        "Executive function coaching",
        "Behavioral interventions",
        "School and workplace accommodations support",
        "Organizational and time management strategies"
      ]
    },
    {
      title: "Trauma & Grief Support",
      description: "Life can bring unexpected losses, traumas, and major life transitions. Our supportive, faith-informed approach helps you process grief, trauma, and life stressors with compassion. We integrate therapy, medication when appropriate, and spiritual support for holistic healing.",
      details: [
        "Grief counseling and support",
        "Trauma processing and recovery",
        "Life transition support",
        "Faith-informed coping strategies",
        "Family support and guidance",
        "Crisis intervention",
        "Complicated grief treatment"
      ]
    },
    {
      title: "Preceptorship for PMHNP Students",
      description: "We are proud to offer clinical preceptorship opportunities for psychiatric mental health nurse practitioner (PMHNP) students. Our program provides comprehensive, hands-on training in psychiatric evaluation, medication management, psychotherapy, and faith-informed care. Students work alongside our experienced practitioners to develop clinical skills and professional confidence.",
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
      title: "Insomnia & Sleep Disorders",
      description: "Sleep is essential for physical health, emotional well-being, and cognitive function. Sleep disturbances can impact every aspect of your life, from work performance to relationships. We provide comprehensive sleep disorder evaluation and treatment including sleep hygiene optimization, cognitive-behavioral therapy for insomnia (CBT-I), medication management, and lifestyle modifications to help you achieve restorative, quality sleep.",
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
    },
    {
      title: "Evaluations for Surgical Clearance",
      description: "Before undergoing surgery, many patients require psychiatric clearance to ensure they are mentally and emotionally ready for the procedure. Our comprehensive surgical clearance evaluations assess your mental health status, medications, coping abilities, and support systems to provide surgeons with the information they need.",
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
                <Card key={index} className="hover:shadow-lg transition-all duration-300 h-full cursor-pointer group" onClick={() => setSelectedService(service)}>
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
