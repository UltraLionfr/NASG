"use client";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 fill=%22none%22 stroke=%22%233459a1%22 stroke-width=%220.4%22><path d=%22M0 .5H40M.5 0V40%22/></svg>')] opacity-[0.05]"
      />
    </div>
  );
}
