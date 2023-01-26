import React from "react";

function Messages() {
  return (
    <div>
      <h1>Messages</h1>
      <form>
        <div>
          <textarea
            rows="4"
            cols="50"
            type="text"
            name="comment"
            placeholder="Enter text here...."
          />
        </div>
        <br />
        <div>
          <input type="submit" value="Send Message" />
        </div>
      </form>
    </div>
  );
}
export default Messages;
