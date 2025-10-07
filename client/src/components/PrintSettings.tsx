
import { useState } from "react";
import { Slider } from "./ui/slider";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Settings2, X } from "lucide-react";

interface PrintSettingsProps {
  onApply: (settings: PrintSettingsValues) => void;
}

export interface PrintSettingsValues {
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
  scale: number;
}

export default function PrintSettings({ onApply }: PrintSettingsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [marginTop, setMarginTop] = useState(0.5);
  const [marginRight, setMarginRight] = useState(0.5);
  const [marginBottom, setMarginBottom] = useState(0.5);
  const [marginLeft, setMarginLeft] = useState(0.5);
  const [scale, setScale] = useState(100);

  // Live update on any setting change
  const updateSettings = (newSettings: Partial<PrintSettingsValues>) => {
    const updated = {
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      scale,
      ...newSettings,
    };
    
    if (newSettings.marginTop !== undefined) setMarginTop(newSettings.marginTop);
    if (newSettings.marginRight !== undefined) setMarginRight(newSettings.marginRight);
    if (newSettings.marginBottom !== undefined) setMarginBottom(newSettings.marginBottom);
    if (newSettings.marginLeft !== undefined) setMarginLeft(newSettings.marginLeft);
    if (newSettings.scale !== undefined) setScale(newSettings.scale);
    
    onApply(updated);
  };

  const handleApply = () => {
    onApply({
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      scale,
    });
    setIsOpen(false);
  };

  const handleReset = () => {
    updateSettings({
      marginTop: 0.5,
      marginRight: 0.5,
      marginBottom: 0.5,
      marginLeft: 0.5,
      scale: 100,
    });
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        size="sm"
        variant="ghost"
        className="gap-2"
      >
        <Settings2 className="h-4 w-4" />
        Print Settings
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#1a1a1a] border border-[#777] rounded-lg w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-200 flex items-center gap-2">
                <Settings2 className="h-5 w-5" />
                Print Settings
              </h3>
              <Button
                onClick={() => setIsOpen(false)}
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-6">
              {/* Margins Section */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  Margins (inches)
                </h4>
                
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="margin-top" className="text-gray-300 text-sm">
                      Top: {marginTop.toFixed(2)}"
                    </Label>
                    <Slider
                      id="margin-top"
                      value={[marginTop]}
                      onValueChange={(val) => updateSettings({ marginTop: val[0] })}
                      min={0}
                      max={2}
                      step={0.1}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="margin-right" className="text-gray-300 text-sm">
                      Right: {marginRight.toFixed(2)}"
                    </Label>
                    <Slider
                      id="margin-right"
                      value={[marginRight]}
                      onValueChange={(val) => updateSettings({ marginRight: val[0] })}
                      min={0}
                      max={2}
                      step={0.1}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="margin-bottom" className="text-gray-300 text-sm">
                      Bottom: {marginBottom.toFixed(2)}"
                    </Label>
                    <Slider
                      id="margin-bottom"
                      value={[marginBottom]}
                      onValueChange={(val) => updateSettings({ marginBottom: val[0] })}
                      min={0}
                      max={2}
                      step={0.1}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="margin-left" className="text-gray-300 text-sm">
                      Left: {marginLeft.toFixed(2)}"
                    </Label>
                    <Slider
                      id="margin-left"
                      value={[marginLeft]}
                      onValueChange={(val) => updateSettings({ marginLeft: val[0] })}
                      min={0}
                      max={2}
                      step={0.1}
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>

              {/* Scale Section */}
              <div className="space-y-3 pt-4 border-t border-[#777]">
                <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  Scale
                </h4>
                <div>
                  <Label htmlFor="scale" className="text-gray-300 text-sm">
                    {scale}%
                  </Label>
                  <Slider
                    id="scale"
                    value={[scale]}
                    onValueChange={(val) => updateSettings({ scale: val[0] })}
                    min={50}
                    max={150}
                    step={5}
                    className="mt-2"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-[#777]">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="flex-1"
                >
                  Reset
                </Button>
                <Button
                  onClick={handleApply}
                  className="flex-1 bg-[#f2633a] hover:bg-[#d9532f] text-white font-bold"
                >
                  Apply
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
