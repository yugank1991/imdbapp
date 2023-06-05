import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SliderComp from "../components/dashboard/Overlay";
import TVSeries from "../components/dashboard/TvSeries";
import NowPlaying from "../components/dashboard/BoxOffice";
import Header from "../components/Header";
import { ImdbContext } from "./ImdbContext";
import { Spinner } from "../components/dashboard/Spinner";

const IndexPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleResponse = (newValues) => setData(newValues.d);
  return (
    <ImdbContext.Provider value={{ data, setData, loading, setLoading }}>
      <Layout title="Home">
        <Header handleResponse={handleResponse} />
        {data && data.length > 0 ? (
          <div className="block xl:flex">
            <div className="w-full xl:w-4/5">
              <SliderComp />
              <TVSeries />
            </div>
            <div className="w-full xl:w-1/5 xl:pl-10">
              <NowPlaying />
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </Layout>
    </ImdbContext.Provider>
  );
};



export default IndexPage;
