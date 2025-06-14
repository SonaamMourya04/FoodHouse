// src/component/OfflineBanner.js
import useOnlineStatus from "../utils/useOnlineStatus";

const OfflineBanner = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="bg-red-600 text-white text-center py-2 font-semibold fixed top-0 w-full z-50">
      ⚠️ You are currently offline. Please check your internet connection.
    </div>
  );
};

export default OfflineBanner;
