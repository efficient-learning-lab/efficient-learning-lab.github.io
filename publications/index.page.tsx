export const title = "Publications";

function publicationElement(pub: ELL.Publication, helpers: Lume.Helpers) {
  const tagColors: Record<string, string> = {
    Conference: "bg-blue-100 text-blue-800",
    Journal: "bg-green-100 text-green-800",
    Workshop: "bg-gray-100 text-gray-800",
    Preprint: "bg-gray-100 text-gray-800",
    "Under Review": "bg-gray-100 text-gray-800",
  };

  return (
    <li>
      <span class={"text-xs font-medium px-2.5 py-0.5 rounded " + tagColors[pub.type]}>{pub.type}</span>
      <h4>{pub.title}</h4>
      <div class="italic">
        {pub.authors.map((author: string | ELL.Member, idx: number) =>
          <>
            {idx ? ", " : ""}
            {typeof author === "string" ? <span class="text-nowrap">{author}</span> : <span class="text-nowrap underline">{author.name}</span>}
            <sup>{(pub.firstAuthors || [0]).includes(idx) ? "1" : "" }</sup>
            <sup>{(pub.correspondingAuthors || [pub.authors.length-1]).includes(idx) ? "+" : "" }</sup>
          </>
        )}
      </div>
      <div dangerouslySetInnerHTML={{__html: helpers.md(pub.description)}}>
      </div>
    </li>
  );
}

export default function ({ publications }: ELL.Data, helpers: Lume.Helpers) {
  return (
    <>
      <div>
        <h1>Publications</h1>
      </div>
      <div>
        <span class="underline">ELL member</span>, first author<sup>1</sup>, corresponding author<sup>+</sup>
      </div>
      <ul class="space-y-4 list-none mx-0">
        {publications.map((p) => publicationElement(p, helpers))}
      </ul>
    </>
  );
}
