import { screen, render } from '@testing-library/react';
import Footer from './Footer'

describe('Should render correctly the footer', () => {
    it('should show the team credit', () => {
        render(<Footer />)
        const expected = screen.getByText(/Desenvolvido pela Equipe Rocket/i)
        expect(expected).toBeInTheDocument()
    })
    it('should show the school name', () => {
        render(<Footer />)
        const expected = screen.getByText(/start/i)
        expect(expected).toBeInTheDocument()
    })
})