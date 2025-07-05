import { render, screen } from "@testing-library/react";
import CategoryPage from "@/app/quizzes/[id]/page";

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        { id: 1, title: "Economics 101", description: "Basics of economics" },
        { id: 2, title: "Microeconomics", description: "Supply & demand" },
      ]),
  })
) as jest.Mock;

describe("CategoryPage SSR", () => {
  it("renders quiz cards from API", async () => {
    render(await CategoryPage({ params:  Promise.resolve({ id: "economics" })}));

    expect(await screen.findByText("Economics 101")).toBeInTheDocument();
    expect(await screen.findByText("Microeconomics")).toBeInTheDocument();
  });

  it("handles failed fetch gracefully", async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({ ok: false })
    );

    render(await CategoryPage({ params: Promise.resolve({ id: "invalid" }) }));
    expect(await screen.findByText(/Failed to load quizzes/i)).toBeInTheDocument();
  });
});
