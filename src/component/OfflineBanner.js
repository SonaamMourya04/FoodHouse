// src/component/OfflineBanner.js
import useOnlineStatus from "../utils/useOnlineStatus";

const OfflineBanner = () => {
  const isOnline = useOnlineStatus();

  // If online, don't show the message
  if (isOnline) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
      <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-12 py-8 rounded-2xl font-bold text-2xl shadow-2xl border border-white/20 animate-pulse">
        <div className="flex items-center space-x-3">
          <span className="text-3xl">📡</span>
          <span>you are offline</span>
        </div>
      </div>
    </div>
  );
};

export default OfflineBanner;
