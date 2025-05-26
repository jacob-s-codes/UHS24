

export default function Home() {
  return (
    <div>
      <div className="homebg h-screen">
        <h1 className="text-white font-black text-9xl text-center pt-16 max-w-6xl mx-auto">UHS 24 TOURNAMENT</h1>
        <h2 className="text-white font-semibold text-4xl text-center pt-8 max-w-3xl mx-auto">Thursday, May 29, 2025 | California Building</h2>
      </div>

      <div className="flex flex-row gap-x-8 items-center justify-center my-16">
        <div className="max-w-3xl">
          <h3 className="font-bold text-6xl">What is the UHS 24 Tournament?</h3>
          <p className="py-8 text-xl">The UHS 24 Tournament, sponsored by the math club, is a free tournament that any UHS member can join. Players will form teams of 2 and compete against each other!</p>
          <a href="">
            <button className="border border-black px-8 py-3 hover:bg-gray-300 duration-300">
              Sign up now!
            </button>
          </a>
        </div>
        <img src="/playing24.webp" alt="" className="w-[40%] h-auto rounded-xl shadow-xl shadow-black" />

      </div>
      <div className="flex flex-row-reverse gap-x-8 items-center justify-center my-24">
        <div className="max-w-3xl text-right">
          <h3 className="font-bold text-6xl">How do you play?</h3>
          <p className="pt-8 text-xl">24 is played by using each of the 4 numbers only once to create 24 using addition, subtraction, multiplication, and division.</p>
          <p className="pt-8 text-xl">For instance, for the given example, you could do: (6*4) * (3-2), which is 24*1=24. </p>

        </div>
        <img src="/gamecard.png" alt="" className="w-[30%] h-auto rounded-xl shadow-xl shadow-black" />

      </div>

      <div className="">
        <hr className="border-2 border-black" />
        <div className="flex flex-row gap-x-12 items-center justify-center my-8">
          <p>Questions? Email: <a href="mailto:jackhunter@sfuhs.org" className="hover:text-blue-800">jack.hunter@sfuhs.org</a></p>
          <p>Website created by <a href="https://github.com/jacob-s-codes" target="_blank" className="hover:text-blue-800">Jacob S</a></p>

        </div>
      </div>
    </div>
  );
}
