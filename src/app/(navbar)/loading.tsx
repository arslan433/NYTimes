export default function Loading() {
  return (
    <div className="min-h-[60vh] px-6 py-10 mt-15">
      <div className="max-w-6xl mx-auto">
        <div className="h-10 w-48 rounded-md bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse-slow mb-8" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-black/20 p-4 backdrop-blur-md"
              aria-busy="true"
              aria-live="polite"
              aria-label="Loading book"
            >
              <div className="h-40 w-full rounded-md bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer mb-4" />
              <div className="h-4 w-3/4 rounded bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer mb-2" />
              <div className="h-3 w-1/2 rounded bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer mb-4" />
              <div className="h-9 w-full rounded-md bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
