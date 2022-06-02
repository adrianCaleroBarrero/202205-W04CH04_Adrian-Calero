import { render, screen } from "@testing-library/react";
import { Action } from "./action";
import { Display } from "./display";

describe("Given the component Info", () => {
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
