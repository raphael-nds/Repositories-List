import { Story, Meta } from '@storybook/react/types-6-0'
import { InputSearch } from '.'

export default {
   title: 'InputSearch',
   component: InputSearch
} as Meta

export const Basic: Story = () => <InputSearch placeholder={'place'} />
