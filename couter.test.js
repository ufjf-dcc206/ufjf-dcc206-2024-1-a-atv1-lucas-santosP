import { test, expect } from "vitest";

test("teste de div", () => {
  const div = document.createElement("div");

  div.textContent = "Hi!";
  expect(div).toHaveTextContent("Hi!");
});
