import React from 'react'
import setaDireita from "../../assets/direita.png"
import setaEsquerda from "../../assets/esquerda.png"
import { Container } from './PaginationStyle';
export const Pagination = (props) => {

    const { onLeftClick, onRightClick, page, totalPages } = props;

    return (
        <Container>
            <section id="seta-esquerda">
                <button onClick={onLeftClick}>
                    <img src={setaEsquerda} alt="" />
                </button>
            </section>
            <section>{page} de {totalPages}</section>
            <section id="seta-direita">
                <button onClick={onRightClick}>
                    <img src={setaDireita} alt="" />
                </button>
            </section>
        </Container>
    )
}

export default Pagination