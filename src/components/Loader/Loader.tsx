import React from "react";
import { Spin } from "antd";
import { LoaderPropTypes } from "./types";
import { LoadingOutlined } from "@ant-design/icons";
import "./Loader.css";

const Loader: React.FC<LoaderPropTypes> = (props) => {
  const { fontSize, text } = props;
  return (
    <div className="loader--generic">
      <Spin
        indicator={
          <LoadingOutlined style={{ fontSize: fontSize || 30 }} spin />
        }
        tip={text}
      />
    </div>
  );
};

export default Loader;
