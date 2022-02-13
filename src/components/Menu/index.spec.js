import {fireEvent, render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import NavMenu from './Menu'

describe('<NavMenu />', () => {
    it('should render the geração page', () => {
        render(
        <BrowserRouter>
            <NavMenu geracao="active" />
        </BrowserRouter>
        )

        const button = screen.getByTestId('geracao')
        fireEvent.click(button)
        const expected = window.location.pathname === '/geracao' ? true : false
        expect(expected).toBeTruthy()
        expect(button).toHaveStyle('border-bottom: 3px solid #fff;')
    })

    it('should render the categorias page', () => {
        render(
        <BrowserRouter>
            <NavMenu categorias="active" />
        </BrowserRouter>
        )

        const button = screen.getByTestId('categorias')
        fireEvent.click(button)
        const expected = window.location.pathname === '/categorias' ? true : false
        expect(expected).toBeTruthy()
        expect(button).toHaveStyle('border-bottom: 3px solid #fff;')
    })

    it('should render the sobre page', () => {
        render(
        <BrowserRouter>
            <NavMenu sobre="active" />
        </BrowserRouter>
        )

        const button = screen.getByTestId('sobre')
        fireEvent.click(button)
        const expected = window.location.pathname === '/sobre' ? true : false
        expect(expected).toBeTruthy()
        expect(button).toHaveStyle('border-bottom: 3px solid #fff;')
    })
})