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
      reverse: true,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* FIXED HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="flex w-full items-center py-3 px-4 md:px-[110px] justify-evenly md:justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Jndr logo" width={40} height={40} className="rounded" />
            <h1 className="text-2xl font-bold">Jndr</h1>
          </div>
          <a
            href="#start"
            className="md:hidden h-9 inline-flex items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </a>
          <nav className="hidden md:flex items-center gap-4">
            <a href="#what" className="text-sm text-muted-foreground hover:text-foreground">What</a>
            <a href="#how" className="text-sm text-muted-foreground hover:text-foreground">How</a>
            <a href="#why" className="text-sm text-muted-foreground hover:text-foreground">Why</a>
            <a href="#referral" className="text-sm text-muted-foreground hover:text-foreground">Referral</a>
            <a
              href="#start"
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </a>
          </nav>
        </div>
      </header>

      {/* ADD TOP PADDING TO AVOID INITIAL OVERLAP (adjust if you want content hidden under header at start) */}
      <div className="pt-[68px]"> 
        <section id="what" className="container mx-auto px-4 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-balance text-center text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              What is Jinder (Jndr)?
            </h2>
            <div className="mx-auto mt-6 max-w-3xl rounded-2xl border-border bg-card p-6 shadow-sm border-2">
              <p className="text-pretty leading-relaxed text-muted-foreground">
                There's no magic formula to land any job - your real skills matter. But at Jndr, we do everything we can to make sure your resume gets seen by the right people.
              </p>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Jndr is built to speed up your job search and boost your chances of getting to the next interview stage.
              </p>
              <p className="mt-3 text-pretty font-medium">Good luck!</p>
            </div>
          </div>
        </section>

        <section id="how" className="container mx-auto px-4 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-balance text-center text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              How does it work?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-center text-lg text-muted-foreground">
              Simple, efficient, and powered by AI to help you land your dream job
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-16">
          <div className="mx-auto max-w-6xl">
            <div className="space-y-16 md:space-y-24">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`mx-auto max-w-5xl flex flex-col items-center gap-3 md:gap-6 lg:gap-8 ${
                    feature.reverse ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <div className="md:w-[500px] space-y-3">
                    <div className="inline-flex items-center gap-3">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold shadow-lg ${
                          feature.number === "04"
                            ? "bg-[#22C55E] text-white"
                            : "bg-primary text-primary-foreground"
                        }`}
                      >
                        {feature.number}
                      </span>
                    </div>
                    <h3 className="text-balance text-lg font-semibold leading-snug md:text-xl lg:text-2xl">
                      {feature.title}
                    </h3>
                  </div>
                  {feature.image && (
                    <div className="md:w-[260px] flex justify-center">
                      <div className="relative w-full max-w-[210px]">
                        <div className="relative overflow-hidden rounded-[2.7rem] border-8 border-foreground/10 bg-background shadow-xl">
                          <Image
                            src={feature.image}
                            alt={feature.imageAlt || ""}
                            width={210}
                            height={420}
                            className="h-auto w-full"
                            priority={index < 2}
                          />
                        </div>
                        <div
                          className="absolute -inset-3 -z-10 rounded-[3.5rem] bg-primary/5 blur-2xl"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="container mx-auto px-4 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-balance text-center text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Why Jndr?
            </h2>
            <div className="mx-auto mt-6 max-w-3xl space-y-5 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex gap-2">
                <span className="text-lg">⌚</span>
                <p className="flex-1 text-pretty leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Stop wasting time on endless scrolling.</strong> We curate only relevant jobs with clear, concise descriptions.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="text-lg">📱</span>
                <p className="flex-1 text-pretty leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">You need a unique resume for each role</strong> - that's the game. But now, you don't need a computer to do it. Our AI adapts your resume right from your phone.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="text-lg">🩵</span>
                <p className="flex-1 text-pretty leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Want to keep track of where you applied</strong> and which resume you used? Maybe you're not ready to apply yet and want to prepare first? Just save any job to Favourites - it'll be there when you're ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="referral" className="container mx-auto px-4 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-balance text-center text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Referral program
            </h2>
            <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="text-pretty leading-relaxed text-muted-foreground">Coming soon..</p>
            </div>
          </div>
        </section>

        <section id="start" className="container mx-auto px-4 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 text-center md:p-10 lg:p-12">
              <h2 className="text-balance text-3xl font-bold md:text-4xl">
                Get Started in Web
              </h2>
              <p className="mx-auto mt-3 text-balance text-muted-foreground">
                No download required. Access instantly from any device
              </p>
              <button
                className="mt-6 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                Get Started
              </button>
              {/* Added 'Or' text (desktop only) */}
              <p className="mt-4 hidden md:block text-sm text-muted-foreground">Or</p>
              <div className="mt-6 hidden md:flex flex-col items-center gap-2">
                <div className="rounded-2xl border-4 border-primary/20 bg-white p-2">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt="QR Code to access Jndr"
                    width={150}
                    height={150}
                    className="h-[150px] w-[150px]"
                  />
                </div>
                <p className="text-sm text-muted-foreground">Scan to open on the phone</p>
              </div>
            </div>
          </div>
        </section>
        <footer className="border-t border-border/40">
          <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-[110px] py-6 md:flex-row">
            <a href="mailto:support@jndr.app" className="text-sm text-muted-foreground hover:text-foreground">
              support@jndr.app
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
