import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [category, setCategory] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "category"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let catArray = [];
      querySnapshot.forEach((doc) => {
        catArray.push({ ...doc.data(), id: doc.id });
      });
      setCategory(catArray);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <Loading isLoading={isLoading} />
  ) : (
    <div className="bg-gray-800 min-h-screen py-6">
      <div className="md:flex justify-around">
        {category &&
          category.map((c) => (
            <Link
              to={`/category/${c.id}`}
              key={c.id}
              className="max-w-m m-2 p-6 bg-gray-700 border border-gray-700 rounded-lg shadow h-full"
            >
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
                {c.name}
              </h5>
            </Link>
          ))}

        <div
          className={`max-w-sm py-2 px-5 md:m-2 md:mx-0 m-auto bg-gray-700 border border-gray-700 rounded-lg shadow 
`}
        >
          <div className="flex justify-end">
            <button
              //   onClick={() => setSelectedTitleId(null)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <h5 className="mb-5 text-xl font-bold tracking-tight text-white">
            {/* ({selectedTitleName && selectedTitleName}) နှင့်စသော စကားပုံများ */}
          </h5>

          {/* <ul className="text-m list-[roman] px-5">
            {filteredProverbs == "" ? (
              <h2 className="text-m py-4 pl-2 text-gray-400 ">
                သက်ဆိုင်ရာ စကားပုံ မရှိပါ။
              </h2>
            ) : (
              filteredProverbs?.map((fp) => (
                <li
                  className="text-gray-400 my-3 hover:text-gray-200"
                  key={fp.ProverbId}
                >
                  <Link to={`/detail/${fp.ProverbId}/${fp.TitleId}`}>
                    {fp.ProverbName}
                  </Link>
                </li>
              ))
            )}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
