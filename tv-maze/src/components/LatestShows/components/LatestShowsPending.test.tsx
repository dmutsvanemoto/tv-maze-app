import { render, screen } from "@testing-library/react";
import { LatestShowsPending } from "./LatestShowsPending";

describe("LatestShow", () => {
  describe("LatestShowsPending", () => {
    test("renders LatestShowsPending", () => {
      render(<LatestShowsPending />);
      const component = screen.getByTestId("latestshowspending");
      expect(component).toBeInTheDocument();
    });

    test("renders pending text", () => {
      render(<LatestShowsPending />);
      const component = screen.getByText(/Coming Soon/i);
      expect(component).toBeInTheDocument();
    });
  });
});
