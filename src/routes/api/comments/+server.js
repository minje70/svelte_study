import { json } from '@sveltejs/kit'
import { comments } from '$lib/comments'

// export function GET() {
//   return new Response(JSON.stringify(comments), {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
// }

export function GET() {
  return json(comments)
}

// POST는 async로 구현한다
// requestEvent: 스벨트킷에서 제공하는 객체
export async function POST(requestEvent) {
  const { request } = requestEvent;
  const { text } = await request.json();
  const newComment = {
    id: comments.length + 1,
    text
  };
  comments.push(newComment);
  
  // return new Response(JSON.stringify(newComment), { status: 201 })
  return json(newComment, { status: 201 });
}
