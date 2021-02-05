import { render, screen } from "@testing-library/react";
import { LatestShowsTitle } from "./LatestShowTitle";

describe("LatestShow", () => {
  describe("LatestShowsTitle", () => {
    test("renders LatestShowsTitle", () => {
      render(<LatestShowsTitle />);
      const component = screen.getByTestId("latestshowstitle");
      expect(component).toBeInTheDocument();
    });

    test("renders pending text", () => {
      render(<LatestShowsTitle />);
      const component = screen.getByText(/Latest Shows/i);
      expect(component).toBeInTheDocument();
    });
  });
});
