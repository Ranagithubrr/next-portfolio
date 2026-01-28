import Image from "next/image";
import Link from "next/link";
import { blogData } from "@/constants/constants";

const BlogIndexPage = () => {
  return (
    <section className="py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex text-sm text-emerald-200 hover:text-emerald-100 mb-6">
          ← Back to home
        </Link>
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-white">
            Blog
          </h1>
          <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
            Practical notes on UI, performance, and real-world front-end delivery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
          {blogData.map((post) => (
            <article
              key={post.id}
              className="glass-panel group rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6 shadow-[0_14px_40px_rgba(2,6,23,0.55)] transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300/30 hover:shadow-[0_18px_55px_rgba(15,23,42,0.6)]"
            >
              <div className="relative mb-4 overflow-hidden rounded-xl border border-slate-800/70 bg-slate-900/60">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={640}
                  height={360}
                  className="h-40 w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                  {post.tag}
                </span>
                <span className="text-xs text-slate-400">{post.readTime}</span>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-slate-100">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-slate-400">{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-emerald-200 transition-colors group-hover:text-emerald-100"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogIndexPage;
