import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { BackgroundElements } from "@/components/effects/BackgroundElements";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohitrajdeo.in"),
  title: {
    default: "Mohit Raj Deo | Principal Systems Architect & Creator of NEPHIS",
    template: "%s | Mohit Raj Deo",
  },
  description:
    "Official portfolio of Mohit Raj Deo — Principal Systems Architect & Creator of NEPHIS (nephis.theeducode.com). Architecting sub-38ms execution engines, zero-copy database branching, and Linux KVM microVMs. Published Patent #202511089783.",
  keywords: [
    "Mohit Raj Deo",
    "Mohit Raj",
    "Mohit Raj Dev",
    "Principal Systems Architect",
    "Creator of NEPHIS",
    "nephis.theeducode.com",
    "mohitrajdeo.in",
    "mohit@mohitrajdeo.in",
    "Linux KVM MicroVMs",
    "Database Branching",
    "XFS Reflink",
    "Distributed Systems Architect",
    "Lovely Professional University",
    "Eduniketan",
    "TheEduCode",
    "NEPHIS",
    "Patent 202511089783",
    "Judge0",
    "PostgreSQL",
    "Redis",
    "Rust",
  ],
  authors: [{ name: "Mohit Raj Deo", url: "https://mohitrajdeo.in" }],
  creator: "Mohit Raj Deo",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mohit Raj Deo | Principal Systems Architect & Creator of NEPHIS",
    description:
      "Portfolio of Mohit Raj Deo — Principal Systems Architect & Creator of NEPHIS (nephis.theeducode.com). Architecting high-speed execution engines and zero-copy database branching.",
    url: "https://mohitrajdeo.in",
    siteName: "Mohit Raj Deo Entity Home",
    images: [
      {
        url: "/avatar.jpeg",
        width: 800,
        height: 800,
        alt: "Mohit Raj Deo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Raj Deo | Principal Systems Architect & Creator of NEPHIS",
    description:
      "Principal Systems Architect & Creator of NEPHIS (nephis.theeducode.com) | NEPHIS / TheEduCode | Published Patent #202511089783",
    images: ["/avatar.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohit Raj Deo",
  alternateName: ["Mohit Raj", "MRD"],
  url: "https://mohitrajdeo.in",
  image: "https://mohitrajdeo.in/avatar.jpeg",
  email: "mohit@mohitrajdeo.in",
  jobTitle: "Principal Systems Architect & Creator of NEPHIS",
  worksFor: {
    "@type": "Organization",
    name: "NEPHIS (TheEduCode / Eduniketan Pvt Ltd)",
    url: "https://nephis.theeducode.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Lovely Professional University",
    location: "Phagwara, Punjab, India",
  },
  sameAs: [
    "https://mohitrajdeo.in",
    "https://nephis.theeducode.com",
    "https://github.com/MOHITRAJDEO12345",
    "https://www.linkedin.com/in/mohit-raj-deo/",
    "https://dev.to/mohit_raj_deo13158920",
    "https://www.kaggle.com/mohitrajdeo",
    "https://leetcode.com/u/edgrfrtfqa/",
    "https://auth.geeksforgeeks.org/user/mohitrajdeoidn2/",
  ],
  knowsAbout: [
    "Linux KVM MicroVMs",
    "PostgreSQL XFS Reflink Branching",
    "Sub-Millisecond Code Execution",
    "eBPF Kernel Bypass",
    "Deterministic State Simulation",
    "Distributed Systems",
    "Rust Systems Programming",
    "System Design",
    "Machine Learning & Isolation Forest",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`} style={{ scrollBehavior: "smooth" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased min-h-screen relative flex flex-col bg-space-900 text-foreground overflow-x-hidden selection:bg-accent-cyan/30">
        <div className="noise-bg pointer-events-none" />
        <CustomCursor />
        <BackgroundElements />
        <Navbar />
        <main className="flex-grow pt-24 pb-12">
          {children}
        </main>
      </body>
    </html>
  );
}
