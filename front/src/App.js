import { useEffect, useState } from 'react';
import { getContacts, createContact } from './api';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    calle: '',
    ciudad: '',
    estado: '',
    empresa: '',
    cargo: '',
    notas: '',
    cumple: '',
  });

  useEffect(() => {
    getContacts().then(res => setContacts(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createContact(form);
    setContacts(prev => [...prev, res.data]);
    setForm({ nombre: '', apellido: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <input
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        name="apellido"
        placeholder="Apellido"
        value={form.apellido}
        onChange={handleChange}
        className="p-2 border rounded-md"
      />
      <input
        name="telefono"
        placeholder="Teléfono"
        value={form.telefono}
        onChange={handleChange}
        className="p-2 border rounded-md"
      />
      <input
        name="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={handleChange}
        className="p-2 border rounded-md"
      />
      <input
        name="calle"
        placeholder="Calle"
        value={form.calle}
        onChange={handleChange}
        className="p-2 border rounded-md col-span-2"
      />
      <input
        name="ciudad"
        placeholder="Ciudad"
        value={form.ciudad}
        onChange={handleChange}
        className="p-2 border rounded-md"
      />
      <input
        name="estado"
        placeholder="Estado"
        value={form.estado}
        onChange={handleChange}
        className="p-2 border rounded-md"
      />
      <input
        name="empresa"
        placeholder="Empresa"
        value={form.empresa}
        onChange={handleChange}
        className="p-2 border rounded-md"
      />
      <input
        name="cargo"
        placeholder="Cargo"
        value={form.cargo}
        onChange={handleChange}
        className="p-2 border rounded-md"
      />
      <input
        name="cumple"
        type="date"
        value={form.cumple}
        onChange={handleChange}
        className="p-2 border rounded-md"
      />
      <button
        type="submit"
        className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Guardar Contacto
      </button>
    </form>
    
<div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  {contacts.map(c => (
    <div key={c.id} className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-blue-700">
        {c.nombre} {c.apellido}
      </h2>
      <p className="text-gray-600">{c.cargo} @ {c.empresa}</p>
      <p className="text-sm text-gray-500 mt-2">{c.telefono} · {c.email}</p>
      <p className="text-sm text-gray-500">{c.ciudad}, {c.estado}</p>
      {c.cumple && (
        <p className="text-sm text-gray-400 mt-1">
        Cumpleaños: {c.cumple}
        </p>
      )}
      {c.notas && (
        <p className="text-sm text-gray-600 mt-2 italic">
          "{c.notas}"
        </p>
      )}
    </div>
  ))}
</div>

    </div>
  );
}
