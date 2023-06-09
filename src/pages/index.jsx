import Navegador from "@/components/Navegador";


export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso" />
            <Navegador texto="Exemplo" destino="/exemplo" color="green"/>
            <Navegador texto="jsx" destino="/jsx" color= "crimson"/>
            <Navegador texto="Navegação #01" destino="/navegacao/" color="yellow" />
            <Navegador texto="Navegação #02" destino="/cliente/sp-2/321" color="white" />
            <Navegador texto="Componente com estado" destino="/state" color="orange" />
            <Navegador texto="Integração com API #01" destino="/integracao_1" color="pink"/>
            <Navegador texto="Conteudo Estático" destino="/estatico" color="white"/>
        </div>
    )
}