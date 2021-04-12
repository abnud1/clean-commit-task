import axios from "axios";
import { GetStaticProps } from "next";
import Papa from "papaparse";
import AboutUs from "../components/aboutUs";
import AppContent from "../components/appContent";
import AppFilters from "../components/appFilters";
import AppFooter from "../components/appFooter";
import AppHeader from "../components/appHeader";
import SelectedEstate from "../components/selectedEstate";
import { Estate, EstatesState } from "../store/estate";

export default function Home() {
  return (
    <>
      <AppHeader />
      <AppFilters />
      <AppContent />
      <AboutUs />
      <SelectedEstate />
      <AppFooter />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRAeVzfe5Xd7y_Ojzl5BxYSTDezszUfCj5PyV_lEYDPsRCX3Ze6F_YTNteG14X_Lf7FqEtHrI7m29nt/pub?output=csv"
  );
  const estates = Papa.parse<Estate>(response.data, {
    header: true,
    dynamicTyping: true,
  });
  if (estates.errors.length > 0) {
    throw new Error(estates.errors.map((v) => v.message).join(" "));
  }
  return {
    props: {
      initialState: {
        estates: estates.data,
        filters: {
          priceRange: [0, 10000000],
          footageRange: [0, 2000],
          search: "",
        },
        numberOfShownEstates: 6,
        selectedEstate: estates.data[0],
      } as EstatesState,
    },
  };
};
