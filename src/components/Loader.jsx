import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: "14px",
          color: "black",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        {Math.round(progress)}%
      </p>
    </div>
  </Html>
  );
};

export default Loader;
