import "../index.css";
import { Briefcase, MapPin, UserCheck, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full text-white">

      {/* HERO SECTION */}
      <section className="px-6 py-28 text-center bg-gradient-to-br from-[#1f2933] to-[#111827]">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hire Trusted Blue-Collar Workers Instantly
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-300">
          Hirely connects employers with verified professionals like
          electricians, plumbers, drivers, and more — quickly and securely.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => navigate("/registration")}
            className="px-6 py-3 rounded-md font-semibold bg-[var(--color-primary)] text-black hover:opacity-90"
          >
            Post a Job
          </button>

          <button className="px-6 py-3 rounded-md font-semibold border border-gray-500 hover:border-[var(--color-primary)]">
            Find Work
          </button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-300">
          <span>✔ Verified Workers</span>
          <span>✔ Location Based</span>
          <span>✔ Fast Hiring</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-12">Popular Job Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {["Electrician", "Plumber", "Driver", "Construction"].map((job) => (
            <div
              key={job}
              className="flex items-center justify-center gap-3 p-6 rounded-xl bg-[#111827] shadow-lg hover:scale-105 transition"
            >
              <Briefcase className="text-[var(--color-primary)]" />
              <span className="font-semibold">{job}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-8 py-20 bg-[#0f172a]">
        <h2 className="text-3xl font-bold text-center mb-12">
          How Hirely Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-[#111827] text-center">
            <UserCheck size={36} className="mx-auto text-[var(--color-primary)]" />
            <h3 className="mt-4 text-xl font-semibold">Register</h3>
            <p className="mt-2 text-gray-400">
              Create an account as a worker or employer
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#111827] text-center">
            <MapPin size={36} className="mx-auto text-[var(--color-primary)]" />
            <h3 className="mt-4 text-xl font-semibold">Match Nearby</h3>
            <p className="mt-2 text-gray-400">
              Find jobs or workers close to your location
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#111827] text-center">
            <ArrowRight size={36} className="mx-auto text-[var(--color-primary)]" />
            <h3 className="mt-4 text-xl font-semibold">Hire Instantly</h3>
            <p className="mt-2 text-gray-400">
              Connect and start working immediately
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Hirely?</h2>

        <ul className="space-y-3 text-gray-300">
          <li>✔ Simple job posting & hiring</li>
          <li>✔ Trusted blue-collar profiles</li>
          <li>✔ Real-time job matching</li>
          <li>✔ Mobile-friendly platform</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center bg-[var(--color-primary)] text-black">
        <h2 className="text-3xl font-bold">
          Start Hiring or Get Hired Today
        </h2>

        <button className="mt-6 px-8 py-3 rounded-md font-semibold bg-black text-white hover:opacity-90">
          Get Started
        </button>
      </section>

    </div>
  );
};

export default Home;
