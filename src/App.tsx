import React, { useState } from "react";
import FileUpload from "./FileUpload";
import ModelViewer from "./ModelViewer";

const App = () => {
  return (
    <div style={{ height: "100vh" }}>
      <ModelViewer />
    </div>
  );
};

export default App;
