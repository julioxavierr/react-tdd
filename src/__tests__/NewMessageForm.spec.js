import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NewMessageForm } from "../NewMessageForm";

describe("<NewMessageForm />", () => {
  describe("clicking the send button", () => {
    const onSend = jest.fn();

    it("calls the send handler", async () => {
      render(<NewMessageForm onSend={onSend} />);

      // type message
      await userEvent.type(screen.getByTestId("messageText"), "New message");

      // click button
      userEvent.click(screen.getByTestId("sendButton"));

      // check that the message was cleared
      expect(screen.getByTestId("messageText").value).toEqual("");

      // expect it to have called the send handler
      expect(onSend).toHaveBeenCalledTimes(1);
      expect(onSend).toHaveBeenCalledWith("New message");
    });
  });
});
