import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, FileJson } from "lucide-react";
import { ShopifyOrder } from "@shared/schema";

interface OrderInputProps {
  onGenerate: (order: ShopifyOrder) => void;
  initialValue?: string;
}

export default function OrderInput({ onGenerate, initialValue = "" }: OrderInputProps) {
  const [jsonInput, setJsonInput] = useState(initialValue);
  const [error, setError] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setError("");
    setIsGenerating(true);

    try {
      // Parse JSON
      let parsed = JSON.parse(jsonInput);

      // Handle both {"order": {...}} and direct order object
      const orderData = parsed.order || parsed;

      // Basic validation
      if (!orderData.id || !orderData.line_items) {
        throw new Error("Invalid order format. Must include 'id' and 'line_items' fields.");
      }

      // Call the onGenerate callback with parsed order
      onGenerate(orderData as ShopifyOrder);
      
      console.log("Order generated successfully:", orderData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to parse JSON";
      setError(errorMessage);
      console.error("JSON parsing error:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 p-4 border-b bg-card">
        <FileJson className="w-5 h-5 text-muted-foreground" />
        <h2 className="text-sm font-semibold text-foreground">Order JSON Input</h2>
      </div>
      
      <div className="flex-1 p-4 space-y-4 overflow-auto">
        <Textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder='Paste Shopify Order JSON here...\n\nExample:\n{\n  "id": 123,\n  "name": "#1001",\n  "line_items": [...]\n}'
          className="min-h-[400px] font-mono text-sm resize-none"
          data-testid="input-order-json"
        />
        
        {error && (
          <div className="flex items-start gap-2 p-3 rounded-md bg-destructive/10 border border-destructive/20" data-testid="error-message">
            <AlertCircle className="w-5 h-5 text-destructive mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-destructive">Parsing Error</p>
              <p className="text-sm text-destructive/80 mt-1">{error}</p>
            </div>
          </div>
        )}
        
        <Button
          onClick={handleGenerate}
          disabled={!jsonInput.trim() || isGenerating}
          className="w-full"
          size="lg"
          data-testid="button-generate"
        >
          {isGenerating ? "Generating..." : "Generate Report Cards"}
        </Button>
      </div>
    </div>
  );
}
