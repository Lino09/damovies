"use client";
import { useState, useEffect } from "react";
import { moviesService } from "@/services/moviesService";
import Image from "next/image";
import { halfStar, star, fullStar, Film, Chevron } from "@/components/Icons";

export default function Home() {
  const topics = ["Now Playing", "Popular", "Top Rated", "Upcoming"];
  const [current, setCurrent] = useState(topics.at(0));
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getEP = (str: string) => str.toLocaleLowerCase().replace(" ", "_");
  const fetchMovies = async (EP: string) => {
    try {
      const responseMovies = await moviesService.getMovies(EP, page);
      setMovies(responseMovies.results);
      setTotalPages(responseMovies.total_pages || 1);
    } catch (err) {
      console.log(err);
    }
  };
  const getRating = (votes: number) => {
    const base5 = Math.round(votes) / 2;
    const rating = [];
    for (let i = 1; i <= 5; i++) {
      if (base5 < i && base5 === i - 0.5) rating.push(halfStar());
      else if (base5 >= i) rating.push(fullStar());
      else rating.push(star());
    }
    return rating;
  };
  const updatePage = (variation: number) => {
    if (page + variation > 0 && page + variation <= totalPages)
      setPage(page + variation);
  };

  useEffect(() => {
    const EP = getEP(current as string);
    fetchMovies(EP);
  }, [current, page]);

  const imageLoader = ({ src, width, quality }: any) => {
    return `https://image.tmdb.org/t/p/original${src}`;
  };

  return (
    <main className="bg-dacolors-bgc text-white min-h-screen px-4 xl:px-36 pt-20 pb-24 flex flex-col items-start">
      <nav className="w-full">
        <u className="flex justify-between w-full">
          {topics.map((topic) => (
            <li key={topic} className="list-none">
              <button
                onClick={() => {
                  setCurrent(topic);
                  setPage(1);
                }}
                className={`px-4 py-2 font-semibold rounded-3xl hover:scale-105 active:scale-100 ${topic === current ? "bg-dacolors-purple" : "bg-gradient-to-r from-dacolors-cyan via-dacolors-blue to-dacolors-purple"}`}
              >
                {topic}
              </button>
            </li>
          ))}
        </u>
      </nav>
      <section className="mt-20 w-full">
        <h1 className="text-3xl">{current}</h1>
        <span></span>
        <ul className="flex flex-wrap gap-12 justify-center mt-20 w-full">
          {movies.map((movie: any) => (
            <li key={movie.id} className="w-60 h-80 relative rounded-lg">
              <Image
                fill={true}
                loader={imageLoader}
                src={movie.poster_path}
                alt={"poster"}
                className="rounded-3xl absolute z-10"
              />
              <div className="relative z-50 opacity-0 hover:opacity-100 bg-dacolors-purple h-full w-full rounded-3xl px-8 pt-16 bg-opacity-80 gap-2 flex flex-col items-center">
                <span className="block text-center text-sm leading-none font-semibold">
                  {movie.title}
                </span>
                <span className="text-xs">{movie.release_date}</span>
                <p className="h-full max-h-36 overflow-hidden text-ellipsis text-xs">
                  {movie.overview}
                </p>
                <span className="flex">{getRating(movie.vote_average)}</span>
              </div>
            </li>
          ))}
        </ul>
        {movies.length > 0 && (
          <div className="flex items-center gap-4 w-full mt-16 justify-center">
            <button
              disabled={page === 1}
              onClick={() => updatePage(-1)}
              className={`w-8 h-8 rotate-180 rounded-full flex items-center justify-center active:scale-100 shadow-md ${page === 1 ? "bg-gray-400" : "bg-dacolors-purple hover:scale-105"}`}
            >
              <Chevron />
            </button>
            <span>
              {page}/{totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => updatePage(1)}
              className={`w-8 h-8 rounded-full flex items-center justify-center active:scale-100 shadow-md ${page === totalPages ? "bg-gray-400" : "bg-dacolors-purple hover:scale-105"}`}
            >
              <Chevron />
            </button>
          </div>
        )}
        {movies.length === 0 && (
          <div className="flex flex-col items-center w-full gap-8">
            <h3 className="text-5xl text-center">Esta categoría esta vacía</h3>
            <Film />
          </div>
        )}
      </section>
    </main>
  );
}
