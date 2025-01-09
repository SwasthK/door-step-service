import { BaggageClaim, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const imgs = [
  "https://plus.unsplash.com/premium_photo-1686878940830-9031355ec98c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1668087717836-f623754d6db1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1682146662576-900a71864a11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const hero_img =
  "https://plus.unsplash.com/premium_photo-1661809792135-71b20e0fca24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const testmonmial_img = [
  "https://images.unsplash.com/photo-1728577740843-5f29c7586afe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const Home = () => {
  const nav = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('${hero_img}')` }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 text-center text-white px-8">
          <h1 className="text-4xl lg:text-8xl font-bold ">
            Experience Doorstep Convenience
          </h1>
          <p className="mt-4 text-sm max-w-[35rem] mx-auto">
            Get food, groceries, and medicines delivered to your doorstep
            quickly and hassle-free. Embrace convenience with just a few clicks.
          </p>
          <button
            onClick={() => nav("/categories")}
            className="mt-6 px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white text-lg rounded-md shadow-md"
          >
            Explore
          </button>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-gray-600">
            Discover the features that set us apart and make your life easier.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <FeatureCard
              icon={<BaggageClaim className="h-12 w-12 text-pink-500" />}
              title="Doorstep Delivery"
              description="Fast and reliable delivery of your favorite items right to your home."
            />
            <FeatureCard
              icon={<Zap className="h-12 w-12 text-purple-500" />}
              title="Lightning-Fast Service"
              description="We value your time with speedy and efficient service."
            />
            <FeatureCard
              icon={<BaggageClaim className="h-12 w-12 text-blue-500" />}
              title="Wide Coverage"
              description="Serving multiple locations to bring convenience everywhere."
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800">
            Explore Our Services
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {imgs.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`service-${i}`}
                className="w-full aspect-video object-cover rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            What Our Customers Say
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <TestimonialCard
              name="Jane Doe"
              feedback="This service has been a lifesaver! Everything I need delivered to my door seamlessly."
              avatar={testmonmial_img[0]}
            />
            <TestimonialCard
              name="John Smith"
              feedback="Fast, efficient, and reliable. Highly recommend this service to everyone."
              avatar={testmonmial_img[1]}
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-400 text-white text-center">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Ready to Experience Convenience?
        </h2>
        <p className="mt-4 text-sm">
          Join thousands of satisfied customers and make your life easier today.
        </p>
        <button
          onClick={() => nav("/signup")}
          className="mt-6 px-8 py-2 bg-white text-pink-500 text-base hover:bg-white/90 transition-colors duration-200 ease-in rounded-md shadow-md"
        >
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
}) => (
  <div className="p-16 bg-gray-100 rounded-md shadow-md text-center">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

const TestimonialCard = ({
  name,
  feedback,
  avatar,
}: {
  name: string;
  feedback: string;
  avatar: string;
}) => (
  <div className="p-6 bg-gray-100 rounded-md shadow-md text-center max-w-xs">
    <img
      src={avatar}
      alt={name}
      className="mx-auto w-16 h-16 rounded-full object-cover mb-4"
    />
    <p className="italic text-gray-600">"{feedback}"</p>
    <h4 className="mt-4 text-lg font-bold text-gray-800">{name}</h4>
  </div>
);
