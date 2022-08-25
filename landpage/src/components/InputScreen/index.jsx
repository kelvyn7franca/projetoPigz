import { useState, useCallback } from 'react'
import { Modal, Row } from './styles'
import { SimpleInput } from '../SimpleInput'
import { PhoneInput } from '../PhoneInput'

export const InputScreen = () => {

    const [index, setIndex] = useState(0)

    const handleScreen = useCallback(() => {
        if (index === 0) {
            return (
            <Modal>
                <div>
                <h1>Quero vender no Pigz</h1>
                <p>Dê o primeiro passo para aumentar suas vendas</p>
                </div>
                <SimpleInput name="name" textLabel="Nome" placeholder="Leonercio Goesfeeld" />
                <SimpleInput name="email" textLabel="E-mail" placeholder="leonercio.goesfeeld@email.com" />
                <PhoneInput />
                <p>Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.</p>
                <button onClick={() => setIndex(1)}>Continuar</button>
          </Modal>
            )
        } else if(index === 1) {
            return(
                <Modal>
                    <div>
                        <h1>Onde fica a sua loja?</h1>
                    </div>
                    <SimpleInput name="name" textLabel="CEP" placeholder="00000-00" />
                    <Row>
                        <SimpleInput name="state" textLabel="Estado" placeholder="UF" />
                        <SimpleInput name="city" textLabel="Cidade" placeholder="Selecione" />
                    </Row>
                    <SimpleInput  name="street" textLabel="Endereço" placeholder="Avenida Brasil" />
                    <Row>
                        <SimpleInput name="number" textLabel="Número" placeholder="123" />
                        <SimpleInput name="complement" textLabel="Complemento" placeholder="Sala 1" />
                    </Row>
                    
                    <button onClick={() => setIndex(2)}>Próximo</button>
            </Modal>
          )
        } 
        else if(index === 2) {
            return(
                <Modal>
                     <div>
                        <h1>Me conta um pouco sobre a sua loja</h1>
                    </div>
                    <SimpleInput name="name" textLabel="Nome da loja" placeholder="Restaurante Todo Mundo Gosta" />
                    <SimpleInput name="name" textLabel="CNPJ da loja" placeholder="12.345.678/0001-99" />
                    <SimpleInput name="name" textLabel="Tipo de loja" placeholder="Selecione" />

                    
                    <button onClick={() => setIndex(0)}>Próximo</button>
                    
            </Modal>
          )
        } 
    }, [index, setIndex])

    return (
        <>
            {handleScreen()}
        </>
    )
}