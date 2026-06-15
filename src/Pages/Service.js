import {
  Container,
  PageContainer,
  FirmName,
  Divider,
  Breadcrumb,
  SectionTitle,
} from "../Styles/Style";
import "../App.css";

export const Service = () => {
  // eslint-disable-next-line no-undef
  const currentPath = globalThis.location?.pathname;
  return (
    <PageContainer>
      <Container>
        <FirmName>TECTON DESIGN LAB</FirmName>
        <Divider />

        <Breadcrumb>{`Home ${currentPath}`}</Breadcrumb>

        <SectionTitle>Services</SectionTitle>
        <section id="services">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">What we do</p>
                <h2>Three ways to work with us</h2>
              </div>
              <p className="section-note">
                Pick one stage, or hand over the whole project — design,
                execution, and the renovation work in between.
              </p>
            </div>

            <div className="service-grid">
              <div className="service-card">
                <span className="service-num">01 — Design</span>
                <h3>Architecture &amp; Interiors</h3>
                <p>
                  Concept design, working drawings, and interior planning for
                  homes, offices, and small commercial spaces. Where every
                  project begins.
                </p>
                <a href="/project" className="service-link">
                  Explore Design →
                </a>
              </div>
              <div className="service-card">
                <span className="service-num">02 — Build</span>
                <h3>Turnkey &amp; Site Supervision</h3>
                <p>
                  Full execution from foundation to finish, or hands-on guidance
                  for owners and contractors managing the build themselves.
                </p>
                <a href="/TurnKey" className="service-link">
                  Explore Build →
                </a>
              </div>
              <div className="service-card">
                <span className="service-num">03 — Renovate</span>
                <h3>Facade &amp; Retrofit</h3>
                <p>
                  Updating, extending, and re-skinning existing buildings —
                  facade renovations, additions, and material upgrades.
                </p>
                <a href="/Facade" className="service-link">
                  Explore Renovate →
                </a>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </PageContainer>
  );
};
