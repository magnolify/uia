import { PrintIcon } from "./icons";

interface HeaderProps {
  isDevMode?: boolean;
}

export default function Header({ isDevMode }: HeaderProps) {
  return (
    <header className="flex items-center justify-between p-4 border-b border-[#777] bg-[#1a1a1a] shadow-md">
      <div className="flex items-center gap-3">
        <PrintIcon className="w-8 h-8 text-[#f2633a]" />
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-white font-['Archivo',_sans-serif]" data-testid="text-app-title">
              Report Card Generator
            </h1>
            {isDevMode && (
              <span className="text-xs bg-yellow-500/20 text-yellow-300 font-mono px-2 py-0.5 rounded-full" data-testid="badge-dev-mode">
                DEV
              </span>
            )}
          </div>
          <p className="text-sm text-gray-400">Shopify Admin Print Extension</p>
        </div>
      </div>
    </header>
  );
}
