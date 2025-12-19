"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroLogoBillboardSplitImage from '@/components/sections/hero/HeroLogoBillboardSplitImage';
import SplitAbout from '@/components/sections/about/SplitAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import BlogCardTen from '@/components/sections/blog/BlogCardTen';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Globe, AlertTriangle, Globe2, Heart, Users, MapPin, LogOut, AlertCircle, ExternalLink } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="largeSizeMediumTitles"
      background="circleGradient"
      cardStyle="gradient-radial"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen 
          navItems={[
            { name: "About", id: "about" },
            { name: "Facts", id: "facts" },
            { name: "Updates", id: "updates" },
            { name: "Help", id: "help" },
            { name: "Resources", id: "resources" }
          ]}
          brandName="Ukraine Information"
          bottomLeftText="Stay informed"
          bottomRightText="Support Ukraine"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplitImage 
          logoText="UKRAINE"
          description="Understand the ongoing situation in Ukraine. Access verified information, factual updates, and ways to support the Ukrainian people during this critical time."
          buttons={[
            { text: "Learn the Facts", href: "#facts" },
            { text: "How to Help", href: "#help" }
          ]}
          layoutOrder="default"
          splitImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766138827427-su18wdqv.jpg"
          splitImageAlt="Ukrainian flag"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766151789609-jof3155g.jpg"
          imageAlt="Ukraine landscape"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout 
          title="Understanding the Situation in Ukraine"
          description="Ukraine is facing unprecedented challenges. This section provides essential context about the country, its people, and the current humanitarian crisis."
          tag="Context"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          bulletPoints={[
            {
              title: "Geographic Context",
              description: "Ukraine is located in Eastern Europe with a population of over 40 million people. The country has been actively rebuilding and developing as an independent nation.",
              icon: Globe
            },
            {
              title: "Current Challenges",
              description: "The nation faces significant military and humanitarian pressures affecting millions of citizens, infrastructure, and the regional stability of Europe.",
              icon: AlertTriangle
            },
            {
              title: "Global Impact",
              description: "The situation in Ukraine affects global security, energy markets, food supplies, and has displaced millions seeking refuge in neighboring countries.",
              icon: Globe2
            },
            {
              title: "Resilience and Hope",
              description: "Despite challenges, Ukrainian people continue to demonstrate remarkable resilience, determination, and hope for a peaceful future.",
              icon: Heart
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766138831995-01c7r7mz.jpg"
          imageAlt="Map of Ukraine"
          imagePosition="right"
        />
      </div>

      <div id="facts" data-section="facts">
        <MetricCardOne 
          title="Key Facts and Figures"
          description="Essential statistics about Ukraine, its population, and the ongoing humanitarian situation"
          tag="Critical Data"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          metrics={[
            {
              id: "1",
              value: "44M",
              title: "Population",
              description: "Pre-conflict population of Ukraine",
              icon: Users
            },
            {
              id: "2",
              value: "6M+",
              title: "Internally Displaced",
              description: "People displaced within Ukraine",
              icon: MapPin
            },
            {
              id: "3",
              value: "6M+",
              title: "Refugees",
              description: "Ukrainians who fled to neighboring countries",
              icon: LogOut
            },
            {
              id: "4",
              value: "Ongoing",
              title: "Humanitarian Crisis",
              description: "Urgent need for medical supplies and aid",
              icon: AlertCircle
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
        />
      </div>

      <div id="updates" data-section="updates">
        <BlogCardTen 
          title="Latest Updates and News"
          description="Stay informed with verified news and developments about Ukraine"
          tag="News"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          blogs={[
            {
              id: "1",
              title: "Humanitarian Needs Continue to Grow",
              subtitle: "International organizations report escalating demand for medical supplies, food, and shelter across Ukraine",
              tags: ["Humanitarian", "Crisis", "Aid"]
            },
            {
              id: "2",
              title: "Reconstruction Efforts Begin in Liberated Areas",
              subtitle: "Communities work to rebuild infrastructure and restore essential services in recovered territories",
              tags: ["Reconstruction", "Infrastructure", "Hope"]
            },
            {
              id: "3",
              title: "Global Support and Solidarity",
              subtitle: "Nations worldwide continue providing military aid, humanitarian assistance, and diplomatic support to Ukraine",
              tags: ["International", "Support", "Solidarity"]
            },
            {
              id: "4",
              title: "Ukrainian Refugees Find Support Abroad",
              subtitle: "Host countries implement integration programs to help displaced Ukrainians rebuild their lives",
              tags: ["Refugees", "Integration", "Support"]
            }
          ]}
          animationType="slide-up"
          variant="card"
        />
      </div>

      <div id="help" data-section="help">
        <FeatureCardSixteen 
          title="How You Can Make a Difference"
          description="There are meaningful ways to support Ukraine and its people during this critical time"
          tag="Take Action"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          negativeCard={{
            title: "Without Action",
            items: [
              "Misinformation spreads unchecked",
              "Humanitarian needs go unmet",
              "Communities lack essential resources",
              "Isolation continues for affected populations"
            ]
          }}
          positiveCard={{
            title: "With Your Support",
            items: [
              "Spread verified information and combat misinformation",
              "Donate to established humanitarian organizations",
              "Advocate for continued international support",
              "Connect with and welcome Ukrainian refugees",
              "Support Ukraine-related causes and initiatives"
            ]
          }}
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen 
          title="Stories from Ukraine"
          description="Real experiences and perspectives from people affected by and working to help in the crisis"
          tag="Human Stories"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Maria K.",
              handle: "@maria_ukraine",
              testimonial: "Humanitarian workers risked everything to bring medical supplies to our community. Their courage reminded us that the world still cares.",
              rating: 5,
              icon: Heart
            },
            {
              id: "2",
              name: "Dr. Vasyl L.",
              handle: "@dr_vasyl",
              testimonial: "International aid organizations have been instrumental in supporting our hospitals. Without their help, many lives would have been lost.",
              rating: 5,
              icon: Heart
            },
            {
              id: "3",
              name: "Olena S.",
              handle: "@olena_refugee",
              testimonial: "We found safety abroad thanks to countries that opened their borders. Now we work to help others and share our story.",
              rating: 5,
              icon: Heart
            },
            {
              id: "4",
              name: "Ambassador Dmytro P.",
              handle: "@ambassador_ukraine",
              testimonial: "The solidarity shown by nations and individuals worldwide has been extraordinary. Together, we will rebuild Ukraine.",
              rating: 5,
              icon: Heart
            }
          ]}
          showRating={false}
          animationType="slide-up"
          containerStyle="default"
        />
      </div>

      <div id="resources" data-section="resources">
        <ContactFaq 
          ctaTitle="Get Involved"
          ctaDescription="Learn more about verified organizations working to support Ukraine and how you can contribute."
          ctaButton={{ text: "Explore Organizations", href: "#faq" }}
          ctaIcon={ExternalLink}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          faqs={[
            {
              id: "1",
              title: "Which organizations are verified and trustworthy?",
              content: "Look for organizations with established track records, transparency reports, and international recognition. The UN Office for Coordination of Humanitarian Affairs (OCHA) maintains lists of verified aid organizations working in Ukraine."
            },
            {
              id: "2",
              title: "How can I donate safely to help Ukraine?",
              content: "Donate through established organizations like Red Cross, World Central Kitchen, UNICEF, or direct government channels. Always verify the organization's legitimacy before donating to ensure your contribution reaches those in need."
            },
            {
              id: "3",
              title: "What types of aid are most needed?",
              content: "Medical supplies, food, shelter materials, and fuel are critical needs. Monetary donations are often most effective as organizations can purchase items locally. Check current needs with major aid organizations for the most up-to-date information."
            },
            {
              id: "4",
              title: "How can I help if I cannot donate money?",
              content: "Share accurate information to combat misinformation, advocate for continued international support, volunteer with organizations helping refugees, or support Ukraine-related initiatives in your community."
            },
            {
              id: "5",
              title: "Where can I find verified, accurate news about Ukraine?",
              content: "Reputable sources include BBC, Reuters, Associated Press, Euromaidan Press, and official statements from international organizations. Be cautious of unverified social media content and always cross-reference information."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase 
          logoText="Ukraine Information"
          copyrightText="2025 Ukraine Awareness Portal. All rights reserved."
          columns={[
            {
              title: "Information",
              items: [
                { label: "About Ukraine", href: "about" },
                { label: "Key Facts", href: "facts" },
                { label: "Latest Updates", href: "updates" }
              ]
            },
            {
              title: "How to Help",
              items: [
                { label: "Ways to Support", href: "help" },
                { label: "Resources", href: "resources" },
                { label: "Organizations", href: "resources" }
              ]
            },
            {
              title: "Verified Sources",
              items: [
                { label: "UN Humanitarian Aid", href: "https://www.un.org" },
                { label: "Red Cross", href: "https://www.redcross.org" },
                { label: "Kyiv Post News", href: "https://www.kyivpost.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}