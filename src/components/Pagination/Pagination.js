import React from 'react'
import { Container } from './PaginationStyle';
export const Pagination = (props) => {

    const { onLeftClick, onRightClick, page, totalPages } = props;

    return (
        <Container>
            <section>
                <button onClick={onLeftClick}>prev</button>
            </section>
            <section>{page} de {totalPages}</section>
            <section>
                <button onClick={onRightClick}>next</button>
            </section>
        </Container>
    )
}

export default Pagination