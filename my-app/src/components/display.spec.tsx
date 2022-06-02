import { render, screen } from "@testing-library/react";
import { Display } from "./display";

describe("Given the component Display", () => {
    const mockAddTask = jest.fn();
    const mockTaskToAdd = {
        title: "test",
        responsible: "test description",
    };

    describe("When calling it", () => {
        test("Then it should render", () => {
            // Arrange
            render(<Display />);

            const titleInput = screen.getByText("667359961");
            expect(titleInput).toBeInTheDocument();
        });
    });
});
