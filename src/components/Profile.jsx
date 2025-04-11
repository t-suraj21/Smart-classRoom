// Profile.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return navigate("/auth");

      try {
        const res = await axios.get("http://localhost:3000/auth/me", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data);
        setFormData(res.data);
      } catch (err) {
        console.error("❌ Error:", err);
        localStorage.removeItem("token");
        navigate("/auth");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put("http://localhost:3000/auth/update", formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(res.data);
      setEditMode(false);
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  if (!user)
    return (
      <div className="text-center text-lg mt-20 animate-pulse text-gray-600">
        Loading profile...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Profile Info */}
        <div className="col-span-1 bg-white p-6 rounded-xl shadow-md text-center">
          <img
            src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${user.name}`}
            alt="avatar"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-lg md:text-xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-500 text-sm">{user.email}</p>
          <div className="flex justify-around mt-4 text-sm text-gray-700">
            <div><strong>{user.projects?.length || 0}</strong><br />Projects</div>
            <div><strong>{user.connections || 0}</strong><br />Connects</div>
            <div><strong>{user.following || 0}</strong><br />Following</div>
          </div>
          <button
            onClick={() => setEditMode(!editMode)}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md text-sm"
          >
            {editMode ? "Cancel" : "✏️ Edit Profile"}
          </button>
        </div>

        {/* Stats Overview */}
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <StatCard title="Project Views" value="20" />
          <StatCard title="Total Interviews" value="12" />
          <StatCard title="Problems Solved" value={user.problems?.length || 0} />
        </div>

        {/* All Profile Sections */}
        <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="🎓 Education">
            {editMode ? (
              <textarea
                className="w-full border p-2 rounded-md text-sm"
                value={formData.education || ""}
                onChange={(e) => handleInputChange("education", e.target.value)}
              />
            ) : (
              <p className="text-sm text-gray-600">{user.education || "No education details added."}</p>
            )}
          </Card>

          <Card title="📈 Contributions">
            <p className="text-sm text-gray-600 mb-2">GitHub Contributions</p>
            {editMode ? (
              <input
                type="text"
                placeholder="Enter GitHub username"
                className="border p-2 rounded w-full text-sm"
                value={formData.github || ""}
                onChange={(e) => handleInputChange("github", e.target.value)}
              />
            ) : user.github ? (
              <>
                <a
                  href={`https://github.com/${user.github}`}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  @{user.github}
                </a>
                <img
                  src={`https://ghchart.rshah.org/${user.github}`}
                  alt="GitHub contributions"
                  className="mt-3"
                />
              </>
            ) : (
              <p className="text-sm text-gray-500">GitHub not linked.</p>
            )}
          </Card>

          <Card title="🏆 Contests">
            {editMode ? (
              <textarea
                className="w-full border p-2 rounded-md text-sm"
                placeholder='e.g. [{"name":"Codeforces Round","rank":56,"solved":3}]'
                value={JSON.stringify(formData.contests || [])}
                onChange={(e) => handleInputChange("contests", JSON.parse(e.target.value))}
              />
            ) : user.contests?.length > 0 ? (
              user.contests.map((c, i) => (
                <div key={i} className="text-sm text-gray-700 mb-1">
                  {c.name} — Rank: {c.rank}, Solved: {c.solved}
                </div>
              ))
            ) : (
              <p>No contests yet.</p>
            )}
          </Card>

          <Card title="💼 Job History">
            {editMode ? (
              <textarea
                className="w-full border p-2 rounded-md text-sm"
                value={formData.job || ""}
                onChange={(e) => handleInputChange("job", e.target.value)}
              />
            ) : (
              <p className="text-sm text-gray-700">
                {user.job || "No job details available."}
              </p>
            )}
          </Card>

          <Card title="🛠️ Skills">
            {editMode ? (
              <input
                type="text"
                className="w-full border p-2 rounded-md text-sm"
                placeholder="Comma separated skills"
                value={(formData.skills || []).join(", ")}
                onChange={(e) =>
                  handleInputChange(
                    "skills",
                    e.target.value.split(",").map((s) => s.trim())
                  )
                }
              />
            ) : (
              <ul className="text-sm list-disc list-inside text-gray-700">
                {(user.skills || []).map((skill, i) => <li key={i}>{skill}</li>)}
              </ul>
            )}
          </Card>

          <Card title="🧩 Problem Solved">
            {editMode ? (
              <>
                <input
                  type="number"
                  className="w-full mb-2 border p-2 rounded-md text-sm"
                  placeholder="LeetCode"
                  value={formData.leetcode || 0}
                  onChange={(e) => handleInputChange("leetcode", e.target.value)}
                />
                <input
                  type="number"
                  className="w-full mb-2 border p-2 rounded-md text-sm"
                  placeholder="Codeforces"
                  value={formData.codeforces || 0}
                  onChange={(e) => handleInputChange("codeforces", e.target.value)}
                />
                <input
                  type="number"
                  className="w-full border p-2 rounded-md text-sm"
                  placeholder="CodinGame"
                  value={formData.codeingame || 0}
                  onChange={(e) => handleInputChange("codeingame", e.target.value)}
                />
              </>
            ) : (
              <ul className="text-sm text-gray-700 space-y-1">
                <li>LeetCode: {user.leetcode || 0}</li>
                <li>Codeforces: {user.codeforces || 0}</li>
                <li>CodinGame: {user.codeingame || 0}</li>
              </ul>
            )}
          </Card>
        </div>
      </div>

      {/* Buttons */}
      <div className="text-center mt-8 flex flex-col sm:flex-row sm:justify-center gap-4">
        {editMode && (
          <button
            onClick={handleSave}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow text-sm"
          >
            💾 Save Changes
          </button>
        )}
        <button
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg shadow text-sm"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/auth");
          }}
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
};

const Card = ({ title, children }) => (
  <div className="bg-white p-5 rounded-xl shadow-md">
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    {children}
  </div>
);

const StatCard = ({ title, value }) => (
  <div className="bg-white p-4 rounded-xl shadow-md text-center">
    <h4 className="text-sm text-gray-500">{title}</h4>
    <p className="text-xl md:text-2xl font-bold text-gray-800">{value}</p>
  </div>
);

export default Profile;