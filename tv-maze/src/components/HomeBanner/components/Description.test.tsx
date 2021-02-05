import { render, screen } from "@testing-library/react";
import { Description } from "./Description";
import faker from 'faker';

const description = faker.lorem.paragraph();

describe("HomeBanner", () => {
  describe("Description", () => {
    test("renders description", () => {
      render(<Description description={description} />);
      const component = screen.getByTestId("description");
      expect(component).toBeInTheDocument();
    });

    test("renders description text", () => {
      render(<Description description={description} />);
      const component = screen.getByText(description);
      expect(component).toBeInTheDocument();
    });
  });
});
