import { render, screen } from '@testing-library/react'

import { RepositoriesCard } from '.'

describe('<RepositoriesCard />', () => {
   it('shold render the heading', () => {
      const { container } = render(
         <RepositoriesCard
            name={''}
            dataCreate={''}
            html_url={''}
            dataUpdated={''}
         />
      )

      expect(
         screen.getByRole('heading', { name: /RepositoriesCard/i })
      ).toBeInTheDocument()

      expect(container.firstChild).toMatchSnapshot()
   })
})
