import React, { useState } from "react";

const LiveClassManagement = () => {
  const [classLink, setClassLink] = useState("");

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🎥 Live Classes</h2>

      <input
        type="text"
        placeholder="Paste class meeting link..."
        value={classLink}
        onChange={(e) => setClassLink(e.target.value)}
        className="input"
      />
      <button className="button mt-3">Share with Students</button>
    </div>
  );
};

export default LiveClassManagement;