import { useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.css";

interface RouteError {
  statusText?: string;
  message?: string;
  error?: {
    message: string;
  };
}

const ErrorPage = () => {
  const error: RouteError = useRouteError() as RouteError;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ops!</h1>
      <h2 className={styles.subtitle}>Temos um problema.</h2>
      <p className={styles.message}>{error?.statusText || error?.message}</p>
      {error?.error?.message && <p className={styles.message}>{error.error.message}</p>}
      <button className={styles.button} onClick={() => window.location.href = "/"}>
        Voltar para a Home
      </button>
    </div>
  );
};

export default ErrorPage;
