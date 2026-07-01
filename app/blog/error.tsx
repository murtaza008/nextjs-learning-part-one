"use client";

export default function BlogError({
  error, // actual error object
  reset, // yeh function dobara try karta hai
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Kuch Ghalat Ho Gaya!
      </h2>

      <p className="text-gray-600 mb-6">
        {error.message} {/* Error ki actual message */}
      </p>

      {/* reset button — dobara fetch try karta hai */}
      <button
        onClick={reset}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Dobara Try Karo
      </button>
    </div>
  );
}
