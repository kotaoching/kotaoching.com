import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "I'm Ko Tao Ching" },
    { name: "description", content: "高熹的个人主页" },
  ];
};

export default function Index() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mt-24">
        <h1 className="text-3xl font-bold">Ko Tao Ching</h1>
        <div className="mt-5 text-base">You can't use an old map to explore a new world.</div>
      </div>
      <ul className="mt-10">
        <li className="my-6">
          <Link to={`/posts`}>
            <div className="text-base text-slate-800">日志</div>
            <div className="text-sm text-slate-400">/posts</div>
          </Link>
        </li>
        <li className="my-6">
          <a
            target="_blank"
            href="https://github.com/kotaoching"
            rel="noreferrer"
          >
            <div className="text-base text-slate-800">Github</div>
            <div className="text-sm text-slate-400">https://github.com/kotaoching</div>
          </a>
        </li>
        <li className="my-6">
          <a
            target="_blank"
            href="https://twitter.com/kotaoching"
            rel="noreferrer"
          >
            <div className="text-base text-slate-800">Twitter</div>
            <div className="text-sm text-slate-400">https://twitter.com/kotaoching</div>
          </a>
        </li>
      </ul>
    </div>
  );
}
