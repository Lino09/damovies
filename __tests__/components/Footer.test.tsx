import Footer from "@/components/Footer";
import { render, screen } from "@testing-library/react";

describe("Test Footer Component", () => {
  it("should render", async () => {
    const { baseElement } = render(<Footer />);

    const span = await screen.findByText(
      "We are coding the world of tomorrow_",
    );

    expect(baseElement).toBeDefined();
    expect(span).toBeInTheDocument();
  });
});
