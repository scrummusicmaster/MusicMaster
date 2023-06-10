import React, { useState } from "react";
import Swal from "sweetalert2";
import NavBar from "../Navbar/Navbar";

function Form() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    servicio: "",
    horario: ""
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (form.nombre.length < 4 || form.nombre.length > 16) {
      newErrors.nombre = "El nombre debe tener entre 4 y 16 caracteres.";
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(form.correo)) {
      newErrors.correo = "El correo debe tener un formato válido.";
    }

    if (!form.servicio) {
      newErrors.servicio = "Debe seleccionar un servicio.";
    }

    if (!form.horario || !esHorarioValido(form.horario)) {
      newErrors.horario = "El horario debe estar entre las 10 a.m. y las 7 p.m.";
    }

    if (Object.keys(newErrors).length === 0) {
      // No hay errores, se puede enviar el formulario
      console.table(form);
      Swal.fire("Formulario enviado", "El formulario se envió correctamente.", "success");
      setForm({
        nombre: "",
        correo: "",
        servicio: "",
        horario: ""
      });
    } else {
      setErrors(newErrors);
      Swal.fire("Error", "Por favor, verifica los campos del formulario.", "error");
    }
  };

  // Generar los horarios de media hora entre las 10 a.m. y las 7 p.m.
  const horarios = [];
  for (let i = 10; i <= 19; i++) {
    for (let j = 0; j < 60; j += 30) {
      const hora = i < 10 ? `0${i}` : `${i}`;
      const minuto = j < 10 ? `0${j}` : `${j}`;
      horarios.push(`${hora}:${minuto}`);
    }
  }

  const esHorarioValido = (horario) => {
    return horarios.includes(horario);
  };

  return (
    <>
    <NavBar/>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={handleInputChange}
        placeholder="Nombre"
      />
      {errors.nombre && <span style={{ color: "red" }}>{errors.nombre}</span>}

      <input
        type="email"
        name="correo"
        className="form-control"
        value={form.correo}
        onChange={handleInputChange}
        placeholder="Correo"
      />
      {errors.correo && <span style={{ color: "red" }}>{errors.correo}</span>}

      <select
        name="servicio"
        value={form.servicio}
        onChange={handleInputChange}
      >
        <option value="">Selecciona un servicio</option>
        <option value="corte">Corte</option>
        <option value="barba">Barba</option>
        <option value="corteYBarba">Corte y Barba</option>
      </select>
      {errors.servicio && (
        <span style={{ color: "red" }}>{errors.servicio}</span>
      )}

      <select
        name="horario"
        value={form.horario}
        onChange={handleInputChange}
      >
        <option value="">Selecciona un horario</option>
        {horarios.map((horario, index) => (
          <option key={index} value={horario}>{horario}</option>
        ))}
      </select>
      {errors.horario && <span style={{ color: "red" }}>{errors.horario}</span>}

      <button type="submit">Enviar</button>
    </form>
    </>
  );
}

export default Form;