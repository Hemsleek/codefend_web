/* eslint-disable no-irregular-whitespace */
import { motion } from "framer-motion";
import {
  contactVariant,
  servicesVariant,
} from "../../constantData/animationData";

const Services = () => {
  return (
    <section className="our-services ">
      <motion.div
        variants={servicesVariant}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 1,
        }}
        className="container"
      >
        <div className="copy">
          <h2>our services</h2>
          <p>
            Codefend offers cybersecurity intel, research, and security
            services, all unified in a unique platform. This platform allows you
            to monitor your assets, infrastructure and your organization's
            security, while establishing direct communication between our
            professionals and your security team. Our conventional services
            include:
          </p>
        </div>
        <div className="list">
          <div className="left">
            <div className="item">
              <p>
                <b>web application security</b>
                <br />
                Codefend does manual and semi-automated penetration testing
                processes using commercial and proprietary security software to
                evaluate your web application from the perspective of anonymous
                and authenticated users.
              </p>
            </div>
            <div className="item">
              <p>
                <b>external network security</b>
                <br />
                Reinforce the robustness of your internal network with our
                specialized assessments. Our expertise ensures a stronger
                infrastructure, protecting not only your data but also the trust
                of your customers and employees.
              </p>
            </div>
            <div className="item">
              <p>
                <b>cloud infrastructure solutions</b>
                <br />
                Perform periodic reviews during the development of your software
                and before your product launch. Codefend will detect
                vulnerabilities and fix security issues in your application's to
                increase your defenses against potential threats.
              </p>
            </div>
            <div className="item">
              <p>
                <b>intel & research services</b>
                <br />
                Gather actionable intelligence with our open source and human
                Intelligence services. Improve your decision-making and stay
                ahead of the competition with our decentralized open source
                intel services.
              </p>
            </div>
            <div className="line"></div>
          </div>
          <div className="right">
            <div className="item">
              <p>
                <b>mobile application security</b>
                <br />
                Ensure the security of your mobile application with our
                decentralized mobile application pentest services. Protect your
                user’s sensitive information with our professional services.
              </p>
            </div>
            <div className="item">
              <p>
                <b>internal network security</b>
                <br />
                Reinforce the robustness of your internal network with our
                specialized assessments. Our expertise ensures a stronger
                infrastructure, protecting not only your data but also the trust
                of your customers and employees.
              </p>
            </div>
            <div className="item">
              <p>
                <b>source code review</b>
                <br />
                Perform periodic reviews during the development of your software
                and before your product launch. Codefend will detect
                vulnerabilities and fix security issues in your application's to
                increase your defenses against potential threats.
              </p>
            </div>
            <div className="item">
              <p>
                <b>advanced se</b>
                <br />
                Rise your company defenses against phishing, smishing and
                vishing attacks with our social engineering services. Improve
                your security posture and educate your employees with our social
                engineering services.
              </p>
            </div>
            <div className="line"></div>
          </div>
        </div>
      </motion.div>
      <div className="contact" id="contact">
        <div className="container">
          <motion.div
            variants={contactVariant}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1,
            }}
            className="copy"
          >
            <h2>contact</h2>
            <p>
              <b>business partners and alliances</b>
              <br />
              We invite you to get in touch with our representatives and
              business partners via phone or email in order to bring you the
              tailored assistance your business requires. Please do not attempt
              to harm our business teams.
            </p>
          </motion.div>
          <div className="contacts">
            <div className="item">
              <img src="/images/contact1.png" alt="" />
              <p>
                <b>Khalid Ayed</b>
                <br />
                riyadh, saudi arabia <br />
                <a href="mailto:khalid@codefend.com">
                  khalid@codefend.com
                </a>{" "}
                <br />
                +20 112 347 2840
              </p>
            </div>
            <div className="item">
              <img src="/images/contact2.png" alt="" />
              <p>
                <b>Juan Maxit</b>
                <br />
                buenos aires <br />
                <a href="mailto:maxit@codefend.com">maxit@codefend.com</a>{" "}
                <br />
                +54 911 3650 2089
              </p>
            </div>
            <div className="item">
              <img src="/images/contact3.png" alt="" />
              <p>
                <b>Zaki Qureshey</b>
                <br />
                hyderabad, india <br />
                <a href="mailto:zaki@codefend.com">zaki@codefend.com</a> <br />
                +91 9000 062 062
              </p>
            </div>
            <div className="item">
              <img src="/images/contact4.png" alt="" />
              <p>
                <b>Almerindo Graziano</b>
                <br />
                cyprus <br />
                <a href="mailto:almerindo@codefend.com">
                  almerindo@codefend.com
                </a>{" "}
                <br />
                +357 99 883 356
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
