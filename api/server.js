import { Resend } from 'resend';

// Importante: No pegues la clave aquí directamente, usa el .env
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Solo permitimos peticiones POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { name, email, message } = req.body;

  // Validación extra en el servidor (opcional pero recomendada)
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Web Portfolio <onboarding@resend.dev>',
      to: ['alexsellamaalex@gmail.com'], // <--- CAMBIA ESTO POR TU EMAIL
      subject: `Nuevo mensaje de contacto: ${name}`,
      html: `
        <h3>Has recibido un nuevo mensaje desde tu web</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error de Resend:", error);
    return res.status(500).json({ error: 'Error al enviar el email' });
  }
}