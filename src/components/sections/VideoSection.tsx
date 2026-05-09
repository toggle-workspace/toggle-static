export function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-wrapper">
        <img src="https://picsum.photos/seed/videobanner/1400/600" alt="Video banner" />
        <div className="video-overlay" />
        <button className="play-btn" aria-label="Play showreel">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none">
            <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
          </svg>
        </button>
        <div className="video-caption">
          We design brands, digital experiences, and products that move people
          and create meaningful connections across every platform.
        </div>
      </div>
    </section>
  )
}
