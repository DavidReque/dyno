import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

it("should render the homepage", () => {
  render(<Home />);
  expect(screen.getByText("Hola")).toBeInTheDocument();
});
