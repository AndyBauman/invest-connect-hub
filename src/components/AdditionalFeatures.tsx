
import React from 'react';
import {
  Search, Database, MapPin, Map, Route, Target, Users, List, 
  Tag, MessageSquare, Send, UserPlus, Share, TrendingUp,
  Lightbulb, Brain, ChartLine, CloudOff, Mic, Upload, Download,
  Locate, Radar, Group, Mail, Phone, Filter
} from 'lucide-react';

const FeatureSection = ({ 
  title, 
  description, 
  features, 
  icon: Icon, 
  color = "blue" 
}: { 
  title: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  color?: "blue" | "purple" | "green" | "amber" | "rose" | "indigo" | "cyan";
}) => {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-700",
    purple: "bg-purple-100 text-purple-700",
    green: "bg-green-100 text-green-700",
    amber: "bg-amber-100 text-amber-700",
    rose: "bg-rose-100 text-rose-700",
    indigo: "bg-indigo-100 text-indigo-700",
    cyan: "bg-cyan-100 text-cyan-700",
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-start mb-4">
          <div className={`p-3 rounded-full ${colorClasses[color]} mr-4`}>
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-1">{title}</h3>
            <p className="text-slate-600">{description}</p>
          </div>
        </div>
        <ul className="space-y-3 mt-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${colorClasses[color]}`}>
                  <span className="text-xs">✓</span>
                </div>
              </div>
              <span className="text-slate-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const AdditionalFeatures = () => {
  const featureSections = [
    {
      title: "Property Lookup & Data Access",
      description: "Comprehensive data on properties and owners across the US.",
      icon: Database,
      color: "blue",
      features: [
        "MLS Comps & Tax/Lien Data: Pull property valuation, ownership, and tax information.",
        "Parcel & Owner Data: Access property and owner records for 95% of U.S. properties.",
        "Skip Tracing: Instantly fetch owner contact details, including phone numbers and emails."
      ]
    },
    {
      title: "Mapping & Tracking System",
      description: "Advanced location tracking and visualization tools.",
      icon: Map,
      color: "green",
      features: [
        "GPS Route Tracking: Tracks driving routes in real-time to prevent duplicate searches.",
        "Virtual Driving Mode: Uses Google Streetview to allow for remote property scouting.",
        "Custom Route Planning: Optimizes the most efficient driving paths based on property density.",
        "Heat Mapping: Highlights high-probability distressed property areas."
      ]
    },
    {
      title: "Lead Management & CRM Integration",
      description: "Organize and track all your investment leads efficiently.",
      icon: Users,
      color: "purple",
      features: [
        "Lead Tagging & Notes: Organize properties with custom tags, notes, and follow-up reminders.",
        "Engagement History: Track communication and marketing efforts with property owners.",
        "Multi-Device Syncing: Sync lead lists in real time across multiple devices."
      ]
    },
    {
      title: "Direct Outreach & Marketing",
      description: "Streamlined communication tools for property owner outreach.",
      icon: Send,
      color: "amber",
      features: [
        "One-Click Skip Tracing: Quickly find property owner contact details.",
        "Direct Mail Campaigns: Automate postcard and letter sending to property owners.",
        "Pre-Built Mail Templates: Customizable designs for sending mail with owner-specific data.",
        "Text & Email Outreach: Integrated messaging to contact owners directly from the app."
      ]
    },
    {
      title: "Multi-User & Team Collaboration",
      description: "Tools for team coordination and performance tracking.",
      icon: Share,
      color: "indigo",
      features: [
        "Assign & Track Routes for Team Members: Ideal for scaling investors managing multiple drivers.",
        "Real-Time Team Performance Tracking: Monitor lead acquisition, time spent driving, and success rate."
      ]
    },
    {
      title: "AI-Powered Lead Scoring & Insights",
      description: "Intelligent analytics to identify the best investment opportunities.",
      icon: Brain,
      color: "rose",
      features: [
        "AI Deal Scoring: Automatically score properties based on distress signals and market trends.",
        "Market Trends & Comparisons: AI-driven insights to predict profitable deals.",
        "Data API Integrations: Pull data from Zillow, Redfin, and PropStream for additional insights."
      ]
    },
    {
      title: "Offline Mode & Voice Input",
      description: "Continue working efficiently even without internet connection.",
      icon: CloudOff,
      color: "cyan",
      features: [
        "Offline Lead Collection: Continue tracking leads even when offline, auto-sync when back online.",
        "Voice Command Input: Hands-free voice-to-text for adding property details while driving."
      ]
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-display font-semibold text-slate-900 mb-4">Core Features & Functionality</h2>
          <p className="text-lg text-slate-600">Powerful tools to streamline your real estate investment workflow.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureSections.map((section, index) => (
            <FeatureSection
              key={index}
              title={section.title}
              description={section.description}
              features={section.features}
              icon={section.icon}
              color={section.color as any}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalFeatures;
