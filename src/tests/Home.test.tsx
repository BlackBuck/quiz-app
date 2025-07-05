import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { Category } from "@/app/lib/definitions";

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () : Promise<Category[]> => Promise.resolve([{id: 1,  name: "Science" }, {id: 2, name: "Math" }, {id: 3, name: "Tech"}]),
  })
) as jest.Mock;

describe("Home Page", () => {
  it("renders categories from API", async () => {
    render(await Home());

    expect(await screen.findByText("Science")).toBeInTheDocument();
    expect(await screen.findByText("Math")).toBeInTheDocument();
    expect(await screen.findByText("Tech")).toBeInTheDocument();
  });
});
