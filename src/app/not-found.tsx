import { PageShell } from '@/components/layout/page-shell'

export default function NotFound() {
  return (
    <PageShell>
      <main className="flex flex-1 flex-col items-center justify-center p-5 text-center font-['Microsoft_YaHei',Arial,sans-serif]">
        <div className="mb-5 size-[200px] min-[600px]:size-[300px]">
          <svg className="size-full" viewBox="0 0 100 100">
            <rect className="fill-[#4285f4] dark:fill-[#1a73e8]" x="35" y="50" width="30" height="40" rx="5" />
            <circle className="fill-[#34a853] dark:fill-[#0f9d58]" cx="50" cy="30" r="15" />

            <circle className="fill-white dark:fill-[#e8f0fe]" cx="43" cy="27" r="3" />
            <circle className="fill-white dark:fill-[#e8f0fe]" cx="57" cy="27" r="3" />
            <circle className="fill-black" cx="43" cy="27" r="1" />
            <circle className="fill-black" cx="57" cy="27" r="1" />

            <rect className="fill-[#ea4335] dark:fill-[#d93025]" x="20" y="55" width="15" height="5" rx="2" />
            <circle className="fill-[#ff6b6b]" cx="20" cy="57.5" r="3" />

            <rect className="fill-[#fbbc05] dark:fill-[#f4b400]" x="40" y="90" width="8" height="10" />
            <rect className="fill-[#fbbc05] dark:fill-[#f4b400]" x="52" y="90" width="8" height="5" />
            <circle className="fill-[#ff6b6b]" cx="56" cy="95" r="2" />

            <line className="stroke-[#4285f4] stroke-2" x1="50" y1="15" x2="50" y2="10" />
            <circle className="fill-[#ea4335]" cx="50" cy="8" r="2" />
          </svg>
        </div>

        <h2 className="my-2.5 text-[6vw] font-normal min-[600px]:text-[32px]">404 Not Found</h2>
        <p className="my-2 max-w-[600px] text-[4vw] text-[#666] dark:text-[#aaa] min-[600px]:text-base">
          That&apos;s an error.
        </p>
        <p className="my-2 max-w-[600px] text-[4vw] text-[#666] dark:text-[#aaa] min-[600px]:text-base">
          The requested URL was not found on this server. That&apos;s all we know.
        </p>
      </main>
    </PageShell>
  )
}
