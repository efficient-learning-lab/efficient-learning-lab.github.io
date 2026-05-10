export const title = "Home";

export default function ({ news }: ELL.Data, _helpers: Lume.Helpers) {
  return (
    <>
      <div>
        <h1 class="text-center">Efficient Learning Laboratory</h1>
        <h2 class="text-center font-light">Sungkyunkwan University</h2>
      </div>
      <div class="p-4 bg-gray-100 text-gray-900 text-center rounded-lg">
        Welcome to <span class="font-bold">ELLab</span>!
        We are interested in building <span class="font-bold">efficient</span> deep learning models and algorithms.
      </div>
      <div>
        <h3>Research Topics</h3>
        We aim to enhance the efficiency of deep learning across various AI fields. We primarily focus on developing data-efficient algorithms and applying them to real-world problems. Key topics include:
        <ul>
          <li>Self-supervised learning, few-shot learning, meta-learning, transfer learning, continual learning, </li>
          <li>Applications in computer vision (e.g., images), graphs (e.g., molecules), tabular data (e.g., financial/medical data).</li>
        </ul>
      </div>
      <div>
        <h3>How to Join?</h3>
        <div class="text-wrap">
          We are always looking for highly motivated graduate (or internship) students with a strong interest in the area of deep learning.
          If you are interested in joining us, please <a href="/apply">check this page</a>.
        </div>
      </div>
      <div>
        <h3>News</h3>
        <ul>
          {(news || []).map(({ date, content }) => (
            <li><span class="font-mono">[{date}]</span> {content}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
