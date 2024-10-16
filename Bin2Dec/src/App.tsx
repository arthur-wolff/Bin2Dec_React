import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [numero_conv, setNumero_conv] = useState(null)
  const [mensagem_erro, setMensagem_erro] = useState('')

  const inputRef = useRef()

  function converter(){
  
    const numero_bin = (inputRef.current.value.trim())
    
    const entrada_valida = numero_bin.length > 0 && [...numero_bin].every(char => char === '0' || char === '1')

    if (!entrada_valida){
      setMensagem_erro('Digite apenas números Binarios (0 e 1)')
      setNumero_conv(null)
      return
    }

    setMensagem_erro('')

    const numero_dec = parseInt(numero_bin, 2);
    setNumero_conv(numero_dec)
    
    inputRef.current.value = ''
  }

  return (
    <div className='container'>

      <h1>Binario para Decimal</h1>
      <input 
        ref={inputRef} 
        type='text' 
        maxLength={8} 
        placeholder='NUMERO BINARIO'
        aria-invalid={!!mensagem_erro}
        />
      <button onClick={converter}>Converter</button>

      <div className='resultado'>
        {mensagem_erro && <span style={{color: 'red'}}>{mensagem_erro}</span>}
        {numero_conv !== null && !mensagem_erro && <h2>{numero_conv}</h2>}
      </div>
      
    </div>
  )
}

export default App
