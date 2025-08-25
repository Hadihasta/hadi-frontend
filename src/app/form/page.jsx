import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "lucide-react";

const Page = () => {
  return (
    <div className="p-8">
      <div className="text-sm text-gray-500 mb-4">
        <span className="cursor-pointer hover:underline">
          Ruang Meeting
        </span>{" "}
        &gt;{" "}
        <span className="font-medium">Pesan Ruangan</span>
      </div>

      <Card className="max-w-4xl mx-auto shadow-md rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Ruang Meeting
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-700 mb-4">
              Informasi Ruang Meeting
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Unit
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih Unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="unit1">
                      Unit 1
                    </SelectItem>
                    <SelectItem value="unit2">
                      Unit 2
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Pilihan Ruangan Meeting
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih Ruangan Meeting" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="room1">
                      Ruang 1
                    </SelectItem>
                    <SelectItem value="room2">
                      Ruang 2
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Kapasitas Ruangan
                </label>
                <Input
                  placeholder="Kapasitas Ruangan"
                  disabled
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 mb-4">
              Informasi Rapat
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Tanggal Rapat *
                </label>
                <div className="relative">
                  <Input type="date" className="pr-10" />
                  <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Pilihan Waktu Mulai
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih Waktu Mulai" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">
                      09:00
                    </SelectItem>
                    <SelectItem value="10:00">
                      10:00
                    </SelectItem>
                    <SelectItem value="11:00">
                      11:00
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Waktu Selesai
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih Waktu Selesai" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12:00">
                      12:00
                    </SelectItem>
                    <SelectItem value="13:00">
                      13:00
                    </SelectItem>
                    <SelectItem value="14:00">
                      14:00
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">
                Jumlah Peserta
              </label>
              <Input
                placeholder="Masukan Jumlah Peserta"
                type="number"
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">
                Jenis Konsumsi
              </label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="snack-siang" />
                  <label
                    htmlFor="snack-siang"
                    className="text-sm"
                  >
                    Snack Siang
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="makan-siang" />
                  <label
                    htmlFor="makan-siang"
                    className="text-sm"
                  >
                    Makan Siang
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="snack-sore" />
                  <label
                    htmlFor="snack-sore"
                    className="text-sm"
                  >
                    Snack Sore
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">
                Nominal Konsumsi
              </label>
              <div className="flex items-center">
                <span className="px-3 py-2 bg-gray-100 border border-r-0 rounded-l-md text-gray-600">
                  Rp
                </span>
                <Input
                  type="number"
                  className="rounded-l-none"
                  placeholder="Masukan nominal konsumsi"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-8">
            <Button variant="destructive">Batal</Button>
            <Button>Simpan</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
