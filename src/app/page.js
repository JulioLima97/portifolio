

import Luz from "@/components/Luz";
import Info from "../components/info/Info";
import Porjetos from "../components/projetos/Projetos"

export default function Home() {
  return (
   <main>
    <Info />
    <Luz className={"luz luz__botton"} />
    <Porjetos />
   </main>
  );
}
