import Button from "@/components/Button";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Test Button Component", () => {
  it("should render", () => {
    render(<Button type="button">Button Test</Button>);

    const btn = screen.getByText("Button Test");

    expect(btn).toBeInTheDocument();
  });

  it("should render disabled button", () => {
    const spy = jest.fn();
    render(
      <Button type="button" variant="secondary" onClick={spy} disabled={true}>
        Disabled
      </Button>,
    );

    const btn = screen.getByText("Disabled");
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);

    expect(spy).not.toHaveBeenCalled();
  });
});
