import React, { useState } from "react";
import QRCode from "qrcode.react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { QrScanner } from "react-qrcode-scanner";

const defaultUsers = [
  "STU001",
  "STU002",
  "STU003",
  "STU004",
  "STU005",
  "STU006",
  "STU007",
  "STU008",
  "STU009",
  "STU010",
];

const QRAttendance = () => {
  const [studentId, setStudentId] = useState(defaultUsers[0]);
  const [scannedData, setScannedData] = useState("");
  const [attendanceList, setAttendanceList] = useState([]);

  const handleScan = (data) => {
    if (data && !attendanceList.includes(data)) {
      setScannedData(data);
      setAttendanceList((prev) => [...prev, data]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex flex-col items-center py-8">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-700">QR Code Attendance</h1>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* QR Code Generator */}
        <Card className="bg-white shadow-xl rounded-lg p-6 border border-gray-200">
          <CardContent className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Generate QR Code</h2>
            <select
              className="border p-3 w-full rounded-md"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            >
              {defaultUsers.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
            <div className="mt-4 flex justify-center">
              <QRCode value={studentId} size={150} />
            </div>
            <Button
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              onClick={() => setStudentId(defaultUsers[0])}
            >
              Reset
            </Button>
          </CardContent>
        </Card>

        {/* QR Code Scanner */}
        <Card className="bg-white shadow-xl rounded-lg p-6 border border-gray-200">
          <CardContent className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Scan QR Code</h2>
            <QrScanner
              delay={300}
              onScan={handleScan}
              onError={(err) => console.error(err)}
              className="mt-4 border p-4 rounded-lg"
            />
            {scannedData && (
              <p className="mt-4 text-green-700 font-medium text-lg">
                ✅ Scanned: <span className="font-bold">{scannedData}</span>
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Attendance List */}
      <Card className="bg-white shadow-xl rounded-lg p-6 mt-8 w-full max-w-2xl border border-gray-200">
        <CardContent className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Attendance List</h2>
          {attendanceList.length > 0 ? (
            <ul className="mt-4 border rounded-lg bg-gray-100">
              {attendanceList.map((student, index) => (
                <li key={index} className="border-b p-3 text-lg text-gray-700">
                  {student}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 mt-4">No attendance recorded yet.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default QRAttendance;