import "tailwindcss/tailwind.css";
import "../public/style.scss";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import initStore from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  const store = initStore(pageProps.initialState);
  return (
    <Provider store={store}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
