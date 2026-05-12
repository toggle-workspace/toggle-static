export default function Content() {
  return (
    <section className="bg-background @container py-24">
      <div className="@2xl:grid-cols-2 mx-auto grid max-w-3xl gap-6 px-6">
        <h2 className="text-balance font-serif text-4xl font-medium">
          One Growth System Across Every Channel
        </h2>

        <div className="flex flex-col gap-6">
          <p className="text-muted-foreground">
            <span className="text-foreground font-medium">
              Integrated by design.
            </span>{" "}
            Paid media, creative, SEO, email, and analytics don&apos;t work in
            silos here — they work as one. When every channel is aligned under a
            single strategy, they stop competing and start compounding.
          </p>

          <p className="text-muted-foreground">
            <span className="text-foreground font-medium">
              Senior-led execution.
            </span>{" "}
            You work directly with experienced operators who own both the
            strategy and the doing. Faster decisions, fewer handoffs, and a team
            that&apos;s as invested in your growth as you are.
          </p>

          <p className="text-muted-foreground">
            <span className="text-foreground font-medium">
              Built to scale.
            </span>{" "}
            We build systems that get more efficient the longer they run — so
            your cost per acquisition drops while your revenue grows.
          </p>
        </div>
      </div>
    </section>
  );
}
