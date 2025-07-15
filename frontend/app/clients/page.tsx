"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export interface Client {
  id: number;
  nombre: string;
  documento: string;
  email: string;
  fechaRegistro: string;
}

export default function ClientsPage() {
  const [data, setData] = useState<Client[]>([]);

  const fetchClientes = async () => {
    try {
      const res = await axios.get<Client[]>(`http://localhost:8080/clients`);
      setData(res.data);
    } catch (err) {
      console.error("Error cargando clientes", err);
    }
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  return (
    <div className="flex flex-col items-center px-4 py-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-primary">
        Lista de Clientes
      </h1>

      <DataTable columns={columns} data={data} onCreated={fetchClientes} />
    </div>
  );
}
