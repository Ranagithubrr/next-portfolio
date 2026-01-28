import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogData } from "@/constants/constants";

interface BlogPageProps {
  params: { slug: string };
}

const BlogPage = ({ params }: BlogPageProps) => {
  const post = blogData.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="py-20 px-6 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-emerald-200 hover:text-emerald-100">
          ← Back to home
        </Link>

        <div className="mt-6 glass-panel rounded-3xl border border-slate-800/70 bg-slate-950/60 p-6 shadow-[0_16px_40px_rgba(2,6,23,0.55)]">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 font-semibold uppercase tracking-[0.2em] text-slate-200">
              {post.tag}
            </span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-white">
            {post.title}
          </h1>
          <p className="mt-3 text-slate-300">{post.excerpt}</p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/60">
            <Image
              src={post.image}
              alt={post.title}
              width={900}
              height={480}
              className="h-64 w-full object-cover"
              priority
            />
          </div>

          <div className="mt-6 space-y-4 text-slate-200 leading-relaxed">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-white mb-3">Key takeaways</h2>
            <ul className="space-y-2 text-sm text-slate-300">
              {post.highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
