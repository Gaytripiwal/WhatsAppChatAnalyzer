// export default function ActiveUsers({ users }) {
//   return (
//     <ul>
//       {users.map(u => <li key={u}>{u}</li>)}
//     </ul>
//   );
// }

export default function ActiveUsers({ users }) {
  if (!users || users.length === 0) {
    return <p>No active users</p>;
  }

  return (
    <ul>
      {users.map((u) => (
        <li key={u}>{u}</li>
      ))}
    </ul>
  );
}
