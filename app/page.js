import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="containers">
          
          <h1>Quiz App</h1>
          <Link href='/quiz'>
         
          <button>Start</button>
          </Link>
      </div>

    </main>
  );
}
