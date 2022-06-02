import { render, screen } from "@testing-library/react";
import { Action } from "./action";

describe("Given the component Action", () => {
    const mockAddTask = jest.fn();
    const mockTaskToAdd = {
        title: "test",
        responsible: "test description",
    };

    describe("When calling it", () => {
        test("Then it should render", () => {
            // Arrange
            render(<Action />);

            const titleInput = screen.getByText("Call");
            const otherTitleInput = screen.getByText("Hang");
            expect(titleInput).toBeInTheDocument();
            expect(otherTitleInput).toBeInTheDocument();
        });
    });
});
