import React, { useState } from 'react';
import { Link } from 'react-router';
import '../components/Hero.css';
import Navbar from '../components/Navbar';

const ContactMe = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpiamos el error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (!form.name.trim()) tempErrors.name = "El nombre es obligatorio";
    if (!form.email.trim()) {
      tempErrors.email = "El correo es obligatorio";
    } else if (!emailRegex.test(form.email)) {
      tempErrors.email = "El formato del correo no es válido";
    }
    if (!form.message.trim()) tempErrors.message = "El mensaje no puede estar vacío";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSending(true);

    try {
      const response = await fetch('/api/server', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        alert("¡Mensaje enviado con éxito!");
        setForm({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || 'No se pudo enviar el mensaje'}`);
      }
    } catch (error) {
      console.error("Error de red:", error);
      alert("Error de conexión con el servidor.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Navbar>
      <div className="all-container">
        <div className="basic-container">
          <div className="item-container">
            <div>
              <h2 style={{ marginBottom: '20px' }}>Contact Me</h2>
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ flex: 1 }}>
                      <input
                        name="name"
                        type="text"
                        placeholder="Nombre"
                        value={form.name}
                        onChange={handleOnchange}
                        style={{ width: '100%', borderColor: errors.name ? 'red' : '#ccc' }}
                      />
                      {errors.name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.name}</span>}
                    </div>
                    <div style={{ flex: 1 }}>
                      <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleOnchange}
                        style={{ width: '100%', borderColor: errors.email ? 'red' : '#ccc' }}
                      />
                      {errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span>}
                    </div>
                  </div>
                  
                  <div style={{ paddingTop: '10px' }}>
                    <textarea
                      name="message"
                      placeholder="Tu mensaje..."
                      rows="10"
                      cols="50"
                      value={form.message}
                      onChange={handleOnchange}
                      style={{ width: '100%', borderColor: errors.message ? 'red' : '#ccc' }}
                    />
                    {errors.message && <span style={{ color: 'red', fontSize: '12px' }}>{errors.message}</span>}
                  </div>

                  <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <button 
                      style={{ width: '140px', height: '40px', cursor: isSending ? 'not-allowed' : 'pointer' }} 
                      onClick={handleSendEmail}
                      disabled={isSending}
                    >
                      {isSending ? 'Enviando...' : 'Contact Me'}
                    </button>
                    <Link to='/'> <button style={{ height: '40px' }}>Go back</button> </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default ContactMe;