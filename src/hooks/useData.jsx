import { useEffect, useState } from "react";

export function useData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false;
    if (url) {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          if (ignore === false) {
            setData(json);
          }
        });
    }

    return () => {
      ignore = true;
    };
  }, [url]);

  return data;
}
