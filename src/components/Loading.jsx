import RiseLoader from "react-spinners/RiseLoader";

const Loading = ({ isLoading }) => {
  return (
    <div className="bg-gray-800 min-h-screen items-center  flex justify-center">
      <RiseLoader color={"#9fa8b5"} loading={isLoading} size={20} />
    </div>
  );
};

export default Loading;
