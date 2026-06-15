import "../App.css";
import {
  PageContainer,
  Container,
  FirmName,
  Divider,
  Breadcrumb,
  SectionTitle,
} from "../Styles/Style";

export const Process = () => {
  // eslint-disable-next-line no-undef
  const currentPath = globalThis.location?.pathname;
  return (
    <PageContainer>
      <Container>
        <FirmName>TECTON DESIGN LAB</FirmName>
        <Divider />
        <Breadcrumb>{`Home ${currentPath}`}</Breadcrumb>
        <SectionTitle>Process</SectionTitle>
        <section className="process" id="process">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">How a project moves</p>
                <h2>From first call to handover</h2>
              </div>
            </div>

            <div className="process-list">
              <div className="process-item">
                <div className="process-num">01</div>
                <h3>Consult</h3>
                <p>
                  Site visit, brief, and feasibility — usually within a week of
                  first contact.
                </p>
              </div>
              <div className="process-item">
                <div className="process-num">02</div>
                <h3>Design</h3>
                <p>
                  Concept options, then detailed drawings once a direction is
                  agreed.
                </p>
              </div>
              <div className="process-item">
                <div className="process-num">03</div>
                <h3>Build</h3>
                <p>
                  Execution on site, with regular updates and quality checks.
                </p>
              </div>
              <div className="process-item">
                <div className="process-num">04</div>
                <h3>Handover</h3>
                <p>
                  Documentation, defect-fixing, and a walkthrough before keys
                  change hands.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </PageContainer>
  );
};
