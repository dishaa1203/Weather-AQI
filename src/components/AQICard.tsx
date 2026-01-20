import { AQIData } from "../types";

export default function AQICard({ data }: { data: AQIData }) {
  return (
    <div className="bg-red-900/40 rounded-3xl p-8 w-80">
      <h2 className="text-xl mb-4">Air Quality Index</h2>
      <p className="text-5xl">{data.aqi}</p>
      <span className="text-red-400">{data.label}</span>
      <p className="opacity-70 mt-4">{data.message}</p>
    </div>
  );
}
