"use client";

import { useEffect, useState } from "react";
import leads from "@/data/leads.json";

const STATUS = {
  0: {
    label: "Pending",
    color: "text-neutral-500 bg-neutral-900 border-neutral-800",
  },
  1: {
    label: "Sent",
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  2: {
    label: "Replied",
    color: "text-green-400 bg-green-500/10 border-green-500/20",
  },
  3: {
    label: "No Reply",
    color: "text-red-400 bg-red-500/10 border-red-500/20",
  },
} as const;

type StatusKey = keyof typeof STATUS;
const LS_KEY = "lead-statuses";

const WHATSAPP_MESSAGE = `
Hi [Business Name],

I'm Timon. I help local businesses in Singapore get found online with a beautiful website.

70% of customers check online before visiting a shop, and if your business has a website.
It gets up to 2.8x more enquiries and 3x more sales.

I noticed [Business Name] doesn't have a website yet, so I built one for you, free to preview:
[URL]

If you like it, I can get it live on Google within the week for a small fee. I handle everything, nothing from you needed.

Just reply me here if interested:

Best,
Timon Wong
`;
export default function AdminPage() {
  const [statuses, setStatuses] = useState<Record<number, StatusKey>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) setStatuses(JSON.parse(raw));
    } catch {}
  }, []);

  function updateStatus(id: number, val: StatusKey) {
    setStatuses((prev) => {
      const next = { ...prev, [id]: val };
      localStorage.setItem(LS_KEY, JSON.stringify(next));
      return next;
    });
  }

  const statusCounts = Object.values(statuses).reduce<Record<number, number>>(
    (acc, v) => {
      acc[v] = (acc[v] ?? 0) + 1;
      return acc;
    },
    {},
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <div className="border-b border-neutral-900 px-10 py-6 flex items-center justify-between">
        <div>
          <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">
            Hardware Shop SG
          </p>
          <h1 className="text-xl font-semibold">Lead Dashboard</h1>
        </div>
        <div className="flex gap-3">
          {(
            Object.entries(STATUS) as [string, (typeof STATUS)[StatusKey]][]
          ).map(([k, s]) => (
            <div
              key={k}
              className="bg-neutral-950 border border-neutral-800 rounded-lg px-5 py-3 text-center"
            >
              <p className="text-2xl font-bold leading-none text-white">
                {statusCounts[Number(k)] ?? 0}
              </p>
              <p
                className={`text-xs uppercase tracking-wider mt-1 ${s.color.split(" ")[0]}`}
              >
                {s.label}
              </p>
            </div>
          ))}
          <div className="bg-neutral-950 border border-neutral-800 rounded-lg px-5 py-3 text-center">
            <p className="text-2xl font-bold leading-none text-white">
              {leads.length}
            </p>
            <p className="text-xs text-neutral-500 uppercase tracking-wider mt-1">
              Total
            </p>
          </div>
        </div>
      </div>

      {/* Status legend */}
      <div className="px-10 py-3 border-b border-neutral-900 flex gap-4 text-xs text-neutral-500">
        {(Object.entries(STATUS) as [string, (typeof STATUS)[StatusKey]][]).map(
          ([k, s]) => (
            <span key={k}>
              <span className="text-neutral-600">{k}</span> = {s.label}
            </span>
          ),
        )}
      </div>

      {/* Table */}
      <div className="px-10 py-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-900">
              {[
                "#",
                "Business",
                "Phone",
                "Address",
                "Maps",
                "Page",
                "Status",
              ].map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 text-left text-xs text-neutral-500 uppercase tracking-widest font-medium"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, i) => {
              const url = lead.slug ? `/${lead.slug}` : null;
              const statusKey = (statuses[lead.id] ?? 0) as StatusKey;
              const status = STATUS[statusKey];
              return (
                <tr
                  key={lead.id}
                  className="border-b border-neutral-950 hover:bg-neutral-950 transition-colors"
                >
                  <td className="px-4 py-4 text-neutral-600 text-xs">
                    {i + 1}
                  </td>
                  <td className="px-4 py-4 font-medium">
                    {url ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-amber-400 transition-colors"
                      >
                        {lead.name}{" "}
                        <span className="text-amber-500 text-xs">↗</span>
                      </a>
                    ) : (
                      <span className="text-neutral-300">{lead.name}</span>
                    )}
                  </td>
                  <td className="px-4 py-4 font-mono text-xs text-neutral-500">
                    {lead.phone ? (
                      <a
                        href={`https://wa.me/${lead.phone.replace(/\s+/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE.replace(/\[Business Name\]/g, lead.name).replace("[URL]", `https://hardware-shop-sg.vercel.app/${url}`))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-500 hover:text-amber-400"
                      >
                        {lead.phone}
                      </a>
                    ) : (
                      <span className="text-neutral-700">—</span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-neutral-500 text-xs max-w-xs">
                    {lead.address}
                  </td>
                  <td className="px-4 py-4 text-xs">
                    <a
                      href={lead.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      Maps ↗
                    </a>
                  </td>
                  <td className="px-4 py-4 font-mono text-xs">
                    {url ? (
                      <a
                        href={url}
                        rel="noopener noreferrer"
                        className="text-amber-500 hover:text-amber-400"
                      >
                        {url}
                      </a>
                    ) : (
                      <span className="text-neutral-700">—</span>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <select
                      value={statusKey}
                      onChange={(e) =>
                        updateStatus(
                          lead.id,
                          Number(e.target.value) as StatusKey,
                        )
                      }
                      className={`text-xs px-2.5 py-1 rounded-full border font-medium bg-transparent cursor-pointer outline-none ${status.color}`}
                    >
                      {(
                        Object.entries(STATUS) as [
                          string,
                          (typeof STATUS)[StatusKey],
                        ][]
                      ).map(([k, s]) => (
                        <option
                          key={k}
                          value={k}
                          className="bg-neutral-900 text-white"
                        >
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="px-10 py-6 border-t border-neutral-950 text-xs text-neutral-700">
        hardware-shop-sg · admin
      </div>
    </div>
  );
}
