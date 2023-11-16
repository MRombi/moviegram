import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import quokkas from "../images/index";

type MovieCardProps = {
  title: string;
  overview: string;
  posterPath: string;
};

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function MovieCard({ title, overview, posterPath }: MovieCardProps) {
  const imageUrl: string | StaticImport = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : quokkas[getRandomInt(4)];

  return (
    <div className="bg-white rounded shadow p-4">
      <Image
        height={500}
        width={500}
        className="w-full h-64 rounded mb-4"
        src={imageUrl}
        alt="movie banner"
      />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-500">{overview.substring(0, 150)}</p>
    </div>
  );
}

export default MovieCard;
