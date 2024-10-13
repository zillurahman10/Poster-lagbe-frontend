import { ProductCard, TestimonialCard } from "../../components/card/card";
import HomeCarousel from "../../components/carousel/carousel";
import { ContactForm } from "../../components/contact/contact";

function Home() {
  return (
    <>
      <HomeCarousel />
      <h3
        className="text-center text-4xl m-5 font-bold"
        style={{ marginTop: "100px" }}
      >
        Our Popular Products
      </h3>
      <div
        className="grid lg:grid-cols-3 sm:grid-cols-1 m-5 gap-4"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
      <h3
        className="text-3xl font-bold m-5"
        style={{ marginTop: "100px", marginLeft: "100px" }}
      >
        {" "}
        <span className="text-4xl font-bold text-red-700">|</span> Our
        Testimonials
      </h3>
      <div
        className="grid lg:grid-cols-3 sm:grid-cols-1 m-5 gap-4"
        style={{ marginLeft: "100px" }}
      >
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
      </div>
      <div className="" style={{ margin: "100px" }}>
        <ContactForm></ContactForm>
      </div>
    </>
  );
}

export default Home;
