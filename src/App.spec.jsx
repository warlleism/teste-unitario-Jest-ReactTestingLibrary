import { render, screen } from "@testing-library/react"
import App from "./App"

describe('Jest', () => {
    it('should word', () => {
        expect(1).toBe(1)
    })

    it('should word2', () => {
        expect(2).toBe(2)
    })

    it('should display elements', () => {
        render(<App />)

        expect(
            screen.getByRole('heading', { name: /vite \+ react/i })
        ).toBeInTheDocument()
    })

})