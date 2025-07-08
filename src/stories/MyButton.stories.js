// stories/MyButton.stories.js
import '../header/MyButton'; // ✅ Adjust path as needed

export default {
    tags: ['autodocs'],
    title: 'Components/MyButton', // This shows in the Storybook sidebar
    argTypes: {
        label: { control: 'text' },
        primary: { control: 'boolean' },
        size: { control: 'radio', options: ['small', 'medium', 'large'] },
        backgroundColor: { control: 'color' }
    }
};

const Template = ({ label, primary, size, backgroundColor }) => {
    return `
    <my-button
      label="${label}"
      ?primary=${primary}
      size="${size}"
      backgroundColor="${backgroundColor}"
    ></my-button>
  `;
};

export const Primary = Template.bind({});
Primary.args = {
    label: 'Click Me',
    primary: true,
    size: 'medium',
    backgroundColor: ''
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Cancel',
    primary: false,
    size: 'medium',
    backgroundColor: ''
};
