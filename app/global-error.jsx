"use client";

export default function GlobalError({ error, retry }) {
  return (
    <html lang="es">
      <body>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h2>Algo salió mal</h2>
          <p>{error.message || "Error desconocido"}</p>
          <button onClick={() => retry()}>Reintentar</button>
        </div>
      </body>
    </html>
  );
}
