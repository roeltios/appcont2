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
    <div style={{ padding: '2rem' }}>
      <h1>📒 Contactos</h1>
    <form onSubmit={handleSubmit}>
      <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
      <input name="apellido" placeholder="Apellido" value={form.apellido} onChange={handleChange} />
      <input name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="calle" placeholder="Calle" value={form.calle} onChange={handleChange} />
      <input name="ciudad" placeholder="Ciudad" value={form.ciudad} onChange={handleChange} />
      <input name="estado" placeholder="Estado" value={form.estado} onChange={handleChange} />
      <input name="empresa" placeholder="Empresa" value={form.empresa} onChange={handleChange} />
      <input name="cargo" placeholder="Cargo" value={form.cargo} onChange={handleChange} />
      <input name="notas" placeholder="Notas" value={form.notas} onChange={handleChange} />
      <input name="cumple" type="date" value={form.cumple} onChange={handleChange} />
      <button type="submit">Guardar</button>
    </form>

      <ul>
        {contacts.map(c => <li key={c.id}>{c.nombre} {c.apellido}</li>)}
      </ul>
    </div>
  );
}
