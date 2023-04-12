import Layout from "@/components/Layout"

export default function Jsx() {
    const titulo = <h1>JSX é um conceito central</h1>
    
    function subtitulo() {
        return <h2>{"Muito legal". toUpperCase()}</h2>
    }
    return (
        <Layout titulo="Entendendo o JSX">
        <div>
            {titulo}
            {subtitulo()}
            <p>
                {JSON.stringify({name: 'Jordan', age: 30})}
            </p>
        </div>
        </Layout>
    )
}