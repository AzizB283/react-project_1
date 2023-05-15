import React, { useState } from "react";
import { Col, Divider, Row, Space, Typography, Button, Modal } from "antd";
import styles from "./content.module.css";
const { Paragraph } = Typography;

const style = {
  background: "#0092ff",
  padding: "8px 0",
};

function Content() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (e) => {
    e.preventDefault();
    const {
      target: {
        dataset: { modal },
      },
    } = e;
    if (modal) setIsModalOpen(modal);
    // setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Row gutter={[16, 24]} justify="space-evenly">
        <Col className="gutter-row" span={12}>
          <div className={styles.col}>
            <div className={styles.content}>
              <h2 className={styles.heading}>Problem Statement : </h2>
              <Paragraph
                ellipsis={{
                  rows: 3,
                  expandable: true,
                  symbol: "Show more",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Paragraph>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className={styles.col}>
            <div className={styles.content}>
              <h2 className={styles.heading}>Risks : </h2>
              <ul>
                <li>Risk 1 :</li>
                <li>Risk 2 :</li>
                <li>Risk 3 :</li>
                <li>Risk 4 :</li>
              </ul>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className={styles.col}>
            <div className={styles.content}>
              <h2 className={styles.heading}>Situations : </h2>
              {/* <Paragraph
                ellipsis={{
                  rows: 3,
                  expandable: true,
                  symbol: "Show more",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.vived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It
                was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Paragraph> */}

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                corrupti et? Necessitatibus accusamus quaerat, tenetur explicabo
                veritatis nesciunt voluptatibus reprehenderit.
              </p>
              <Button type="primary" onClick={showModal}>
                Show More
              </Button>

              <ModalTwo
                title="Basic Modal"
                open={isModalOpen === "modal-situation"}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <p>Some contents...</p>
              </ModalTwo>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className={styles.col}>
            <div className={styles.content}>
              <h2 className={styles.heading}>Impact : </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                corrupti et? Necessitatibus accusamus quaerat, tenetur explicabo
                veritatis nesciunt voluptatibus reprehenderit.
              </p>
              <Button type="primary" onClick={showModal}>
                Show More
              </Button>

              <ModalOne
                title="Basic Modal"
                open={isModalOpen === "modal-impact"}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <p>Some contents Impact...</p>
              </ModalOne>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className={styles.col}>
            <div className={styles.content}>
              <h2 className={styles.heading}>Challanges : </h2>
              <Paragraph
                ellipsis={{
                  rows: 3,
                  expandable: true,
                  symbol: "Show more",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Paragraph>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className={styles.col}>
            <div className={styles.content}>
              <h2 className={styles.heading}>Solution : </h2>
              <Paragraph
                ellipsis={{
                  rows: 3,
                  expandable: true,
                  symbol: "Show more",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Paragraph>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Content;
