import PrintPreview from '../PrintPreview';

const sampleHTML = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 20px; background: #1f2937; }
    .card { background: white; padding: 20px; margin: 20px auto; max-width: 600px; border-radius: 8px; }
    h2 { color: #059669; }
  </style>
</head>
<body>
  <div class="card">
    <h2>Sample Report Card</h2>
    <p>This is a sample preview of the generated HTML content.</p>
    <button onclick="window.print()" style="background: #059669; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer;">
      Print Labels
    </button>
  </div>
</body>
</html>
`;

export default function PrintPreviewExample() {
  return (
    <div className="space-y-4">
      <div className="h-[400px] border rounded-lg overflow-hidden">
        <PrintPreview htmlContent={null} />
      </div>
      <div className="h-[400px] border rounded-lg overflow-hidden">
        <PrintPreview htmlContent={null} isLoading={true} />
      </div>
      <div className="h-[500px] border rounded-lg overflow-hidden">
        <PrintPreview htmlContent={sampleHTML} />
      </div>
    </div>
  );
}
