import Image from "next/image";

export default function Home() {
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
            <tr className="border-b">
              <td className="px-4 py-3 font-medium">
                UNIT KEUANGAN
              </td>
              <td className="px-4 py-3">Ruang Prambanan</td>
              <td className="px-4 py-3">10 Orang</td>
              <td className="px-4 py-3">
                11 Desember 2024
              </td>
              <td className="px-4 py-3">11:00 s/d 13:00</td>
              <td className="px-4 py-3">8 Orang</td>
              <td className="px-4 py-3">
                Snack Siang, Makan Siang
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">
                UNIT SDM
              </td>
              <td className="px-4 py-3">Ruang Prambanan</td>
              <td className="px-4 py-3">10 Orang</td>
              <td className="px-4 py-3">
                11 Desember 2024
              </td>
              <td className="px-4 py-3">11:00 s/d 13:00</td>
              <td className="px-4 py-3">3 Orang</td>
              <td className="px-4 py-3">Snack Sore</td>
            </tr>
          </tbody>
        </table>

        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-500">
            Showing 1-10 of 1000
          </span>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 text-sm border rounded-md">
              Back
            </button>
            <button className="px-3 py-1 text-sm border rounded-md">
              1
            </button>
            <button className="px-3 py-1 text-sm border rounded-md bg-[#296377] text-white">
              2
            </button>
            <button className="px-3 py-1 text-sm border rounded-md">
              3
            </button>
            <button className="px-3 py-1 text-sm border rounded-md">
              4
            </button>
            <button className="px-3 py-1 text-sm border rounded-md">
              5
            </button>
            <button className="px-3 py-1 text-sm border rounded-md">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
