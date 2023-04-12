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

        </div>
    )
}