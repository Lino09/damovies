import Header from "@/components/Header";
import { render, screen } from "@testing-library/react";

describe("Test Header Component", () => {
  it("should render", async () => {
    const { baseElement } = render(<Header />);

    const span = await screen.findByText("DaMovies.");

    expect(baseElement).toBeDefined();
    expect(span).toBeInTheDocument();
  });
});
