import Welcome from "./Welcome";
import Sidebar from "./Sidebar";

export default function Main() {
  return (
    <main>
      <section className="welcome-texts">
        <Welcome />
      </section>
      <aside className="image sidebar">
        <Sidebar />
      </aside>
    </main>
  );
}