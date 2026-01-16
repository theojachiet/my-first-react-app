// App.test.jsx

import { describe, it, expect, vi } from "vitest";
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import App from "./App";
import Input from "./Profile";
import userEvent from '@testing-library/user-event';

describe("App component", () => {
  it('Input Value is updated correctly', async () => {
    const user = userEvent.setup();
    render(<App/>);

    const input = screen.getByRole('textbox');
    await user.type(input, 'React');

    expect(input.value).toBe('React');
  })
});

describe('Input Component', () => {
  it('handleChange is called everytime an input is made', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    render(<Input handleChange={handleChange} inputValue="" />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'React');

    expect(handleChange).toHaveBeenCalledTimes(5);
  })
})
