

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="homebg h-screen">
        <div className="h-full flex flex-col items-center justify-center">

          <h1 className="text-white font-black lg:text-9xl text-6xl text-center max-w-6xl mx-auto">UHS 24 TOURNAMENT</h1>
          <h2 className="text-white font-semibold lg:text-4xl text-3xl text-center pt-8 max-w-3xl mx-auto px-8">Thursday, May 29, 2025 | 12:00 PM | California Building</h2>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-x-8 items-center justify-center my-16 px-8">
        <div className="max-w-3xl">
          <h3 className="font-bold lg:text-6xl text-4xl">What is the UHS 24 Tournament?</h3>
          <p className="py-8 text-xl">The UHS 24 Tournament, sponsored by the math club, is a free tournament that any UHS member can join. Players will form teams of 2 and compete against each other!</p>
          <a href="https://docs.google.com/spreadsheets/d/1l4HnKvxiFd2SSdJpNsWq72zN5DlHeye7WehgXOec9p0/edit?usp=sharing" target="_blank">
            <button className="border hover:cursor-pointer border-black px-8 py-3 hover:bg-black hover:text-white duration-300">
              Sign up now!
            </button>
          </a>
        </div>
        <img src="/playing24.webp" alt="" className="lg:w-[40%] w-full lg:mt-0 mt-8 h-auto rounded-xl shadow-xl shadow-black" />

      </div>
      <div className="flex lg:flex-row-reverse flex-col gap-x-8 items-center justify-center my-24 px-8">
        <div className="max-w-3xl text-right">
          <h3 className="font-bold lg:text-6xl text-4xl">How do you play?</h3>
          <p className="pt-8 text-xl">24 is played by using each of the 4 numbers only once to create 24 using addition, subtraction, multiplication, and division.</p>
          <p className="pt-8 text-xl">For instance, for the given example, you could do: (6*4) * (3-2), which is 24*1=24. </p>

        </div>
        <img src="/gamecard.png" alt="" className="lg:w-[30%] w-full lg:mt-0 mt-8 h-auto rounded-xl shadow-xl shadow-black" />

      </div>

      <div className="">
        <hr className="border-2 border-black" />
        <div className="flex flex-row lg:gap-x-12 gap-x-4 items-center justify-center my-8 px-8">
          <p>Questions? Email: <a href="mailto:jackhunter@sfuhs.org" className="hover:text-blue-800">jack.hunter@sfuhs.org</a></p>
          <p>Website created by <a href="https://github.com/jacob-s-codes" target="_blank" className="hover:text-blue-800">Jacob S</a></p>

        </div>
      </div>
    </div>
  );
}
