export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Blog Layout</h1>
      {children}
    </>
  );
}
