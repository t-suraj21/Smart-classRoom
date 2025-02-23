import React, { useState } from "react";

const ManageClassroom = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState("");

  const handleAddAnnouncement = () => {
    if (newAnnouncement) {
      setAnnouncements([...announcements, newAnnouncement]);
      setNewAnnouncement("");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📢 Manage Classroom</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Write an announcement..."
          value={newAnnouncement}
          onChange={(e) => setNewAnnouncement(e.target.value)}
          className="input"
        />
        <button onClick={handleAddAnnouncement} className="button">Post</button>
      </div>

      <ul>
        {announcements.map((announcement, index) => (
          <li key={index} className="p-3 bg-gray-200 rounded mb-2">
            {announcement}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageClassroom;