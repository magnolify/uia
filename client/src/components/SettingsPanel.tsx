import { SettingsIcon, ServerIcon, DataUrlIcon } from "./icons";

export enum RenderMode {
  DATA_URL = "DATA_URL",
  SERVER = "SERVER",
}

interface SettingsPanelProps {
  renderMode: RenderMode;
  setRenderMode: (mode: RenderMode) => void;
  serverUrl: string;
  setServerUrl: (url: string) => void;
}

export default function SettingsPanel({
  renderMode,
  setRenderMode,
  serverUrl,
  setServerUrl,
}: SettingsPanelProps) {
  return (
    <div className="p-4 border-b border-[#777]">
      <h2 className="text-lg font-semibold flex items-center gap-2 mb-3 text-gray-200 font-['Archivo',_sans-serif]">
        <SettingsIcon className="w-5 h-5" />
        Settings
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Preview Render Method
          </label>
          <div className="flex rounded-md shadow-sm">
            <button
              onClick={() => setRenderMode(RenderMode.DATA_URL)}
              className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-l-md text-sm font-medium focus:z-10 focus:outline-none focus:ring-2 focus:ring-[#f2633a] transition-colors ${
                renderMode === RenderMode.DATA_URL
                  ? "bg-[#f2633a] text-white border border-[#f2633a]"
                  : "bg-gray-700 text-gray-300 border border-gray-600 hover:bg-gray-600"
              }`}
              data-testid="button-data-url"
            >
              <DataUrlIcon className="w-4 h-4" />
              Data URL
            </button>
            <button
              onClick={() => setRenderMode(RenderMode.SERVER)}
              className={`relative -ml-px inline-flex items-center gap-2 px-4 py-2 rounded-r-md text-sm font-medium focus:z-10 focus:outline-none focus:ring-2 focus:ring-[#f2633a] transition-colors ${
                renderMode === RenderMode.SERVER
                  ? "bg-[#f2633a] text-white border border-[#f2633a]"
                  : "bg-gray-700 text-gray-300 border border-gray-600 hover:bg-gray-600"
              }`}
              data-testid="button-server"
            >
              <ServerIcon className="w-4 h-4" />
              Server URL
            </button>
          </div>
        </div>

        {renderMode === RenderMode.SERVER && (
          <div>
            <label htmlFor="serverUrl" className="block text-sm font-medium text-gray-400">
              Print Server URL
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="serverUrl"
                value={serverUrl}
                onChange={(e) => setServerUrl(e.target.value)}
                className="w-full bg-black border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-200 focus:outline-none focus:ring-[#f2633a] focus:border-[#f2633a] sm:text-sm"
                placeholder="https://your-print-server.com"
                data-testid="input-server-url"
              />
            </div>
            <p className="mt-2 text-xs text-gray-500">
              The external endpoint that returns printable HTML.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
