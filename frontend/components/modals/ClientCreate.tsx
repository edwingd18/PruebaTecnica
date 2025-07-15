"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

export function ClientCreate({ onCreated }: { onCreated?: () => void }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    documento: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validarCampos = () => {
    const { nombre, documento, email } = form;

    if (!nombre || !documento || !email) {
      toast.warning("Todos los campos son obligatorios.");
      return false;
    }

    if (nombre.length > 50) {
      toast.warning("El nombre no puede superar los 50 caracteres.");
      return false;
    }

    if (!/^\d{1,10}$/.test(documento)) {
      toast.warning(
        "El documento debe contener solo números y máximo 10 dígitos."
      );
      return false;
    }

    if (email.length > 80) {
      toast.warning("El email no puede superar los 80 caracteres.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.warning("Ingresa un email válido.");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validarCampos()) return;

    setLoading(true);
    try {
      await axios.post(`http://localhost:8080/clients`, form);
      toast.success("Cliente creado exitosamente.");
      setOpen(false);
      setForm({ nombre: "", documento: "", email: "" });
      onCreated?.();
    } catch (err) {
      console.error(err);
      toast.error("Error al crear el cliente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Agregar cliente
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nuevo cliente</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label>Nombre *</Label>
            <Input
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              maxLength={50}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Documento *</Label>
            <Input
              name="documento"
              value={form.documento}
              onChange={handleChange}
              maxLength={10}
              type="number"
              inputMode="numeric"
              pattern="\d*"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Email *</Label>
            <Input
              name="email"
              value={form.email}
              onChange={handleChange}
              maxLength={80}
              type="email"
            />
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Guardando..." : "Guardar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
