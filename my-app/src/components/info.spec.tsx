import { render, screen } from "@testing-library/react";
import { Info } from "./info";

describe("Given the component Info", () => {
    const mockAddTask = jest.fn();
    const mockTaskToAdd = {
        title: "test",
        responsible: "test description",
    };

    describe("When calling it", () => {
        test("Then it should render", () => {
            // Arrange
            render(<Info />);

            const titleInput = screen.getByText("Calling...");
            expect(titleInput).toBeInTheDocument();
        });
    });
});
