"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [list, setList] = useState<any[]>([]);

  // base API url — change if necessary
  const API_BASE = "http://localhost:4000";

  useEffect(() => {
    loadList();
  }, []);

  async function loadList() {
    try {
      const res = await fetch(`${API_BASE}/api/contact`);
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      const json = await res.json();
      setList(json);
    } catch (err: any) {
      console.error("Load error:", err);
      setError("Could not load submissions");
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill name, email and message.");
      return;
    }

    if (formData.phone && !/^[0-9+\-\s()]{6,20}$/.test(formData.phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone_no: formData.phone.trim(),
        company: formData.company.trim(),
        message: formData.message.trim(),
      };

      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Server error");

      setSuccess("Message sent — thank you!");
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      await loadList(); // refresh list
      setTimeout(() => setSuccess(null), 4000);
    } catch (err: any) {
      console.error("Submit error:", err);
      setError(err.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: MapPin, title: "Headquarters", content: ["SCO-15", "Phase-9", "Mohali"] },
    { icon: Phone, title: "Phone", content: ["+91 98727-11088", "+91 98150-11088"] },
    { icon: Mail, title: "Email", content: ["General: contact@hminnovation.in"] },
    {
      icon: Clock,
      title: "Business Hours",
      content: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif mb-4">
              <span className="text-foreground">Get In </span>
              <span className="gold-text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Ready to start your project? Contact us today for a free consultation and discover how we can bring your
              vision to life.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card
                        key={index}
                        className="p-6 bg-background border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground mb-1">{info.title}</div>
                            <div className="text-muted-foreground text-sm">
                              {info.content.map((line, i) => (
                                <div key={i}>{line}</div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Card className="p-8 bg-background border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>

              {error && <div className="mb-4 p-3 bg-red-100 text-red-800 rounded">{error}</div>}
              {success && <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">{success}</div>}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="bg-card border-border focus:border-primary transition-colors" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required className="bg-card border-border focus:border-primary transition-colors" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(555) 123-4567" className="bg-card border-border focus:border-primary transition-colors" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" className="bg-card border-border focus:border-primary transition-colors" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." required rows={5} className="bg-card border-border resize-none focus:border-primary transition-colors" />
                </div>

                <Button type="submit" disabled={loading} className="w-full gold-gradient text-primary-foreground hover:opacity-90 transition-all hover:scale-[1.02]">
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </ScrollReveal>
        </div>

        {/* Submissions table (below the form) */}
        <div className="max-w-6xl mx-auto mt-10">
          <h3 className="text-xl font-semibold mb-4">Recent Submissions</h3>

          <div className="overflow-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-muted-foreground/10">
                  <th className="p-3 text-left">ID</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Company</th>
                  <th className="p-3 text-left">Message</th>
                  <th className="p-3 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {list.length === 0 && (
                  <tr>
                    <td colSpan={7} className="p-4 text-center text-muted-foreground">
                      No submissions yet
                    </td>
                  </tr>
                )}

                {list.map((row) => {
                  const id = row.id ?? row["s.no"];
                  return (
                    <tr key={id} className="border-t">
                      <td className="p-3">{id}</td>
                      <td className="p-3">{row.name}</td>
                      <td className="p-3">{row.email}</td>
                      <td className="p-3">{row.phone_no}</td>
                      <td className="p-3">{row.company}</td>
                      <td className="p-3">{row.message}</td>
                      <td className="p-3">{row.date ? new Date(row.date).toLocaleString() : "-"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
