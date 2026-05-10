export const title = "Members";

function memberElement({ homepage, name }: ELL.Member) {
  return (
    <li>
      {homepage ? <a href={homepage}>{name}</a> : <span>{name}</span>}
    </li>
  );
}

function memberList(members: ELL.Member[], position: string, title: string) {
  members = members.filter((member) => member.position == position);
  if (members.length > 0) {
    return (
      <div>
        <h3>{title}</h3>
        <ul>
          { members.map(memberElement) }
        </ul>
      </div>
    );
  }
  else {
    return <></>;
  }
}

export default function ({ members }: ELL.Data, _helpers: Lume.Helpers) {
  return (
    <>
      <div>
        <h1>Members</h1>
      </div>
      { memberList(members, "Professor", "Professor") }
      { memberList(members, "PhD", "PhD Students") }
      { memberList(members, "MS", "MS Students") }
    </>
  );
}
