import Input from "@/components/Input";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("Test Input Component", () => {
  it("should render", async () => {
    const { baseElement } = render(
      <Input type="text" label="username" name="name" onChange={() => null} />,
    );

    const span = await screen.findByText("username");

    expect(baseElement).toBeDefined();
    expect(span).toBeInTheDocument();
  });
  it("should render different types", async () => {
    const spy = jest.fn();

    const { baseElement } = render(
      <form>
        <Input
          type="text"
          label="username"
          name="name"
          value=""
          onChange={() => null}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          value="customValue"
          onChange={spy}
        />
        <Input
          type="checkbox"
          label="terms and conditions"
          name="termsAndConditions"
          onChange={spy}
        />
      </form>,
    );

    const spanName = (await screen.findByText("username")).nextSibling;
    const spanPass = (await screen.findByText("Password")).nextSibling;
    const spanTC = (await screen.findByText("terms and conditions"))
      .previousSibling;
    act(() => {
      /* fire events that update state */
      if (spanName) (spanName as any).focus();
      if (spanPass) (spanPass as any).focus();
      if (spanName) (spanName as any).focus();
    });

    fireEvent.click(spanTC as Node);
    expect(spy).toHaveBeenCalledWith("termsAndConditions", true);

    fireEvent.change(spanPass as Node, { target: { value: "change" } });
    expect(spy).toHaveBeenCalledWith("password", "change");
    expect(baseElement).toBeDefined();
    expect(spanName).toBeInTheDocument();
    expect(spanPass).toBeInTheDocument();
    expect(spanTC).toBeInTheDocument();
  });
});
