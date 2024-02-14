import HeaderOne from "../../layout/headers/header";
import HeroHomeOne from "./HeroHomeOne";
import ServicesHomeOne from "./ServicesHomeOne";
import FAQHomeOne from "./FAQHomeOne";
import ChoseAreaHomeOne from "./ChoseAreaHomeOne";
import FooterOne from "../../layout/footers/FooterOne";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroHomeOne />
        <ServicesHomeOne />
        <FAQHomeOne />
        <ChoseAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeOne;
