import Hero from "@/components/Hero";
import Previousquotes from "@/components/Previousquotes";
import Todaysquote from "@/components/Todaysquote";

export default function Home() {
  return (
    <main>
      <Hero />
      <Todaysquote />
      <Previousquotes />
    </main>
  );
}
