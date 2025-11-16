import Image from "next/image";

export default function LandingPage() {
  const features = [
    {
      number: "01",
      title: "Upload your existing resume and fill out a short, simple form with a few preferences.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/settings-KoqDG1cDlfTVb4nlACtzsW5QevcXKQ.png",
      imageAlt: "Settings screen showing job preferences",
      reverse: false,
    },
    {
      number: "02",
      title: "We analyze your profile and show you a personalized feed of job openings that match your skills.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/search-tCIyu9rLbbVTjhsWjx11nF8xeS6MEf.png",
      imageAlt: "Job search results with match percentage",
      reverse: true,
    },
    {
      number: "03",
      title: "Our AI fine-tunes your resume to better align with each job - not by making things up, but by highlighting your strengths that matter most to ATS systems and hiring teams.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chat-giD3ZPsljgXCVYrKwvJzITU3haIfKN.png",
      imageAlt: "AI-optimized resume preview",
      reverse: false,
    },
    {
      number: "04",
      title: "With your tailored resume ready, you apply and wait for a response from the employer.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/success-fZ4JNgrR8m5XyMsVyLdsXqhQ0gUsHg.png",
      imageAlt: "Success screen showing resume submitted",
      reverse: true,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <header className="border-b border-border/40 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between py-4 px-[120px]">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Jndr logo" width={40} height={40} className="rounded" />
            <h1 className="text-2xl font-bold">Jndr - Jobs Finder</h1>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#what" className="text-sm text-muted-foreground hover:text-foreground">What</a>
            <a href="#how" className="text-sm text-muted-foreground hover:text-foreground">How</a>
            <a href="#why" className="text-sm text-muted-foreground hover:text-foreground">Why</a>
            <a href="#referral" className="text-sm text-muted-foreground hover:text-foreground">Referral</a>
            <a
              href="#start"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </a>
          </nav>
        </div>
      </header>

      <section id="what" className="container mx-auto px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-center text-3xl font-bold tracking-tight md:text-4xl">
            What is Jinder (Jndr)?
          </h2>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border-border bg-card p-8 shadow-sm border-2 ml-auto">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              There's no magic formula to land any job - your real skills matter. But at Jndr, we do everything we can to make sure your resume gets seen by the right people.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Jndr is built to speed up your job search and boost your chances of getting to the next interview stage.
            </p>
            <p className="mt-4 text-pretty font-medium">Good luck!</p>
          </div>
        </div>
      </section>

      <section id="how" className="container mx-auto px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-center text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            How does it work?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-center text-lg text-muted-foreground">
            Simple, efficient, and powered by AI to help you land your dream job
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-24 md:space-y-32">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`mx-auto max-w-5xl flex flex-col items-center gap-4 md:gap-8 lg:gap-10 ${
                  feature.reverse ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Content Side */}
                <div className="md:w-[520px] space-y-4">
                  <div className="inline-flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-primary-foreground shadow-lg">
                      {feature.number}
                    </span>
                  </div>
                  <h3 className="text-balance text-xl font-semibold leading-tight md:text-2xl lg:text-3xl">
                    {feature.title}
                  </h3>
                </div>

                {/* Image Side */}
                <div className="md:w-[280px] flex justify-center">
                  <div className="relative w-full max-w-[220px]">
                    {/* Phone Frame */}
                    <div className="relative overflow-hidden rounded-[3rem] border-8 border-foreground/10 bg-background shadow-2xl">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.imageAlt}
                        width={220}
                        height={440}
                        className="h-auto w-full"
                        priority={index < 2}
                      />
                    </div>
                    {/* Decorative Glow */}
                    <div
                      className="absolute -inset-4 -z-10 rounded-[4rem] bg-primary/5 blur-3xl"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="container mx-auto px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-center text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Why Jndr?
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex gap-3">
              <span className="text-xl">⏱️</span>
              <p className="flex-1 text-pretty leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Stop wasting time on endless scrolling.</strong> We curate only relevant jobs with clear, concise descriptions.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-xl">📱</span>
              <p className="flex-1 text-pretty leading-relaxed text-muted-foreground">
                <strong className="text-foreground">You need a unique resume for each role</strong> - that's the game. But now, you don't need a computer to do it. Our AI adapts your resume right from your phone.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-xl">💛</span>
              <p className="flex-1 text-pretty leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Want to keep track of where you applied</strong> and which resume you used? Maybe you're not ready to apply yet and want to prepare first? Just save any job to Favourites - it'll be there when you're ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="referral" className="container mx-auto px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-balance text-center text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Referral program
          </h2>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-sm">
            <p className="text-pretty leading-relaxed text-muted-foreground">Coming soon..</p>
          </div>
        </div>
      </section>

      <section id="start" className="container mx-auto px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 text-center md:p-12 lg:p-16">
            <h2 className="text-balance text-3xl font-bold md:text-4xl">
              Get Started in Web
            </h2>
            <p className="mx-auto mt-4 text-balance text-muted-foreground">
              No download required. Access instantly from any device
            </p>
            <button
              className="mt-8 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              Get Started in Web
            </button>
            
            <div className="mt-8 flex flex-col items-center gap-2">
              <div className="rounded-2xl border-4 border-primary/20 bg-white p-2">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="QR Code to access Jndr"
                  width={160}
                  height={160}
                  className="h-40 w-40"
                />
              </div>
              <p className="text-sm text-muted-foreground">Scan to open on the phone</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-[120px] py-8 md:flex-row">
          <a href="mailto:support@jndr.app" className="text-sm text-muted-foreground hover:text-foreground">
            support@jndr.app
          </a>
          {/* <div className="flex gap-8">
            <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms Of Use
            </a>
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </a>
          </div> */}
        </div>
      </footer>
    </main>
  );
}
