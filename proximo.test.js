import { test, expect } from "vitest";
import { proximo } from "./proximo";

test("proximo(0) retorn 1", () => {
  expect(proximo(0)).toBe(1);
});
test("proximo(1) retorn 3", () => {
  expect(proximo(1)).toBe(3);
});
test("proximo(2) retorn 5", () => {
  expect(proximo(2)).toBe(5);
});
test("proximo(3) retorn 5", () => {
  expect(proximo(3)).toBe(4);
});
