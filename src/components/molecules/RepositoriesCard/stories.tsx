import { Story, Meta } from '@storybook/react/types-6-0'
import { RepositoriesCard } from '.'

export default {
   title: 'Card',
   component: RepositoriesCard
} as Meta

export const Basic: Story = ({ args }) => <RepositoriesCard {...args} />
