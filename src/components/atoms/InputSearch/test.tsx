import { render, screen } from '@testing-library/react'

import { InputSearch } from '.'

describe('<InputSearch />', () => {
   it('shold render the heading', () => {
      const { container } = render(<InputSearch placeholder={''} />)

      expect(
         screen.getByRole('heading', { name: /InputSearch/i })
      ).toBeInTheDocument()

      expect(container.firstChild).toMatchSnapshot()
   })
})
