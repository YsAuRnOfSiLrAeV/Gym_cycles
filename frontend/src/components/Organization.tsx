export default function Organization() {
  return (
    <div className="flex-1 bg-[#eeeeee] border-t-12 border-[#D0D0D0]">
      <div className="relative rounded-xl mt-8 lg:mx-8 bg-white p-4 lg:p-8 text-gray-800 text-[17px] leading-relaxed">
        <h1 className="text-3xl font-poppins font-semibold mb-8">Organization of training</h1>

        <p className="mb-4">
          To achieve high results in powerlifting, the training process must be built systematically. 
          The main structural unit of the program is the <span className="text-[#8e5c4b] font-bold">macrocycle</span> — 
          the full preparation period of the athlete, usually lasting from 3 to 6 months. 
          The macrocycle is divided into <span className="text-[#8e5c4b] font-bold">mesocycles</span>, and in turn — into 
          <span className="text-[#8e5c4b] font-bold"> microcycles</span>.
        </p>

        <h2 className="text-2xl font-poppins font-semibold mt-6 mb-3">Macrocycle</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-[#8e5c4b]">
          <li><span className="text-[#8e5c4b] font-bold">Hypertrophy (6–12 weeks):</span> increase in muscle volume, technique development.</li>
          <li><span className="text-[#8e5c4b] font-bold">Strength (8–12 weeks):</span> growth of maximal strength, fewer repetitions, more weight.</li>
          <li><span className="text-[#8e5c4b] font-bold">Peak phase (2–3 weeks):</span> preparation for a max-out or competition, heavy singles and doubles.</li>
          <li><span className="text-[#8e5c4b] font-bold">Recovery (1–2 weeks):</span> reduced load, CNS regeneration.</li>
        </ul>

        <h2 className="text-2xl font-poppins font-semibold mt-6 mb-3">Mesocycle</h2>
        <p className="mb-4">
          This is a block of 3–12 weeks, which has one main goal: hypertrophy, strength, endurance, or recovery. 
          It determines the character of the microcycles.
        </p>

        <h2 className="text-2xl font-poppins font-semibold mt-6 mb-3">Microcycle</h2>
        <p className="mb-4">
          The smallest structural unit, usually one week. Includes 2–5 training sessions, adapted to the tasks of the mesocycle.
        </p>

        <h2 className="text-2xl font-poppins font-semibold mt-6 mb-3">Alternative Periodization Models</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-[#8e5c4b]">
          <li><span className="text-[#8e5c4b] font-bold">DUP (daily undulating periodization):</span> alternating load types throughout the week.</li>
          <li><span className="text-[#8e5c4b] font-bold">Block periodization:</span> each block focuses on one quality, the rest are maintained.</li>
          <li><span className="text-[#8e5c4b] font-bold">Reverse periodization:</span> peak strength first, then hypertrophy. Relevant if quick results are needed.</li>
          <li><span className="text-[#8e5c4b] font-bold">Autoregulatory:</span> load is formed according to well-being or bar speed (RPE, velocity-based).</li>
        </ul>

        <h2 className="text-2xl font-poppins font-semibold mt-6 mb-3">
          Functional Cycle: Max-out ➜ Hypertrophy ➜ Strength ➜ Max-out
        </h2>
        <p className="mb-4">
          This model reflects a practical, working approach to the cycle between max-outs. 
          It allows you to maintain form, adapt the program to real conditions, and continuously progress.
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-4 marker:text-[#8e5c4b]">
          <li><span className="text-[#8e5c4b] font-bold">Max-out:</span> testing 1RM, analyzing technical and strength weaknesses.</li>
          <li><span className="text-[#8e5c4b] font-bold">Hypertrophy:</span> building muscle mass, improving technique.</li>
          <li><span className="text-[#8e5c4b] font-bold">Strength:</span> developing maximal strength based on the new foundation.</li>
          <li><span className="text-[#8e5c4b] font-bold">Max-out:</span> new testing and the start of the next cycle.</li>
        </ol>
      </div>
    </div>
  );
}
