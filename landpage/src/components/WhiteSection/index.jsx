import { Container } from './styles'


export const WhiteSection = () => {
    return(
        <Container>
           
            <div className='card4__logo'>
            <img src='../public/pigzpigz.svg'></img>
                <h1>Você tem um novo Pigzdido!</h1>
            </div>
           
            <div className="card4__button">
            <img className='section__img' src='../public/storefront_black_24dp.svg'></img>
                <h2>Marketplace</h2>
                <p>Pra sua loja vender mais</p>
            </div>
            <div className="card4__button">
            <img className='section__img' src='../public/storefront_black_24dp.svg'></img>
                <h2>Marketplace</h2>
                <p>Pra sua loja vender mais</p>
            </div>
            <div className="card4__button">
            <img className='section__img' src='../public/storefront_black_24dp.svg'></img>
                <h2>Marketplace</h2>
                <p>Pra sua loja vender mais</p>
            </div>
            <div className="card4__button">
            <img className='section__img' src='../public/storefront_black_24dp.svg'></img>
                <h2>Marketplace</h2>
                <p>Pra sua loja vender mais</p>
            </div>
            
            <div className='finalTitle'>
                <h1>Tudo que você precisa por apenas R$199/mês</h1>
                <p>Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por cada venda, sem letrinhas miúdas.</p>
            </div>
        </Container>
    )
}