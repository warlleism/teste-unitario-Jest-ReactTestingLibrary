import { fireEvent, render, screen } from '@testing-library/react'
import Counter from './counter'
describe('<Counter/>', () => {
    it('should display elements', () => {
        render(<Counter initialCount={0} />)

        const value = screen.getByTestId('countNumber').textContent
        console.log(value)

        expect(value).toEqual('0')
    })

    it('should increment 1 when click at increment button', () => {
        render(<Counter initialCount={0} />)

        const buttonIncrement = screen.getByRole('button', { name: 'increment' })

        expect(buttonIncrement).toBeEnabled()

        fireEvent.click(buttonIncrement)
        expect(screen.getByTestId('countNumber').textContent).toEqual('1')
    })

    it('should decrement 1 when click at decrement button', () => {
        render(<Counter initialCount={0} />)

        const buttonDecrement = screen.getByRole('button', { name: 'decrement' })

        expect(buttonDecrement).toBeEnabled()

        fireEvent.click(buttonDecrement)
        expect(screen.getByTestId('countNumber').textContent).toEqual('-1')

    })

    it('should restart 0 when click at restart button', () => {
        render(<Counter initialCount={0} />)

        const buttonRestart = screen.getByRole('button', { name: 'restart' })

        expect(buttonRestart).toBeEnabled()

        fireEvent.click(buttonRestart)
        expect(screen.getByTestId('countNumber').textContent).toEqual('0')

    })

    it('should switchSings -1 when click at switchSings button', () => {
        render(<Counter initialCount={1} />)

        const buttonSwitchSings = screen.getByRole('button', { name: 'switchSings' })

        expect(buttonSwitchSings).toBeEnabled()

        fireEvent.click(buttonSwitchSings)
        expect(screen.getByTestId('countNumber').textContent).toEqual('-1')

    })
})