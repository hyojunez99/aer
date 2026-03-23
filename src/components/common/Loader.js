import { useEffect, useState } from "react";
import "./Loader.scss";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader">
      <h1>AER</h1>
    </div>
  );
};

export default Loader;