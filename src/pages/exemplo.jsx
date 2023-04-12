import Cabecalho from "@/components/Cabeçalho";
import Layout from "@/components/Layout";


export default function Examplo() {
    return (
        <Layout titulo= "Usando componentes">
            <Cabecalho titulo="Next.js & React" />
            <Cabecalho titulo="Aprenda Next na pratica" />
        </Layout>

    )
}