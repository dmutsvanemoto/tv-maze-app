import { render, screen } from "@testing-library/react";
import { Title } from "./Title";
import faker from 'faker';

const title = faker.lorem.sentence();

describe("HomeBanner", () => {
  describe("Title", () => {
    test("renders title", () => {
      render(<Title title={title} />);
      const component = screen.getByTestId("title");
      expect(component).toBeInTheDocument();
    });

    test("renders title text", () => {
      render(<Title title={title} />);
      const component = screen.getByText(title);
      expect(component).toBeInTheDocument();
    });
  });
});
