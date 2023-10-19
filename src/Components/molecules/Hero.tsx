const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="header">
          <div className="brand">
            <img src="/images/brand.png" alt="" />
          </div>
          <div className="menu">
            <a href="#contact" className="btn alt">
              contact
            </a>
            <a href="#" className="btn main">
              download
            </a>
          </div>
        </div>
        <div className="content">
          <div className="copy">
            <h1>intel meets protection</h1>
            <p>
              We provide <b>advanced information security services</b> to
              prevent business continuity disruption, reputational and monetary
              loss. To make this possible we employ a multifaceted approach that
              encompasses custom software and hardware, proactive threat
              monitoring, and a team of skilled experts, including researchers
              and informants.
            </p>
          </div>
          <div className="image">
            <img src="/images/hacker.png" alt="" />
          </div>
        </div>
        <div className="features">
          <ul>
            <li>unique tools</li>
            <li>cid spoofing</li>
            <li>SS7 interception</li>
            <li>web3 drainers</li>
            <li>web security</li>
            <li>unlimited free scans</li>
            <li>crackmapexecute</li>
            <li>impact & cobalt strike</li>
            <li>brute ratel</li>
            <li>private leaks</li>
            <li>the onion router</li>
            <li>Invisible Internet Project</li>
          </ul>
        </div>
      </div>
      <div className="bkg-2"></div>
    </section>
  );
};

export default Hero;
