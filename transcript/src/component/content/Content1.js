import React, { useEffect, useState, useRef } from "react";
import { Col, Row, Modal, Spin, Empty, Typography } from "antd";
import styles from "./content.module.css";
import axios from "axios";

const { Paragraph } = Typography;
function Content() {
  const [modals, setModals] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState({
    problem: false,
    risk: false,
    challenges: false,
    impact: false,
    solution: false,
  });
  const [showButton, setShowButton] = useState(true);

  // const url = "http://192.168.1.76:3000/fetch";
  const url = "";

  const noRender = useRef(false);

  useEffect(() => {
    if (!noRender.current) {
      axios
        .post(url + "/1")
        .then((res) => {
          setData((data) => [...data, res.data]);
          console.log(res.data);
          setLoading((prevLoading) => ({
            ...prevLoading,
            problem: false,
          }));

          axios.post(url + "/2").then((res) => {
            setData((data) => [...data, res.data]);
            setLoading((prevLoading) => ({
              ...prevLoading,
              challenges: false,
            }));
            axios.post(url + "/3").then((res) => {
              setData((data) => [...data, res.data]);
              setLoading((prevLoading) => ({
                ...prevLoading,
                risk: false,
              }));
              axios.post(url + "/4").then((res) => {
                setData((data) => [...data, res.data]);
                setLoading((prevLoading) => ({
                  ...prevLoading,
                  impact: false,
                }));
                axios.post(url + "/5").then((res) => {
                  setData((data) => [...data, res.data]);
                  setLoading((prevLoading) => ({
                    ...prevLoading,
                    solution: false,
                  }));
                  axios.post(url + "/6");
                });
              });
            });
          });
        })

        .catch((e) => {
          console.log(e);
        });
      noRender.current = true;
    }
  }, []);
  console.log(data);

  const showModal = (modalId) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalId]: true,
    }));
  };

  const handleOk = (modalId) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalId]: false,
    }));
  };

  const handleCancel = (modalId) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalId]: false,
    }));
  };

  return (
    <React.Fragment>
      <div className={styles.newdiv}>
        {/* {data.length !== 0 ? ( */}
        <Row gutter={[16, 24]} justify="space-evenly">
          <Col className="gutter-row" span={12} xs={24} xl={12}>
            <Spin size="large" spinning={loading.problem} tip="Loading...">
              <div className={styles.col}>
                <div className={styles.content}>
                  <h2 className={styles.heading}>Problem Statement</h2>

                  <Paragraph ellipsis={{ rows: 4 }}>
                    {data[0]?.problem_stmt}
                    {/* Char count 400 to put button
                    condition */}
                  </Paragraph>

                  {showButton && (
                    <button
                      className={styles.btn}
                      onClick={() => showModal("problem")}
                    >
                      Show More
                    </button>
                  )}

                  <Modal
                    title="Problem Statement"
                    open={modals["problem"]}
                    onOk={() => handleOk("problem")}
                    onCancel={() => handleCancel("problem")}
                    footer={null}
                    width={1000}
                  >
                    <p>{data[0]?.problem_stmt}</p>
                  </Modal>
                </div>
              </div>
            </Spin>
          </Col>

          <Col className="gutter-row" span={12} xs={24} xl={12}>
            <Spin size="large" spinning={loading.risk} tip="Loading...">
              <div className={styles.col}>
                <div className={styles.content}>
                  <h2 className={styles.heading}>Risks</h2>
                  <Paragraph ellipsis={{ rows: 4 }}>{data[2]?.risks}</Paragraph>
                  <div className={styles.btnstyle}>
                    <button
                      className={styles.btn}
                      onClick={() => showModal("risk")}
                    >
                      Show More
                    </button>
                  </div>
                  <Modal
                    title="Risks"
                    open={modals["risk"]}
                    onOk={() => handleOk("risk")}
                    onCancel={() => handleCancel("risk")}
                    footer={null}
                    width={1000}
                  >
                    <p>{data[2]?.risks}</p>
                  </Modal>
                </div>
              </div>
            </Spin>
          </Col>
          <Col className="gutter-row" span={12} xs={24} xl={12}>
            <Spin size="large" spinning={loading.problem} tip="Loading...">
              <div className={styles.col}>
                <div className={styles.content}>
                  <h2 className={styles.heading}>Situation</h2>
                  <Paragraph ellipsis={{ rows: 4 }}>
                    {data[0]?.situation}
                  </Paragraph>
                  <button
                    className={styles.btn}
                    onClick={() => showModal("situation")}
                  >
                    Show More
                  </button>
                  <Modal
                    title="Situation"
                    open={modals["situation"]}
                    onOk={() => handleOk("situation")}
                    onCancel={() => handleCancel("situation")}
                    footer={null}
                    width={1000}
                  >
                    <p>{data[0]?.situation}</p>
                  </Modal>
                </div>
              </div>
            </Spin>
          </Col>
          <Col className="gutter-row" span={12} xs={24} xl={12}>
            <Spin size="large" spinning={loading.impact} tip="Loading...">
              <div className={styles.col}>
                <div className={styles.content}>
                  <h2 className={styles.heading}>Impact</h2>
                  <Paragraph ellipsis={{ rows: 4 }}>
                    {data[3]?.impacts}
                  </Paragraph>
                  <button
                    className={styles.btn}
                    onClick={() => showModal("impact")}
                  >
                    Show More
                  </button>
                  <Modal
                    title="Impact"
                    open={modals["impact"]}
                    onOk={() => handleOk("impact")}
                    onCancel={() => handleCancel("impact")}
                    footer={null}
                    width={1000}
                  >
                    <p>{data[3]?.impacts}</p>
                  </Modal>
                </div>
              </div>
            </Spin>
          </Col>
          <Col className="gutter-row" span={12} xs={24} xl={12}>
            <Spin size="large" spinning={loading.challenges} tip="Loading...">
              <div className={styles.col}>
                <div className={styles.content}>
                  <h2 className={styles.heading}>Challenges</h2>
                  <Paragraph ellipsis={{ rows: 4 }}>
                    {data[1]?.challenges}
                  </Paragraph>
                  <button
                    className={styles.btn}
                    onClick={() => showModal("challenges")}
                  >
                    Show More
                  </button>
                  <Modal
                    title="Challenges"
                    open={modals["challenges"]}
                    onOk={() => handleOk("challenges")}
                    onCancel={() => handleCancel("challenges")}
                    footer={null}
                    width={1000}
                  >
                    <p>{data[1]?.challenges}</p>
                  </Modal>
                </div>
              </div>
            </Spin>
          </Col>
          <Col className="gutter-row" span={12} xs={24} xl={12}>
            <Spin size="large" spinning={loading.solution} tip="Loading...">
              <div className={styles.col}>
                <div className={styles.content}>
                  <h2 className={styles.heading}>Solution</h2>
                  <Paragraph ellipsis={{ rows: 4 }}>
                    {data[4]?.solutions}
                  </Paragraph>
                  <button
                    className={styles.btn}
                    onClick={() => showModal("solution")}
                  >
                    Show More
                  </button>
                  <Modal
                    title="Solution"
                    open={modals["solution"]}
                    onOk={() => handleOk("solution")}
                    onCancel={() => handleCancel("solution")}
                    footer={null}
                    width={1000}
                  >
                    <p>{data[4]?.solutions}</p>
                  </Modal>
                </div>
              </div>
            </Spin>
          </Col>
        </Row>
        {/* ) : (
          <Empty />
        )} */}
      </div>
    </React.Fragment>
  );
}
export default Content;
