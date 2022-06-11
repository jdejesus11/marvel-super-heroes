import React, { Component, ElementType } from 'react'
import '../styles/reset.scss'
import '../styles/styles.scss'
import './App.scss'

interface IContainer {
    children?: React.ReactNode[]
}

interface IElement {
    children: React.ReactNode
}

const Header = () => {
    return <>App </>
}

const Main = () => {
    return <>Main</>
}

const Footer = ({ children }: IElement) => {
    return <>{children} </>
}

const Container = ({ children }: IContainer) => {
    return (
        <>
            <header className="header__container">{children[0]}</header>
            <main className="main__container">{children[1]}</main>
            <footer className="footer__container">{children[2]}</footer>
        </>
    )
}

const App = () => {
    return (
        <Container>
            <Header />
            <Main />
            <Footer>Footer</Footer>
        </Container>
    )
}

export default App
