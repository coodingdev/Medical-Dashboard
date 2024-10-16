"use client";

import { useState, useEffect } from "react";
import { Payment, columns } from "./Colum";
import { DataTable } from "./Data-Table";

function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return Promise.resolve([
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]);
}

export default function TableComponent() {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    getData().then(setData);
  }, []);

  return (
    <div className="bg-white my-8">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
