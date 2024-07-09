import { useState } from "react"
import { MapPin, Calendar, ArrowRight}  from "lucide-react" // Import the IonIcons component from its appropriate module

export function App() {
    const [destination, setDestination] = useState('')

    const [date, setDate] = useState('')

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="max-w-3xl w-full px-6 text-center rounded-xl space-y-10">
                <p className="text-zinc-300 text-lg">
                    Convide seus amigos e planeje sua próxima viagem!
                </p>

                <div className="h-16 px-4 bg-zinc-900 flex flex-row items-center shadow-shape">
                    <div className="flex flex-row justify-center items-center gap-2 flex-1">
                        <MapPin className="text-zinc-400 size-5" />

                        <input 
                        className="placeholder-zinc-400 bg-transparent text-lg"
                        type="text" 
                        placeholder="Para onde você vai?"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-row justify-center items-center gap-2">
                        <Calendar className="text-zinc-400 size-5" />

                        <input 
                        className="placeholder-zinc-400 bg-transparent text-lg"
                        type="text" 
                        placeholder="Quando?"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    <div className="h-full flex flex-row justify-center items-center">
                        <button 
                        className="bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium
                        flex flex-row items-center justify-center gap-2 hover:bg-lime-400">
                            Continuar
                            <ArrowRight className="size-5" />
                        </button>
                    </div>
                </div>

                <p className="text-zinc-500 text-sm">
                    Ao planejar sua viagem pela plann.er você automaticamente concorda <br/>
                    com nossos &nbsp; 
                    <a href="#" className="text-zinc-300 underline">
                        termos de uso
                    </a> 
                    &nbsp; e &nbsp; 
                    <a href="#" className="text-zinc-300 underline">
                        políticas de privacidade
                    </a>.
                </p>
            </div>
        </div>
    )
}
