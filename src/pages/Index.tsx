import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link, useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-family.jpg";
import missionImage from "@/assets/mission-hands.jpg";
import carousel1 from "@/assets/hero-carousel-1.jpg";
import carousel2 from "@/assets/hero-carousel-2.jpg";
import carousel3 from "@/assets/hero-carousel-3.jpg";
import { Users, Heart, Brain, ShieldCheck, Stethoscope, Lightbulb, X } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';

const Index = () => {
  const navigate = useNavigate();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  const carouselImages = [carousel1, carousel2, carousel3];

  const services = [
    {
      icon: Brain,
      title: "Anxiety",
      image: "https://images.unsplash.com/photo-1532286682806-34f3a5ff4302?w=400&h=300&fit=crop",
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
      icon: Heart,
      title: "Depression",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3af4abd8?w=400&h=300&fit=crop",
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
      icon: Users,
      title: "Phobias",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
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
      icon: ShieldCheck,
      title: "PTSD",
      image: "https://images.unsplash.com/photo-1511737804438-1c67112a2105?w=400&h=300&fit=crop",
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
      icon: Stethoscope,
      title: "OCD",
      image: "https://images.unsplash.com/photo-1516307365135-cf6e06f49e38?w=400&h=300&fit=crop",
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
      icon: Lightbulb,
      title: "ADHD/ADD",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
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
      icon: Brain,
      title: "Bipolar Disorders",
      image: "https://images.unsplash.com/photo-1615391254190-46c1ee8e6b4a?w=400&h=300&fit=crop",
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
      icon: Heart,
      title: "Eating Disorders",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
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
      icon: Users,
      title: "Preceptorship for PMHNP Students",
      image: "https://images.unsplash.com/photo-1576091160550-112173f7b090?w=400&h=300&fit=crop",
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
      icon: ShieldCheck,
      title: "Surgical Clearance Evaluations",
      image: "https://images.unsplash.com/photo-1576091160399-f2aaad00c5fe?w=400&h=300&fit=crop",
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
      icon: Brain,
      title: "Insomnia & Sleep Disorders",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
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
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Background Carousel */}
      <section className="relative min-h-[500px] sm:min-h-[600px] md:h-[700px] flex items-end overflow-hidden pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 mt-[10px]">
        {/* Background Carousel */}
        <div className="absolute inset-0" ref={emblaRef}>
          <div className="flex h-full">
            {carouselImages.map((img, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 h-full">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${img})` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Text Overlay - Bottom Left */}
        <div className="relative z-10 container mx-auto px-4 flex justify-start w-full">
          <div className="max-w-xs sm:max-w-sm md:max-w-60 bg-white/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-4 shadow-2xl">
            <h1 className="text-xl sm:text-2xl md:text-2xl font-heading font-bold text-black pb-2 sm:pb-3 md:pb-3 border-b-[3px] border-blue-400 leading-tight">
              Unlock Your<br />Mental Health
            </h1>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white/95 flex justify-center">
        <div className="w-full max-w-[1200px] px-4 md:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 text-primary border-b-4 border-primary pb-2 inline-block">
              About WillMind Mental Health
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              Compassionate, Evidence-Based Psychiatric Care with a Warm and Patient-Centered Approach
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16 items-start lg:items-center">
            <div className="space-y-0">
              <Card className="rounded-none border-0 bg-primary text-left hover:shadow-none transition-shadow">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div>
                    <h3 className="font-heading font-semibold text-lg sm:text-xl mb-2 sm:mb-3 text-white">Comprehensive Psychiatric Evaluation</h3>
                    <p className="text-sm sm:text-base text-white leading-relaxed">
                      Thorough assessments to understand the biological, psychological, environmental, and spiritual factors shaping your mental health. We develop personalized treatment plans tailored to your unique needs and values.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-none border-0 bg-primary text-left hover:shadow-none transition-shadow">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div>
                    <h3 className="font-heading font-semibold text-lg sm:text-xl mb-2 sm:mb-3 text-white">Medication Management</h3>
                    <p className="text-sm sm:text-base text-white leading-relaxed">
                      Expert psychiatric medication management with close follow-up and education. We optimize medications for your specific condition while monitoring for side effects and ensuring the best possible outcomes.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-none border-0 bg-primary text-left hover:shadow-none transition-shadow">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div>
                    <h3 className="font-heading font-semibold text-lg sm:text-xl mb-2 sm:mb-3 text-white">Faith-Informed Integrated Care</h3>
                    <p className="text-sm sm:text-base text-white leading-relaxed">
                      Collaboration with therapists, medical providers, OB-GYNs, specialists, families, and support teams. We also integrate faith-based and lifestyle-based interventions including sleep optimization, nutrition, mindfulness, and stress support for whole-person healing.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="relative w-full flex items-center justify-center rounded-lg overflow-hidden min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F8c5319227ec44fd9bdef2d63efcb9acb%2F0854667eb6364130ac305c6e07c7cade?format=webp&width=800"
                  alt="Tayo Maduagwu, PMHNP-BC"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="bg-blue-50 border-l-4 border-primary p-4 sm:p-5 md:p-6 rounded">
                <h3 className="font-heading font-semibold text-base sm:text-lg mb-2 text-primary">Meet Tayo Maduagwu, MSN, APRN, PMHNP-BC</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  A board-certified Psychiatric Mental Health Nurse Practitioner dedicated to helping adults feel emotionally supported, understood, and empowered. Tayo provides compassionate, evidence-based mental health care with a warm and patient-centered approach. With a holistic perspective, Tayo blends medication management with supportive therapy to help you achieve lasting wellness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white/95 flex justify-center">
        <div className="w-full max-w-[1200px] px-4 md:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-white bg-primary py-4 sm:py-5 md:py-6 rounded-lg">
              Our Services
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
              Comprehensive mental health services including psychiatric evaluation, medication management, therapy, and faith-informed care. From anxiety and depression to ADHD, PTSD, and specialized services like surgical clearance evaluations and PMHNP preceptorship.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group h-full" onClick={() => setSelectedService(service)}>
                <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/40 transition-colors duration-300" />
                </div>
                <CardContent className="p-3 sm:p-4 text-center">
                  <h3 className="font-heading font-semibold text-sm sm:text-base group-hover:text-primary transition-all line-clamp-2">{service.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Dialog */}
      <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto w-[95vw] sm:w-full">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl">
                  <selectedService.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary flex-shrink-0" />
                  <span className="break-words">{selectedService.title}</span>
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 sm:space-y-6">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">Overview</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3">Treatment Includes</h3>
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

      {/* Mission Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg overflow-hidden">
              <img
                src={missionImage}
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 md:mb-6">My Approach to Care</h2>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Supportive & Empathetic Care</h3>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    I believe in a supportive, empathetic, and collaborative approach. I take the time to truly listen and understand what you're experiencing, so you feel supported and never rushed. Together, we explore your symptoms, your goals, and what wellness means to you.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Virtual Care in Texas</h3>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    I provide comprehensive virtual psychiatric services to adults in Texas. Through secure telehealth appointments, you get access to professional mental health care from the comfort and privacy of your home. Quality mental health care should be accessible to everyone.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Your Journey Matters</h3>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    No matter where you are in your journey, we will work together with clarity, empathy, and hope. I provide evidence-based treatments including medication management, cognitive-behavioral therapy (CBT), and other proven therapeutic approaches tailored to your unique needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Women's Mental Health Specialties Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white/95 flex justify-center">
        <div className="w-full max-w-[1200px] px-4 md:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
              Top Specialties
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              I specialize in treating these conditions with evidence-based, compassionate care.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <ul className="space-y-2 text-xs sm:text-sm md:text-base text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                    <span>Anxiety Disorders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                    <span>ADD/ADHD</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                    <span>Depression</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                    <span>Maternal Mental Health</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <ul className="space-y-2 text-xs sm:text-sm md:text-base text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                    <span>Post-Traumatic Stress Disorder (PTSD)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                    <span>Bipolar Disorder</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                    <span>Sleep Disorders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary font-bold flex-shrink-0">•</span>
                    <span>Stress Management</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 md:mt-10 bg-blue-50 border-l-4 border-primary p-4 sm:p-5 md:p-6 rounded">
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                I provide kind and nonjudgmental, fast-focused care from the comfort of your home. My approach integrates evidence-based techniques to help you achieve lasting change. I believe in meeting you exactly where you are, using a whole-person approach that addresses not just symptoms but the root causes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white/95 to-blue-50 flex justify-center">
        <div className="w-full max-w-[1200px] px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">Insurance & Booking Made Easy</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              We accept most insurances. Verify your coverage instantly and book your appointment through GrowTherapy.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white border-2 border-primary/20 rounded-lg p-6 md:p-8 mb-6 md:mb-8">
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-primary mb-3">Verify Insurance on GrowTherapy</h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold flex-shrink-0">✓</span>
                      <span>Check coverage instantly - no waiting on hold</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold flex-shrink-0">✓</span>
                      <span>See your copay and out-of-pocket costs upfront</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold flex-shrink-0">✓</span>
                      <span>Book your appointment 24/7 online</span>
                    </li>
                  </ul>
                </div>
                <a href="https://growtherapy.com/book-appointment?prsid=6nwhh2q28y21&ref=grow&setting=Virtual" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3">
                    Verify & Book on GrowTherapy
                  </Button>
                </a>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                <strong>Don't see your insurance listed?</strong> We work with most major providers. Contact us directly or check on GrowTherapy to verify coverage.
              </p>
              <Link to="/insurance" className="inline-block">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3">
                  Learn More About Insurance
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white/95 flex justify-center">
        <div className="w-full max-w-[1200px] px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-center mb-8 md:mb-12 text-primary">
            Our Location
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <h3 className="font-heading font-semibold text-lg md:text-xl mb-4">WillMind Mental Health</h3>
                    <div className="space-y-3 text-xs sm:text-sm md:text-base text-muted-foreground">
                      <p><strong>Location:</strong></p>
                      <p>Austin, Texas 78759<br />Online Only<br /></p>
                      <p>
                        <strong>Phone:</strong> <a href="tel:5125991462" className="hover:text-primary transition-colors">(512) 599-1462</a>
                      </p>
                      <p>
                        <strong>Email:</strong> <a href="mailto:info@willmindmentalhealth.com" className="hover:text-primary transition-colors break-all">info@willmindmentalhealth.com</a>
                      </p>
                      <p>
                        <strong>Service Area:</strong> Virtual Care in Texas
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg md:text-xl mb-4">Availability</h3>
                    <div className="space-y-2 text-xs sm:text-sm md:text-base text-muted-foreground">
                      <p>Available Online Only</p>
                      <p>Telehealth Appointments</p>
                      <p>Accepting New Clients in Texas</p>
                      <p className="pt-2 text-xs italic">Call (512) 599-1462 for scheduling details</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 md:mt-8">
                  <Link to="/contact" className="block sm:inline-block">
                    <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base">
                      Book Online
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications & Booking Badges Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white/95 to-primary/5 flex justify-center">
        <div className="w-full max-w-[1200px] px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary mb-2">
              Trusted Platforms
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
              Certified and verified for your peace of mind
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center justify-center max-w-2xl mx-auto">
            {/* Grow Therapy Badge */}
            <a
              href="https://growtherapy.com/book-appointment?prsid=6nwhh2q28y21&ref=grow&setting=Virtual"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 w-full sm:w-auto"
            >
              <div className="group bg-white border-2 border-primary/20 rounded-lg p-6 md:p-8 hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center justify-center h-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fdf7e75028bff4b959bd5bdef48ded5a3%2F1e4cf4b9b50a4bdbac57f0e5b04f57b8?format=webp&width=800"
                  alt="GrowTherapy - Book Appointment"
                  className="h-12 md:h-14 object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-xs md:text-sm font-semibold text-primary text-center">
                  Book on GrowTherapy
                </span>
              </div>
            </a>

            {/* Rula Badge */}
            <a
              href="https://www.rula.com/providers/FL/1437908365"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 w-full sm:w-auto"
            >
              <div className="group bg-white border-2 border-primary/20 rounded-lg p-6 md:p-8 hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center justify-center h-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fdf7e75028bff4b959bd5bdef48ded5a3%2F4fe955323953440bbc4d81d5f820c63e?format=webp&width=800"
                  alt="Rula - Certified Provider"
                  className="h-12 md:h-14 object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-xs md:text-sm font-semibold text-primary text-center">
                  View on Rula
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
