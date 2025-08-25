"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/meeting-bookings"
        );
        if (res.data.success) {
          setBookings(res.data.bookings);
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF7F7] ml-[70px] h-screen max-w-screen p-10">
      <div className="flex items-center gap-3 mb-6 ">
        <div className="flex items-center justify-center w-10 h-10 rounded-md shadow bg-white">
          <span className="text-lg">←</span>
        </div>
        <div>
          <h1 className="text-lg font-semibold">
            Ruang Meeting
          </h1>
          <p className="text-sm text-gray-500">
            Ruang Meeting
          </p>
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <button className="flex items-center gap-2 px-4 py-2 text-white rounded-md shadow bg-[#296377] hover:bg-[#204d5c]">
          <span className="text-xl">+</span> Pesan Ruangan
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="px-4 py-2">UNIT</th>
              <th className="px-4 py-2">RUANG MEETING</th>
              <th className="px-4 py-2">KAPASITAS</th>
              <th className="px-4 py-2">TANGGAL RAPAT</th>
              <th className="px-4 py-2">WAKTU</th>
              <th className="px-4 py-2">JUMLAH PESERTA</th>
              <th className="px-4 py-2">JENIS KONSUMSI</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking.id} className="border-b">
                  <td className="px-4 py-3 font-medium">
                    {booking.unit?.name}
                  </td>
                  <td className="px-4 py-3">
                    {booking.room?.name}
                  </td>
                  <td className="px-4 py-3">
                    {booking.room?.capacity} Orang
                  </td>
                  <td className="px-4 py-3">
                    {new Date(
                      booking.meetingDate
                    ).toLocaleDateString("id-ID")}
                  </td>
                  <td className="px-4 py-3">
                    {new Date(
                      booking.startTime
                    ).toLocaleTimeString("id-ID", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}{" "}
                    s/d{" "}
                    {new Date(
                      booking.endTime
                    ).toLocaleTimeString("id-ID", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td className="px-4 py-3">
                    {booking.participants} Orang
                  </td>
                  <td className="px-4 py-3">
                    {booking.consumption
                      .map((c) => c.consumptionType?.name)
                      .join(", ")}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="px-4 py-3 text-center text-gray-500"
                >
                  Tidak ada booking
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
