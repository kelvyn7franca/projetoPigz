import { Container } from './styles'

export const PhoneInput = () => {
    return(
        <Container>
            <label htmlFor="phone"> Telefone</label>
            <div className='inputContainer'>
                <div className='region'>
                    <img className='brasilFlag' src="../public/logobandeira.png" alt="bandeira do Brasil" />
                    <select className='ddd' name="ddd" id="ddd" defaultValue="+55" disabled>
                        <option value="+55">+55</option>
                    </select>
                </div>
                <input className='textInput' type="text" name="phone" placeholder='(95) 99876-5432' />
            </div>
        </Container>
    )
}