import { act, render } from "@testing-library/react";
import { Context } from "../Context";

describe("Context", () => {
  it("filter by ride setter", () => {
    const { result } = render(() => Context());
    act(() => {
      result.current.filterByRide({ target: { value: "Ride" } });
    });

    expect(result.current.filterType).toBe("Ride");
  });
});
