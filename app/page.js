import db from "@/lib/db";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Home() {
  const personas = await db
    .collection("personas")
    .find({})
    .sort({ id: 1 })
    .toArray();

  return (
    <main className="container mx-auto">
      <h1 className="font-bold text-2xl text-center">Listado de Personal</h1>
      <section className="grid grid-cols-1 gap-4 justify-items-center sm:grid-cols-2 lg:grid-cols-4">
        {personas.map((persona, index) => (
          <article key={persona.id}>
            <div className="flex flex-col gap-2 border border-gray-500 shadow rounded-lg w-72">
              <div className="w-full h-96 p-2">
                <Image
                  src={`/personas/${persona.foto}`}
                  alt={`${persona.nombre} ${persona.apellidos}`}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                  {...(index === 0 ? { priority: true, loading: "eager" } : {})}
                />
              </div>

              <h2>
                <strong>Nombre: </strong>
                {persona.nombre} {persona.apellidos}
              </h2>

              <p>
                <strong>Email: </strong>
                {persona.email}
              </p>

              <p>
                <strong>Teléfono: </strong>
                {persona.telefono}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
