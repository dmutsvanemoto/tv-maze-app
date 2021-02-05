import { render, screen } from "@testing-library/react";
import { Show } from "../../interfaces/Show";
import { LatestShows } from "./LatestShows";


const shows: Show[] = [
    { id: 1, title:"title 1", description: "some description 1"},
    { id: 2, title:"title 2", description: "some description 2"}
]

describe("LatestShow", () => {
  test("renders LatestShow", () => {
    render(<LatestShows />);
    const component = screen.getByTestId("latestshows");
    expect(component).toBeInTheDocument();
  });

  test("renders latest shows title", () => {
    render(<LatestShows />);
    const component = screen.getByTestId("latestshowstitle");
    expect(component).toBeInTheDocument();
  });

  test("renders pending when there are no shows", async () => {
    render(<LatestShows />);
    const component = await screen.findByText(/Coming Soon.../i);
    expect(component).toBeInTheDocument();
  });

  test("renders shows", async () => {
    render(<LatestShows shows={shows} />);
    const show1 = await screen.findByText(/title 1/i);
    expect(show1).toBeInTheDocument();

    const show2 = await screen.findByText(/title 2/i);
    expect(show2).toBeInTheDocument();
  });
});
