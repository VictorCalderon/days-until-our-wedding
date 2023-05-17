import { differenceInDays } from "date-fns";

export default function Home() {
  const daysUntilWedding = differenceInDays(new Date("2023-08-12"), new Date());
  return (
    <main className="flex flex-col justify-center items-center p-24 min-h-screen">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          TE AMO MI VIDA
        </h1>
        <h1 className="text-5xl text-zinc-500">
          Quedan {daysUntilWedding} días
        </h1>
        <p className="font-medium text-zinc-700">
          Para estas budurubuduri casaditos
        </p>
      </div>
    </main>
  );
}
