import { Chevron, Film, fullStar, halfStar, star } from "@/components/Icons";
import { render } from "@testing-library/react";

describe("Test Icons", () => {
  test("Chevron Icon", () => {
    const { baseElement } = render(<Chevron />);
    expect(baseElement).toBeDefined();
  });
  test("Film Icon", () => {
    const { baseElement } = render(<Film />);
    expect(baseElement).toBeDefined();
  });
  test("fullStar Icon", () => {
    const { baseElement } = render(fullStar());
    expect(baseElement).toBeDefined();
  });
  test("halfStar Icon", () => {
    const { baseElement } = render(halfStar());
    expect(baseElement).toBeDefined();
  });
  test("star Icon", () => {
    const { baseElement } = render(star());
    expect(baseElement).toBeDefined();
  });
});
