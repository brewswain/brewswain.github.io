import { ArrowRight, CheckCircle2, Code, Github } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center bg-gradient-to-br from-white to-emerald-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="h-7 w-7 text-emerald-600" />
            <span className="text-xl font-extrabold tracking-tight">
              BleeTech
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="mailto:bleetech@protonmail.com"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-md text-sm font-medium transition-all hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      <main className="w-full flex justify-center flex-1 w-full flex flex-col items-center justify-center">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent -z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1)_0%,transparent_60%)] -z-10"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800 mb-2">
                  Software Engineering Experts
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  <span className="text-emerald-600">Innovative</span> Software
                  Engineering Consultancy
                </h1>
                <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">
                  Expert software development and technical consulting services
                  to help you build robust, scalable solutions.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4">
                  <Link
                    href="mailto:bleetech@protonmail.com"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-emerald-600 px-8 text-sm font-medium text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About/Services Section */}
        <section
          id="about"
          className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800 mb-2">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Who We Are
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We're a software engineering consultancy with expertise in
                  building scalable applications and solving complex technical
                  challenges.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <div className="space-y-8">
                <div id="services">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Services We Offer
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start p-4 rounded-lg border border-emerald-100 bg-emerald-50/50 hover:shadow-md transition-all">
                      <CheckCircle2 className="mr-3 h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg text-emerald-800">
                          Custom Software Development
                        </h4>
                        <p className="text-muted-foreground">
                          End-to-end development of tailored software solutions
                          to meet your specific business needs.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start p-4 rounded-lg border border-emerald-100 bg-emerald-50/50 hover:shadow-md transition-all">
                      <CheckCircle2 className="mr-3 h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg text-emerald-800">
                          Technical Consulting
                        </h4>
                        <p className="text-muted-foreground">
                          Expert advice on architecture, technology stack, and
                          best practices for your projects.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start p-4 rounded-lg border border-emerald-100 bg-emerald-50/50 hover:shadow-md transition-all">
                      <CheckCircle2 className="mr-3 h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg text-emerald-800">
                          Code Review & Optimization
                        </h4>
                        <p className="text-muted-foreground">
                          Thorough analysis of your existing codebase with
                          recommendations for improvements and optimizations.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section
          id="contact"
          className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-600 to-teal-700 text-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Let's Work Together
                </h2>
                <p className="max-w-[600px] text-emerald-50 md:text-xl">
                  Have a project in mind or need technical expertise? Get in
                  touch to discuss how we can help.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="mailto:bleetech@protonmail.com"
                  className="bg-white hover:bg-emerald-50 text-emerald-700 px-8 py-3 rounded-md text-sm font-medium inline-flex items-center shadow-lg hover:shadow-xl transition-all"
                >
                  Email Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0 bg-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-emerald-600" />
            <span className="text-lg font-bold">BleeTech</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BleeTech. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.github.com/brewswain"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-emerald-600 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
