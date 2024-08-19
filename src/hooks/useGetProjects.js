import { useEffect, useState } from "react";
import Api from "../utils/Api.js";

export function useGetProjects() {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        setLoading(true);
        const servicosRes = await Api();
        setProjetos(servicosRes);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjetos();
  }, []);

  return { projetos, loading, error };
}
