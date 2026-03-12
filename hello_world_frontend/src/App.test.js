import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the Skills modal title", () => {
  render(<App />);
  const title = screen.getByRole("heading", { name: /skills for this chat/i });
  expect(title).toBeInTheDocument();
});
