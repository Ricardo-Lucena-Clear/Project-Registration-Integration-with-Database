import { useState } from "react"
import Layout from "@/components/Layout"

export default function State() {
    const [numero, setNumero] = useState(0)

    function incrementar() {
        setNumero(numero+ 1)
    }

    return (
        <Layout titulo="Componente com estado">
            <div>{numero}</div>
            <button onClick={incrementar}>incrementar</button>
        </Layout>
    )
}