import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  FaSearchPlus,
  FaSearchMinus,
  FaDownload,
  FaInfoCircle,
} from "react-icons/fa";

import html2canvas from "html2canvas";
import { useState } from "react";

export default function ChartView({ data }) {
  const [isZoomed, setIsZoomed] = useState(false);

  const chartData = Object.keys(data).map((date) => ({
    date,
    active: data[date].active,
    joined: data[date].joined,
  }));

  // ✅ ONLY ONE-TIME ZOOM
  const zoomIn = () => {
    if (!isZoomed) setIsZoomed(true);
  };

  const zoomOut = () => {
    if (isZoomed) setIsZoomed(false);
  };

  const downloadChart = () => {
    html2canvas(document.getElementById("zoom-wrapper")).then((canvas) => {
      const link = document.createElement("a");
      link.download = "chat-activity.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1000px",
        margin: "30px auto",
        background: "#f3f4f6",
        padding: "20px",
        borderRadius: "14px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 🔹 ICON BAR */}
      <div
        style={{
          position: "absolute",
          top: "18px",
          right: "20px",
          display: "flex",
          gap: "14px",
          cursor: "pointer",
          zIndex: 10,
          fontSize: "18px",
        }}
      >
        <FaSearchPlus title="Zoom In" onClick={zoomIn} />
        <FaSearchMinus title="Zoom Out" onClick={zoomOut} />
        <FaDownload title="Download" onClick={downloadChart} />
        <FaInfoCircle title="Info" />
      </div>

      {/* 🔹 ZOOM AREA (TITLE + BG + GRAPH) */}
      <div
        id="zoom-wrapper"
        style={{
          transform: isZoomed ? "scale(1.2)" : "scale(1)",
          transformOrigin: "top center",
          transition: "0.3s ease",
        }}
      >
        {/* 🔹 CENTER TITLE */}
        <h3
          style={{
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Last 7 Days Activity
        </h3>

        {/* 🔹 GRAPH */}
        <div style={{ width: "100%", height: "420px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} barSize={36}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="active" fill="#4f7cff" />
              <Bar dataKey="joined" fill="#f39c54" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
