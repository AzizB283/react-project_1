import React from "react";
import { Button, Space } from "antd";
import { useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import axios from "axios";

function Prompts() {
  //   const [loadings, setLoadings] = useState([]);
  const [data, setData] = useState();

  const myStyle = {
    overflowY: "scroll",
    maxHeight: "65vh",
    width: "40vw",
    fontSize: "16px",
    margin: "30px",
  };

  //   const enterLoading = (index) => {
  //     setLoadings((prevLoadings) => {
  //       const newLoadings = [...prevLoadings];
  //       newLoadings[index] = true;
  //       return newLoadings;
  //     });

  //     setTimeout(() => {
  //       setLoadings((prevLoadings) => {
  //         const newLoadings = [...prevLoadings];
  //         newLoadings[index] = false;
  //         return newLoadings;
  //       });
  //     }, 6000);
  //   };

  const url = "http://192.168.1.76:3000";
  const fetchData = async () => {
    await axios.post(url).then((res) => setData(res.data.answer));
  };

  return (
    <>
      <h1>Prompts</h1>
      <div style={myStyle}>
        <h2>Prompt 1</h2>
        <p>
          You are a Cybersecurity Expert that specializes in risk management for
          enterprise organizations. The following text represents a conversation
          between multiple cybersecurity professionals. They have come together
          to discuss a problem. The problem is in the context of the
          cybersecurity domain. Cybersecurity professionals work for a large ITO
          service organization like Accenture, IBM. The name of the large
          service organization will be known as Acme Inc.
        </p>
        <p>Analyze then identify the main topic and do the following:</p>
        <ul>
          <li>Structure the conversation as a problem statement.</li>
          <li>
            Follow the Problem-solving Framework; DMAIC and incorporate the MECE
            Principle
          </li>
          <li>
            Ensure the Problem Statement establishes a comprehensive summary of
            the situation.
          </li>
        </ul>
        <p>Give answer with respect to below format in 100 words for each.</p>
        <p>Problem statement:</p>
        <p>Situation:</p>
        <h2>Prompt 2</h2>
        <p>Outline what challenges exist based on Specific Business Context</p>
        <p>1. the relevant industry of Acme Inc</p>
        <p>
          2. Given the (X) geographical location (if identified in the
          conversation)
          <br />▪ Top Challenges Checklist
        </p>
        <p>
          1. Check if there are any applicable US legal requirements.
          <ul>
            <li>if yes, provide a succinct explanation in one line.</li>
            <li>
              In addition, to the 1-line, provide a comprehensive explanation.
            </li>
            <li>
              If no, then respond with “There are no legal concerns” and move on
              to the next challenge in the list.
            </li>
          </ul>
          2. Check if there are any applicable regulatory requirements.
          <ul>
            <li>if yes, provide a succinct explanation in one line.</li>
            <li>
              In addition, to the 1-line, provide a comprehensive explanation.
            </li>
            <li>
              If no, then respond with “There are no regulatory concerns” and
              move on to the next challenge in the list.
            </li>
          </ul>
          3. Check if there are any applicable financial requirements.
          <ul>
            <li>if yes, provide a succinct explanation in one line.</li>
            <li>
              n addition, to the 1-line, provide a comprehensive explanation.
            </li>
            <li>
              If no, then respond with “There are no financial concerns” and
              move on to the next challenge in the list.
            </li>
          </ul>
        </p>
        If any, give answer with respect to below format in 100 words for each.{" "}
        <br />
        <br />
        challenges: <br />
        legal: <br />
        regulatory: <br />
        financial:
        <h2>Prompt 3</h2>
        <p>
          Based on the challenges, outline what the risk associated with these
          challenges. Based on the challenges and the risks outline the impact
          or consequences associated with each challenge and risk. Based on the
          challenges, the risk and the impact or consequences, recommend three
          solutions that can pragmatically improve the situation. <br />
          <br />
          Risk: <br />
          Impact/Consequences: <br />
          Solutions:
        </p>
        <h2>Prompt 4</h2>
        <p>
          For each solution that is proposed do the following:
          <ol type="1">
            <li>
              Describe each solution using a succinct but compelling
              description, with a maximum of three lines.
            </li>
            <li>
              In addition to the succinct and compelling description, for each
              solution provide a comprehensive description that outlines the
              three key elements of an effective solution, according to:
            </li>
          </ol>
          -the technology <br />
          - the process <br />
          - the people <br />
          <br />
          Solution1: <br />
          Solution2: <br />
          Solution3:
        </p>
      </div>

      <div>
        <Space>
          <Button type="primary" icon={<DownloadOutlined />}>
            Download File
          </Button>

          <Button
            type="primary"
            // loading={loadings[0]}
            onClick={fetchData}
          >
            Get Output
          </Button>
        </Space>
      </div>

      <div>{data}</div>
    </>
  );
}

export default Prompts;
