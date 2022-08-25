import { Container } from './styles'

export const SimpleInput = ({name, textLabel, placeholder}) => {
    return (
        <Container>
            <label htmlFor={name}>{textLabel}</label>
            <input type='text' id={name} name={name} placeholder={placeholder}></input>
            
        </Container>
    )
}