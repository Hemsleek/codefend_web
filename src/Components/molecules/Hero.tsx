import { TypeAnimation } from "react-type-animation";
import { services } from "../../constantData";
import { motion } from "framer-motion";
import { heroVariants } from "../../constantData/animationData";

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
            <motion.h1
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 5,
                delay: 0.3,
                ease: [0.5, 0.71, 1, 1.5],
              }}
              whileHover={{ scale: 1.2 }}
            >
              intel meets protection
            </motion.h1>
            <div className="flex flex-row flex-wrap">
              <span className="pr-2">We provide</span>
              <TypeAnimation
                sequence={services}
                style={{
                  fontSize: "1rem",
                  // fontWeight: "bold",
                }}
                wrapper="b"
                deletionSpeed={80}
                repeat={Infinity}
              />
              <p>
                to prevent business continuity disruption, reputational and
                monetary loss. To make this possible we employ a multifaceted
                approach that encompasses custom software and hardware,
                proactive threat monitoring, and a team of skilled experts,
                including researchers and informants.
              </p>
            </div>
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
