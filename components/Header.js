import { useState } from 'react'

import ButtonUI from './ButtonUI'
import Col from './Col'
import Container from './Container'
import Logo from './Logo'
import Nav from './Nav'
import NavOverlay from './NavOverlay'
import styles from './header.module.scss'
import Row from './Row'


export default function Header(){
    // state variable, "setter" function
    const [isOverlayActive, setOverlayActive] = useState(false);
    return <header className={styles.header}>
        {isOverlayActive &&
        <NavOverlay closeHandler={() => {
            setOverlayActive(false)
        }}/>
        }

        <Container>
            <Row alignItems="center">
            <Col xs="6" sm="3">
            <Logo /> 
            </Col>
            <Col xs="6" sm="9" textAlign="right">
            <Nav />
            <ButtonUI 
            icon="menu"
            color="white"
            clickHandler={() => {
                setOverlayActive(true)
            }}
            />
            </Col>
            </Row>
        </Container>
    </header>
}
