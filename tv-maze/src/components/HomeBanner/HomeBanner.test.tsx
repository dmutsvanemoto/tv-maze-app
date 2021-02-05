import { render, screen } from "@testing-library/react";
import { HomeBanner } from "./HomeBanner";
import faker from 'faker';

const title = faker.lorem.sentence();
const description = faker.lorem.paragraph();

describe("HomeBanner", () => {
    test("renders HomeBanner", () => {
      render(<HomeBanner title={title} description={description} />);
      const component = screen.getByTestId("homebanner");
      expect(component).toBeInTheDocument();
    });

    test("renders title", () => {
      render(<HomeBanner title={title} description={description} />);
      const component = screen.getByTestId("title");
      expect(component).toBeInTheDocument();
    });

    test("renders description", () => {
        render(<HomeBanner title={title} description={description} />);
        const component = screen.getByTestId("description");
        expect(component).toBeInTheDocument();
      });
});
