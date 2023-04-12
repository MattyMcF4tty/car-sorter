import "../styles/global.css";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-row w-">
      <Navbar></Navbar>
      <div className="ml-[8rem]">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
