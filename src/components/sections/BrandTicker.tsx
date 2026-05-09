const brands = ['afterpay', 'framer', 'plaid', 'medium', 'notion', 'gumroad']

function TickerItem({ name }: { name: string }) {
  return (
    <div className="ticker-item">
      <svg height="22" viewBox="0 0 140 32" fill="currentColor">
        <text x="0" y="24" fontFamily="monospace" fontSize="20" fontWeight="bold">{name}</text>
      </svg>
    </div>
  )
}

export function BrandTicker() {
  return (
    <section className="ticker-section">
      <div className="ticker-track-outer">
        <div className="ticker-track">
          {brands.map((b) => <TickerItem key={b} name={b} />)}
          {brands.map((b) => <TickerItem key={`${b}-2`} name={b} />)}
        </div>
      </div>
      <div className="ticker-fade-left" aria-hidden="true" />
      <div className="ticker-fade-right" aria-hidden="true" />
    </section>
  )
}
