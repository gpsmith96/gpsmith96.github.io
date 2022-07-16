import "bootstrap/dist/css/bootstrap.min.css";
import data from "./Data";

function Home(props) {
  return (
    <div
      className="overflow-hidden cursor-pointer rounded-lg p-4 mob:p-2 laptop:p-4 first:ml-0">
      <div className="laptop:mt-20 mob:mt-10">
        <h1 className="mt-5 text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
          {data.headerTaglineOne} <br />
          {data.headerTaglineTwo}
        </h1>
      </div>
    </div>
  );
}

export default Home;
