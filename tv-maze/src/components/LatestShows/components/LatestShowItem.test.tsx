import { render, screen } from "@testing-library/react";
import { LatestShowItem } from "./LatestShowItem";
import faker from "faker";
import { Show } from "../../../interfaces/Show";

const show: Show = {
    id: 1,
    description: "some description",
    title: faker.lorem.sentence(),
    ratings: [{ id: 1, rating: 1 }, { id: 2, rating: 3}]
}

describe("LatestShow", () => {
  describe("LatestShowItem", () => {
    test("renders LatestShowItem", () => {
      render(<LatestShowItem show={show} />);
      const component = screen.getByTestId("latestshowitem");
      expect(component).toBeInTheDocument();
    });

    test("renders image", () => {
      render(<LatestShowItem show={show} />);
      const component = screen.getByTestId("latestshowitemimage");
      expect(component).toBeInTheDocument();
    });

    test("renders ratings", () => {
      render(<LatestShowItem show={show} />);
      const component = screen.getByTestId("latestshowitemrating");
      expect(component).toBeInTheDocument();
    });

    test("renders title", () => {
        render(<LatestShowItem show={show} />);
        const component = screen.getByTestId("latestshowitemtitle");
        expect(component).toBeInTheDocument();
      });
  });
});
