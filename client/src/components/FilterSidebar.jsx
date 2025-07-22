import React from "react";

export default function FilterSidebar() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Filters</h3>

      <div>
        <label className="font-medium">Category</label>
        <select className="w-full border p-2 rounded mt-1">
          <option>All</option>
          <option>Academic</option>
          <option>Fiction</option>
        </select>
      </div>

      <div>
        <label className="font-medium">Condition</label>
        <select className="w-full border p-2 rounded mt-1">
          <option>Any</option>
          <option>New</option>
          <option>Good</option>
          <option>Used</option>
        </select>
      </div>

      <div>
        <label className="font-medium">Sort By</label>
        <select className="w-full border p-2 rounded mt-1">
          <option>Latest</option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>
      </div>
    </div>
  );
}