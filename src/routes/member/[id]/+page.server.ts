import { friends } from '$lib/assets/data';

export function load({ params }) {
  const id = params.id
  let targetMember = null;
  friends.forEach((friend) => {
    if (friend.id === id) {
      targetMember = friend
    }
  })
  return { member: targetMember }
}
