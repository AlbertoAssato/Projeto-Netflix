import styled from 'styled-components'

export const Header = styled.div`
    width: 100vw; /*toda largura*/
    height: 15vh; /*toda altura*/
    background-image: linear-gradient(180deg, #000 -10%, transparent 100%);
    justify-content: space-around;
    position: fixed;
    display: flex;
    align-items: center;
`
export const Menu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Options = styled.li`
    display: flex;
    color: white;
    font-size: 1.1rem;
    padding: 0 2rem;
    cursor: pointer;

`
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 5rem;
`

export const IconsContainer = styled.div`
    display: flex;
    gap: 1rem;
    cursor: pointer;
    
`


