import { TailSpin } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderContainer>
      <TailSpin
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        color="#f46d40"
        secondaryColor="white"
      />
    </LoaderContainer>
  );
};

export default Loader;
