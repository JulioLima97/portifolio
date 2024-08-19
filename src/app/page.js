

import Luz from "@/components/Luz";
import Info from "../components/info/Info";
import Porjetos from "../components/projetos/Projetos"
import RegistrationForm from "@/components/form/Form";

export default function Home() {
  return (
   <main>
    <Info />
    <Luz className={"luz luz__botton"} />
    <Porjetos />
    <RegistrationForm/>
   </main>
  );
}
