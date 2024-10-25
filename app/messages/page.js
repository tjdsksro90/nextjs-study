import { unstable_noStore } from "next/cache"; // dynamic = "force-dynamic" 함수보다 권장하는 방법
import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";

// export const revalidate = 5; // NextJS에서 정한 해당 초만큼 재요청
// export const dynamic = "force-dynamic"; // NextJS에서 정한 cache: 'no-store'과 같은 기능(항상 다시 가져옴)

export default async function MessagesPage() {
  // unstable_noStore(); // 함수내에서 명시적으로 사용하기에 권장
  // const response = await fetch("http://localhost:8080/messages", {
  //   next: { tag: ["msg"] },
  // });
  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
