import { TitleDiv, ContainerOrange } from './styles'
import { InputScreen } from '../InputScreen'

export const SectionOrange = () => {
  return (
    <ContainerOrange>
      <TitleDiv>
        <div>
          <h2>Pigz: tudo que você precisa pra vender ainda mais!</h2>
          <img src="../public/hamburguer.png" alt="bugão"></img>
        </div>
        <p>Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.</p>
      </TitleDiv>
      <InputScreen/>
    </ContainerOrange>
  ) 
}