import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Spinner from "../utils/Spinner";
import { AiOutlineClose } from "react-icons/ai";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import MediaCard from "../MediaCard";
import axios from "axios";

export default function Search() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterResult, setFilterResult] = useState([]);

  console.log(query);
  console.log(filterResult);

  useEffect(() => {
    const getSearch = setTimeout(async () => {
      setLoading(true);
      try {
        const results = await axios.get(
          `https://api.tvmaze.com/search/shows?q=${query}`
        );
        setFilterResult(results.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }, 2000);
    return () => clearTimeout(getSearch);
  }, [query]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container className="py-5 " style={{ marginTop: "7rem" }}>
      <div className="position-relative  pb-2 mb-4 border-bottom border-dark">
        <input
          className="small w-100 no-outline border-0"
          id="search"
          type="text"
          placeholder="SEARCH MOVIES"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query.length > 0 && (
          <AiOutlineClose
            className="position-absolute end-0"
            onClick={() => setQuery("")}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
      {query.length > 0 && filterResult <= 0 && (
        <p>sorry we could not find what you looking for</p>
      )}

      {error ||
        (filterResult && (
          <>
            {error && <p className="text-center"></p>}
            {filterResult && (
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
                className="mt-5"
              >
                <Masonry gutter="30px">
                  {filterResult.map((movie) => (
                    <MediaCard key={movie.show.id} {...movie.show} />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            )}
          </>
        ))}
    </Container>
  );
}
