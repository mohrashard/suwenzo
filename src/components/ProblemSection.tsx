import Link from "next/link";
import Image from "next/image";

export default function ProblemSection() {
  const problems = [
    {
      image: "/3dcard1.jpg",
      title: "Written twice, by two people",
      description: "Doctor writes it, the dispenser re-enters it and hand-writes the label.",
      cost: "slower queues, more room for a misread dose.",
    },
    {
      image: "/3dcard2.jpg",
      title: "Prescribing without seeing stock",
      description: "The patient gets sent down the road.",
      cost: "income the clinic earned and handed away.",
    },
    {
      image: "/3dcard3.jpg",
      title: "Every visit starts from zero",
      description: "No history in front of the doctor, so patients repeat themselves and details get missed.",
      cost: "slower consultations and weaker care.",
    },
    {
      image: "/3dcard4.jpg",
      title: "Phone numbers in a drawer",
      description: "Nobody follows up when a course ends.",
      cost: "patients who feel better on day 7 and never come back.",
    },
  ];

  return (
    <section className="bg-[linear-gradient(180deg,#F4F9FF_0%,#E6F0FD_100%)] pt-[80px] sm:pt-[100px] px-4 sm:px-6 pb-[80px] sm:pb-[100px] flex flex-col items-center">
      {/* Centered Heading Block */}
      <div className="text-center mb-[50px] sm:mb-[60px] max-w-[760px]">
        <span className="bg-[#0f172a] text-white py-1.5 sm:py-2 px-4 sm:px-5 rounded-full text-[0.8125rem] sm:text-[0.875rem] font-medium inline-block mb-6 sm:mb-8 tracking-[0.02em] shadow-xs uppercase">
          THE PROBLEM
        </span>
        <h2 className="text-[clamp(2.25rem,5vw,3.25rem)] font-normal text-[#0B1B3A] leading-[1.1] mb-5 tracking-[-0.03em]">
          Where a paper-run clinic quietly loses time and money
        </h2>
        <p className="text-[1.05rem] sm:text-[1.125rem] text-[#475569]">
          Four things repeat every clinic session.
        </p>
      </div>

      {/* 4 Cards Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-[1280px] w-full mb-10 sm:mb-12">
        {problems.map((problem, idx) => (
          <div
            key={idx}
            className="bg-white border border-white/80 rounded-[24px] py-8 sm:py-9 px-6 shadow-[0_4px_6px_-1px_rgba(29,78,216,0.05),0_20px_40px_-10px_rgba(29,78,216,0.08)] flex flex-col justify-start"
          >
            <div className="w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] mx-auto mb-6 flex items-center justify-center relative">
              <Image
                src={problem.image}
                alt={problem.title}
                width={130}
                height={130}
                className="w-full h-full object-contain mix-blend-multiply [mask-image:radial-gradient(circle_closest-side,black_75%,transparent_100%)] [-webkit-mask-image:radial-gradient(circle_closest-side,black_75%,transparent_100%)]"
              />
            </div>
            <h3 className="text-[1.15rem] sm:text-[1.2rem] font-bold text-[#0f172a] mb-2.5 tracking-[-0.02em] text-center leading-snug">
              {problem.title}
            </h3>
            <p className="text-[0.9rem] sm:text-[0.9375rem] text-[#475569] leading-[1.6] mb-6 text-center">
              {problem.description}
            </p>
            <div className="mt-auto p-3.5 sm:p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-[0.8125rem] sm:text-[0.875rem] text-[#475569] leading-[1.5] text-left">
              <strong className="text-[#0F172A] font-semibold">Cost:</strong> {problem.cost}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Conversion Link */}
      <div className="text-center text-[1.05rem] sm:text-[1.125rem] text-[#0B1B3A] font-medium">
        Suwenzo connects all four.{" "}
        <Link href="#how-it-works" className="text-[#1D4ED8] font-semibold no-underline hover:underline">
          See how it works &rarr;
        </Link>
      </div>
    </section>
  );
}
