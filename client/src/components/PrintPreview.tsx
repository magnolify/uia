import { FileText, Loader2 } from "lucide-react";

interface PrintPreviewProps {
  htmlContent: string | null;
  isLoading?: boolean;
}

export default function PrintPreview({ htmlContent, isLoading = false }: PrintPreviewProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-card">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
        <p className="mt-4 text-sm text-muted-foreground">Generating preview...</p>
      </div>
    );
  }

  if (!htmlContent) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-card">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-muted">
          <FileText className="w-10 h-10 text-muted-foreground" />
        </div>
        <h3 className="mt-6 text-lg font-semibold text-foreground">No Preview Available</h3>
        <p className="mt-2 text-sm text-center text-muted-foreground max-w-sm">
          Enter order JSON and click "Generate Report Cards" to see the printable labels preview
        </p>
      </div>
    );
  }

  // Create data URL for iframe
  const dataUrl = `data:text/html;charset=utf-8,${encodeURIComponent(htmlContent)}`;

  return (
    <div className="flex flex-col h-full bg-card">
      <div className="flex items-center gap-2 p-4 border-b">
        <FileText className="w-5 h-5 text-muted-foreground" />
        <h2 className="text-sm font-semibold text-foreground">Print Preview</h2>
        <div className="ml-auto">
          <span className="text-xs text-muted-foreground">
            Click "Print Labels" button inside preview to print
          </span>
        </div>
      </div>
      
      <div className="flex-1 p-4">
        <iframe
          src={dataUrl}
          className="w-full h-full border rounded-lg shadow-lg"
          title="Print Preview"
          data-testid="iframe-print-preview"
        />
      </div>
    </div>
  );
}
