import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/App";

describe("app", () => {
  it("should render app", () => {
    render(<App />);

    let el = screen.getByRole("heading");

    expect(el).toHaveTextContent("Vite + React");
    expect(el).toBeInTheDocument();
  });
});
