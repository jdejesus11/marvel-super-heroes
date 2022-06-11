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

const Header = ({ children }: IElement) => {
    return <>{children} </>
}

const Main = ({ children }: IElement) => {
    return <>{children}</>
}

const Footer = ({ children }: IElement) => {
    return <>{children} </>
}

const Container = ({ children }: IContainer) => {
    const [header, main, footer] = children
    return (
        <>
            <header className="header__container">{header}</header>
            <main className="main__container">{main}</main>
            <footer className="footer__container">{footer}</footer>
        </>
    )
}

const App = () => {
    return (
        <Container>
            <Header>Header</Header>
            <Main>Main</Main>
            <Footer>Footer</Footer>
        </Container>
    )
}

export default App
