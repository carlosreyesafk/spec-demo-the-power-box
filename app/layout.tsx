export const metadata = {
  title: "The Power Box | Training Safe — Ensanche Isabelita, Santo Domingo Este",
  description:
    "The Power Box: centro de entrenamiento en Calle 4 #23, Ensanche Isabelita, Santo Domingo Este. Entrenamiento personalizado, rehabilitación cardiovascular y clases de técnica y postura. Training Safe.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
