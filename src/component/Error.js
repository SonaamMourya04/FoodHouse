import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Something went wrong!
        </h2>
        <h3 className="text-lg text-gray-600">
          {err.status}: {err.statusText}
        </h3>
      </div>
    </div>
  );
};

export default Error;