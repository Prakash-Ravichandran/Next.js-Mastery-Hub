export default function ArchiveLayout({ archive, latest }) {
  return (
    <>
      <h2>ArchiveLayout</h2>
      <section id="archive">{archive}</section>
      <section id="latest">{latest}</section>
    </>
  );
}
