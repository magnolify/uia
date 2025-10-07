import { Printer } from "lucide-react";

interface HeaderProps {
  isDevMode: boolean;
}

export default function Header({ isDevMode }: HeaderProps) {
  return (
    <header className="border-b bg-card">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
            <Printer className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground" data-testid="text-app-title">
              Shopify Report Card Generator
            </h1>
            <p className="text-sm text-muted-foreground">
              Generate printable labels for order fulfillment
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {isDevMode && (
            <div className="px-3 py-1 text-xs font-medium rounded-full bg-chart-2/20 text-chart-2" data-testid="badge-dev-mode">
              Developer Mode
            </div>
          )}
          {!isDevMode && (
            <div className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary" data-testid="badge-live-mode">
              Live Mode
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
