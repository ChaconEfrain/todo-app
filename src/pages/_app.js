import TasksContextProvider from "@/context/TasksContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <TasksContextProvider>
      <Component {...pageProps} />
    </TasksContextProvider>
  );
}
