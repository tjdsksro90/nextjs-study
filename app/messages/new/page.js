import { redirect } from "next/navigation";

import { addMessage } from "@/lib/messages";
import { revalidatePath, revalidateTag } from "next/cache";

export default function NewMessagePage() {
  async function createMessage(formData) {
    "use server";

    const message = formData.get("message");
    addMessage(message);
    redirect("/messages");
    // revalidatePath('/');
    // revalidatePath('/message'); // 새 글 작성시 업데이트 안되는 문제 해결 방법 1
    revalidateTag("msg"); // 새 글 작성시 업데이트 안되는 문제 해결 방법 2
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required rows="5" />
        </p>

        <p className="form-actions">
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
