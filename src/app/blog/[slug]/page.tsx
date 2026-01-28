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

  const isAwsGuide = post.slug === "aws-cicd-deployment";
  const isPerfGuide = post.slug === "frontend-performance-checklist";

  return (
    <section className="py-20 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-sm text-emerald-200 hover:text-emerald-100">
          ← Back to home
        </Link>

        <div className="mt-6 glass-panel rounded-3xl border border-slate-800/70 bg-slate-950/60 p-6 shadow-[0_16px_40px_rgba(2,6,23,0.55)]">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 font-semibold uppercase tracking-[0.2em] text-slate-200">
              {post.tag}
            </span>
            <span className="text-slate-300">Author: Masud Rana</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-white">
            {post.title}
          </h1>
          <p className="mt-3 text-slate-300">{post.excerpt}</p>

          <div className="mt-6 overflow-hidden rounded-2xl">
            <Image
              src={post.image}
              alt={post.title}
              width={900}
              height={480}
              className="h-64 w-full object-contain"
              priority
            />
          </div>

          {isAwsGuide ? (
            <div className="mt-6 space-y-8 text-slate-200 leading-relaxed">
              <p>
                Deploying a Next.js app to AWS gives you full control, predictable
                costs, and real production experience. In this guide, we’ll deploy
                a Next.js app on an EC2 instance, run it with PM2, serve it through
                Nginx, and automate deployments using GitHub Actions.
              </p>

              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/50 p-5 overflow-x-auto">
                <h2 className="text-lg font-semibold text-white mb-3">Architecture overview</h2>
                <pre className="whitespace-pre-wrap break-words text-sm text-slate-300">{`GitHub → GitHub Actions → EC2
                         ├── PM2 (runs Next.js)
                         └── Nginx (reverse proxy)`}</pre>
              </div>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">0. Prerequisites</h2>
                <ul className="space-y-2 text-sm text-slate-300">
                  {[
                    "A Next.js app pushed to GitHub",
                    "An AWS account",
                    "Basic Linux & terminal knowledge",
                    "A domain name (optional but recommended)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">1. Create an EC2 instance</h2>
                <div className="space-y-3 text-sm text-slate-300">
                  <p>Launch an EC2 instance with Ubuntu 22.04 LTS (t2.micro).</p>
                  <p>Security group: allow SSH (22), HTTP (80), HTTPS (443).</p>
                  <div className="rounded-xl border border-slate-800/70 bg-slate-900/70 p-4 overflow-x-auto">
                    <pre className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap break-words">{`chmod 400 your-key.pem
ssh -i your-key.pem ubuntu@YOUR_EC2_PUBLIC_IP`}</pre>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">2. Install system dependencies</h2>
                <div className="rounded-xl border border-slate-800/70 bg-slate-900/70 p-4 overflow-x-auto">
                  <pre className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap break-words">{`sudo apt update && sudo apt upgrade -y

# Node.js (LTS)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

node -v
npm -v

# PM2
sudo npm install -g pm2

# Nginx
sudo apt install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx`}</pre>
                </div>
                <p className="text-sm text-slate-300 mt-3">
                  Visit http://YOUR_EC2_IP — you should see the Nginx default page.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">3. Set up your Next.js app</h2>
                <div className="rounded-xl border border-slate-800/70 bg-slate-900/70 p-4 overflow-x-auto">
                  <pre className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap break-words">{`cd /var/www
sudo git clone https://github.com/your-username/your-repo.git
sudo chown -R ubuntu:ubuntu your-repo
cd your-repo

npm install
npm run build

pm2 start npm --name "nextjs-app" -- start
pm2 save
pm2 startup`}</pre>
                </div>
                <p className="text-sm text-slate-300 mt-3">
                  Your app should now be running on port 3000.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">4. Configure Nginx</h2>
                <div className="rounded-xl border border-slate-800/70 bg-slate-900/70 p-4 overflow-x-auto">
                  <pre className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap break-words">{`sudo nano /etc/nginx/sites-available/nextjs`}</pre>
                </div>
                <div className="rounded-xl border border-slate-800/70 bg-slate-900/70 p-4 mt-3 overflow-x-auto">
                  <pre className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap break-words">{`server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}`}</pre>
                </div>
                <div className="rounded-xl border border-slate-800/70 bg-slate-900/70 p-4 mt-3 overflow-x-auto">
                  <pre className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap break-words">{`sudo ln -s /etc/nginx/sites-available/nextjs /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx`}</pre>
                </div>
                <p className="text-sm text-slate-300 mt-3">
                  Your app is now accessible via port 80 🎉
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">5. Add SSL with Certbot (optional)</h2>
                <div className="rounded-xl border border-slate-800/70 bg-slate-900/70 p-4 overflow-x-auto">
                  <pre className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap break-words">{`sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

sudo certbot renew --dry-run`}</pre>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">6. GitHub Actions CI/CD</h2>
                <p className="text-sm text-slate-300">
                  Create an SSH key, add it to the EC2 authorized_keys, and store
                  the private key in GitHub Secrets (EC2_HOST, EC2_USER, EC2_KEY).
                </p>
                <div className="rounded-xl border border-slate-800/70 bg-slate-900/70 p-4 mt-3 overflow-x-auto">
                  <pre className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap break-words">{`name: Deploy Next.js App

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Deploy to EC2
        uses: appleboy/ssh-action@v0.1.10
        with:
          host: \${{ secrets.EC2_HOST }}
          username: \${{ secrets.EC2_USER }}
          key: \${{ secrets.EC2_KEY }}
          script: |
            cd /var/www/your-repo
            git pull origin main
            npm install
            npm run build
            pm2 restart nextjs-app`}</pre>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">7. Final result</h2>
                <p className="text-sm text-slate-300">
                  Every push to <code className="text-emerald-200">main</code> triggers a
                  deploy: SSH → pull → build → PM2 restart. 🚀
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">8. Common issues & fixes</h2>
                <div className="space-y-3 text-sm text-slate-300">
                  <div className="rounded-xl border border-slate-800/70 bg-slate-900/70 p-4">
                    <p className="font-semibold text-slate-100">App crashes after reboot</p>
                    <pre className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap break-words mt-2">{`pm2 startup
pm2 save`}</pre>
                  </div>
                  <div className="rounded-xl border border-slate-800/70 bg-slate-900/70 p-4">
                    <p className="font-semibold text-slate-100">502 Bad Gateway</p>
                    <p className="mt-2">Check PM2 and port 3000, then:</p>
                    <pre className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap break-words mt-2">{`pm2 logs`}</pre>
                  </div>
                  <div className="rounded-xl border border-slate-800/70 bg-slate-900/70 p-4">
                    <p className="font-semibold text-slate-100">Permission issues</p>
                    <pre className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap break-words mt-2">{`sudo chown -R ubuntu:ubuntu /var/www`}</pre>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">9. Why this setup?</h2>
                <ul className="space-y-2 text-sm text-slate-300">
                  {[
                    "EC2: Full control & low cost",
                    "PM2: Process management + restarts",
                    "Nginx: Production-grade reverse proxy",
                    "GitHub Actions: Free, simple CI/CD",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border border-emerald-300/20 bg-emerald-300/5 p-5">
                <h2 className="text-lg font-semibold text-white mb-2">Final thoughts</h2>
                <p className="text-sm text-slate-200">
                  This setup is scalable, cheap, production‑ready, and portfolio‑worthy.
                  If you understand and can explain this workflow, you’re ahead of most
                  frontend developers.
                </p>
              </section>
            </div>
          ) : isPerfGuide ? (
            <div className="mt-6 space-y-8 text-slate-200 leading-relaxed">
              <p>
                Performance isn’t about Lighthouse scores alone. It’s about what users
                actually feel: fast loading, smooth interactions, and zero jank. This
                checklist focuses on the things that move the needle in real React and
                Next.js apps.
              </p>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">1. Measure before you optimize</h2>
                <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-300">
                  <div className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-4">
                    <p className="font-semibold text-slate-100 mb-2">Tools to use</p>
                    <ul className="space-y-2">
                      {[
                        "Chrome DevTools → Performance tab",
                        "Lighthouse (only as a guide)",
                        "Web Vitals (LCP, INP, CLS)",
                        "Next.js Analytics / Vercel Analytics",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-4">
                    <p className="font-semibold text-slate-100 mb-2">What matters most</p>
                    <ul className="space-y-2">
                      {[
                        "LCP → initial load speed",
                        "INP → interaction responsiveness",
                        "CLS → layout stability",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-slate-300 mt-3">If you don’t measure, you’re guessing.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">2. Optimize images (biggest win)</h2>
                <p className="text-sm text-slate-300">
                  Images are usually the #1 performance killer. Use the Next.js Image component:
                </p>
                <div className="rounded-xl border border-slate-800/70 bg-slate-900/70 p-4 mt-3 overflow-x-auto">
                  <pre className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap break-words">{`import Image from "next/image";

<Image
  src="/hero.png"
  alt="Hero"
  width={800}
  height={400}
  priority
/>`}</pre>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {[
                    "Use WebP / AVIF",
                    "Always set width & height",
                    "Lazy‑load below‑the‑fold images",
                    "Avoid CSS background images for content",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">3. Reduce JavaScript bundle size</h2>
                <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-300">
                  <div className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-4">
                    <p className="font-semibold text-slate-100 mb-2">React</p>
                    <ul className="space-y-2">
                      {[
                        "Avoid heavy libraries for small tasks",
                        "Replace moment.js with dayjs",
                        "Remove unused dependencies",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-4">
                    <p className="font-semibold text-slate-100 mb-2">Next.js</p>
                    <div className="rounded-lg border border-slate-800/70 bg-slate-900/70 p-3 overflow-x-auto">
                      <pre className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap break-words">{`const Chart = dynamic(() => import("./Chart"), { ssr: false });`}</pre>
                    </div>
                    <p className="text-xs text-slate-300 mt-3">
                      Avoid global imports in <code className="text-emerald-200">_app.tsx</code>.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">4. Code splitting & lazy loading</h2>
                <p className="text-sm text-slate-300">Don’t load what users don’t need yet.</p>
                <div className="grid gap-4 md:grid-cols-2 mt-3 text-sm text-slate-300">
                  <div className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-4">
                    <p className="font-semibold text-slate-100 mb-2">React</p>
                    <pre className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap break-words">{`const Modal = React.lazy(() => import("./Modal"));`}</pre>
                  </div>
                  <div className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-4">
                    <p className="font-semibold text-slate-100 mb-2">Next.js</p>
                    <ul className="space-y-2">
                      {[
                        "Dynamic imports for modals, charts, editors",
                        "Route-based code splitting is automatic — use it wisely",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-slate-300 mt-3">
                  If it’s not visible on first load, it shouldn’t be in the main bundle.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">5. Optimize React rendering</h2>
                <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-300">
                  <div className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-4">
                    <p className="font-semibold text-slate-100 mb-2">Common mistakes</p>
                    <ul className="space-y-2">
                      {[
                        "Large state objects",
                        "Passing new functions on every render",
                        "Overusing useEffect",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-4">
                    <p className="font-semibold text-slate-100 mb-2">Fixes</p>
                    <pre className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap break-words">{`export default React.memo(Component);`}</pre>
                    <ul className="space-y-2 mt-3">
                      {[
                        "Use useCallback & useMemo only when needed",
                        "Split large components into smaller ones",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">6. Avoid expensive effects</h2>
                <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-300">
                  <div className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-4">
                    <p className="font-semibold text-slate-100 mb-2">Red flags</p>
                    <ul className="space-y-2">
                      {[
                        "Effects that run on every render",
                        "Heavy logic inside effects",
                        "Data fetching in multiple places",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-4">
                    <p className="font-semibold text-slate-100 mb-2">Better pattern</p>
                    <ul className="space-y-2">
                      {[
                        "Fetch data at page level (Next.js)",
                        "Move logic to server when possible",
                        "Use dependency arrays correctly",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">7. Cache aggressively (frontend & backend)</h2>
                <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-300">
                  <div className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-4">
                    <p className="font-semibold text-slate-100 mb-2">Browser caching</p>
                    <pre className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap break-words">{`Cache-Control: public, max-age=31536000, immutable`}</pre>
                  </div>
                  <div className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-4">
                    <p className="font-semibold text-slate-100 mb-2">Next.js</p>
                    <pre className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap break-words">{`fetch(url, { cache: "force-cache" });`}</pre>
                    <p className="text-xs text-slate-300 mt-2">Use ISR (revalidate) where possible.</p>
                  </div>
                </div>
                <p className="text-sm text-slate-300 mt-3">
                  Result: faster repeat visits and lower server load.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">8. Reduce API & network requests</h2>
                <ul className="space-y-2 text-sm text-slate-300">
                  {[
                    "Combine API calls",
                    "Avoid waterfall requests",
                    "Debounce search inputs",
                    "Cache responses",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-300 mt-3">
                  Fetch server-side when possible (getServerSideProps or Server Components).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">9. Optimize third‑party scripts</h2>
                <ul className="space-y-2 text-sm text-slate-300">
                  {[
                    "Load scripts asynchronously",
                    "Remove unused trackers",
                    "Delay non‑essential scripts",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-xl border border-slate-800/70 bg-slate-900/70 p-4 mt-3 overflow-x-auto">
                  <pre className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap break-words">{`<Script
  src="https://example.com/script.js"
  strategy="afterInteractive"
/>`}</pre>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">10. Prevent layout shift (CLS)</h2>
                <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-300">
                  <div className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-4">
                    <p className="font-semibold text-slate-100 mb-2">Common causes</p>
                    <ul className="space-y-2">
                      {[
                        "Images without dimensions",
                        "Ads without placeholders",
                        "Fonts loading late",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-4">
                    <p className="font-semibold text-slate-100 mb-2">Fixes</p>
                    <ul className="space-y-2">
                      {[
                        "Set width & height",
                        "Use font-display: swap",
                        "Reserve space for dynamic content",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">11. Enable compression</h2>
                <p className="text-sm text-slate-300">Make sure your server uses Gzip and Brotli:</p>
                <div className="rounded-xl border border-slate-800/70 bg-slate-900/70 p-4 mt-3 overflow-x-auto">
                  <pre className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap break-words">{`gzip on;
brotli on;`}</pre>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">12. Use production builds always</h2>
                <div className="rounded-xl border border-slate-800/70 bg-slate-900/70 p-4 overflow-x-auto">
                  <pre className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap break-words">{`npm run build
npm start`}</pre>
                </div>
                <p className="text-sm text-slate-300 mt-3">
                  Dev mode is intentionally slower.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">13. Monitor in production</h2>
                <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-300">
                  <div className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-4">
                    <p className="font-semibold text-slate-100 mb-2">What to monitor</p>
                    <ul className="space-y-2">
                      {["Web Vitals", "Error rates", "Slow pages"].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-4">
                    <p className="font-semibold text-slate-100 mb-2">Tools</p>
                    <ul className="space-y-2">
                      {["Google Search Console", "Sentry", "Custom analytics"].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">14. Anti‑patterns to avoid</h2>
                <div className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-4 text-sm text-slate-300">
                  <p>❌ Overusing UI libraries</p>
                  <p>❌ Global state for everything</p>
                  <p>❌ Huge components</p>
                  <p>❌ Premature memoization</p>
                  <p>❌ Optimizing without metrics</p>
                </div>
              </section>

              <section className="rounded-2xl border border-emerald-300/20 bg-emerald-300/5 p-5">
                <h2 className="text-lg font-semibold text-white mb-3">Final checklist (quick scan)</h2>
                <div className="grid gap-2 text-sm text-slate-200">
                  {[
                    "Images optimized",
                    "JS bundles small",
                    "Lazy loading applied",
                    "Rendering optimized",
                    "Caching enabled",
                    "Network requests reduced",
                    "CLS under control",
                    "Production tested",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300/70" />
                      <span>✅ {item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-200 mt-4">
                  Good performance is not about hacks. It’s about habits.
                </p>
              </section>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
