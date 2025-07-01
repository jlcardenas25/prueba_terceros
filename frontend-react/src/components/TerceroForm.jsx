import { useState } from "react";
import axios from "axios";

export default function TerceroForm() {
  const [doc, setDoc] = useState("");
  const [tercero, setTercero] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const buscarTercero = async () => {
    const res = await axios.get(`http://localhost:8080/api/terceros/${doc}`);
    setTercero(res.data);
  };

  const actualizar = async () => {
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(tercero.ter_correo)) {
      setMensaje("Correo inválido");
      return;
    }
    await axios.put("http://localhost:8080/api/terceros/", tercero);
    setMensaje("Actualizado correctamente");
  };

  return (
    <div>
      <input placeholder="Documento" onChange={e => setDoc(e.target.value)} />
      <button onClick={buscarTercero}>Buscar</button>

      {tercero && (
        <>
          <input value={tercero.ter_nombre} onChange={e => setTercero({ ...tercero, ter_nombre: e.target.value })} />
          <input value={tercero.ter_telcelular} onChange={e => setTercero({ ...tercero, ter_telcelular: e.target.value })} />
          <input value={tercero.ter_correo} onChange={e => setTercero({ ...tercero, ter_correo: e.target.value })} />
          <button onClick={actualizar}>Actualizar</button>
        </>
      )}
      <p>{mensaje}</p>
    </div>
  );
}