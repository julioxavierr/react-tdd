import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NewMessageForm } from "../NewMessageForm";

describe("<NewMessageForm />", () => {
  describe("clicking the send button", () => {
    it("clears the text field", async () => {
      render(<NewMessageForm />);

      await userEvent.type(screen.getByTestId("messageText"), "New message");
      userEvent.click(screen.getByTestId("sendButton"));

      expect(screen.getByTestId("messageText").value).toEqual("");
    });
  });
});
