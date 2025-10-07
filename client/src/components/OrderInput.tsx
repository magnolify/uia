import { GenerateIcon, ErrorIcon } from "./icons";

interface OrderInputProps {
  orderJson: string;
  setOrderJson: (json: string) => void;
  onGenerate: () => void;
  error: string | null;
}

export default function OrderInput({
  orderJson,
  setOrderJson,
  onGenerate,
  error,
}: OrderInputProps) {
  return (
    <div className="flex-1 flex flex-col p-4">
      <label htmlFor="order-json" className="block text-sm font-medium text-gray-400 mb-2">
        Shopify Order JSON
      </label>
      <textarea
        id="order-json"
        value={orderJson}
        onChange={(e) => setOrderJson(e.target.value)}
        className="flex-1 w-full bg-black border border-gray-600 rounded-md shadow-sm p-3 text-gray-200 font-mono text-xs focus:outline-none focus:ring-[#f2633a] focus:border-[#f2633a] resize-none"
        spellCheck="false"
        data-testid="input-order-json"
      />
      {error && (
        <div className="mt-3 flex items-start gap-2 text-red-400 bg-red-900/50 p-3 rounded-md" data-testid="error-message">
          <ErrorIcon className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}
      <button
        onClick={onGenerate}
        className="mt-4 w-full flex items-center justify-center gap-2 bg-[#f2633a] text-white font-bold py-3 px-4 rounded-md hover:bg-[#d9532f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1a1a1a] focus:ring-[#f2633a] transition-colors"
        data-testid="button-generate"
      >
        <GenerateIcon className="w-5 h-5" />
        Generate Report Cards
      </button>
    </div>
  );
}
