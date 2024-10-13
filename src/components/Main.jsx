import Sidebar from "./Sidebar";
import Gallery from "./Sidebar";
import Welcome from "./Welcome";

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