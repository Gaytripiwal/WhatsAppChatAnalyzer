import { useState } from "react";
import { uploadChat } from "../services/api";
import UploadBox from "../components/UploadBox";
import ChartView from "../components/ChartView";
import ActiveUsers from "../components/ActiveUsers";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (file) => {
    try {
      setLoading(true);
      const res = await uploadChat(file);
      console.log("BACKEND RESPONSE:", res.data);
      setData(res.data);
    } catch (err) {
      alert("Failed to analyze chat file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "30px",
      }}
    >
      <h1>WhatsApp Chat Analyzer</h1>

      <UploadBox onUpload={handleUpload} />

      {loading && <p>Analyzing chat...</p>}

      {data?.graphData && Object.keys(data.graphData).length > 0 ? (
        <>
          {/* 📊 Chart */}
          <ChartView data={data.graphData} />

          {/* 👥 Active users */}
          <h3 style={{ marginTop: "30px" }}>
            Active Users (≥ 4 days)
          </h3>
          <ActiveUsers users={data.activeUsers} />
        </>
      ) : (
        !loading && <p>No graph data found</p>
      )}
    </div>
  );
}
