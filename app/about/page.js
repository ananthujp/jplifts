import React from "react";

function Page() {
  return (
    <div className="max-w-4xl flex flex-col gap-8 mx-auto my-16 px-4 prose prose-slate prose-headings:font-russo prose-headings:text-amber-600">
      <div className="flex flex-col gap-2">
        <h1 className="font-russo text-xl">
          A Different <span className="text-amber-400">Beginning</span>
        </h1>
        <p className="font-mont">
          Not every fitness story starts in the gym. JP’s began in classrooms
          and boardrooms. Armed with a Master’s degree in Construction
          Management, he stepped into the corporate world with ambition and
          discipline. At HSBC Bank, he worked as an analyst—surrounded by
          numbers, reports, and targets. It was a career many would dream of,
          but deep inside, JP felt something was missing.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-russo text-xl">
          Where <span className="text-amber-400">Passion</span> Found Him
        </h2>
        <p className="font-mont">
          Between spreadsheets and deadlines, the gym became his sanctuary. What
          started as a way to stay fit soon became much more. Each set, each
          rep, each drop of sweat lit a fire inside him.
        </p>
        <p className="font-mont">
          The gym wasn’t just about building muscle—it was about building
          character. It taught him resilience, focus, and the power of showing
          up every single day. Slowly, passion grew louder than comfort.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-russo text-xl">
          The Leap of <span className="text-amber-400">Faith</span>
        </h2>
        <p className="font-mont">
          Then came the moment of truth: a choice between security and passion.
          Most would cling to the steady paycheck, but JP chose differently. He
          walked away from the comfort of a corporate job to chase an uncertain
          dream—because he knew the weight of regret is heavier than any
          barbell.
        </p>
        <p className="font-mont">
          It wasn’t easy. The road was uncertain. But true strength isn’t built
          in comfort—it’s forged in sacrifice.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-russo text-xl">
          <span className="text-amber-400">Strength </span>Beyond Lifting
        </h2>
        <p className="font-mont">
          Today, JP-Lifts isn’t just about bodybuilding—it’s about
          transformation. It’s proof that passion, when pursued relentlessly,
          can rewrite a life’s direction.
        </p>
        <p className="font-mont">JP now uses his journey to inspire others:</p>
        <ul className="font-mont list-disc pl-5">
          <li>To prove that you are stronger than your doubts.</li>
          <li>To show that discipline can shape both body and mind.</li>
          <li>To remind you that chasing passion is never a mistake.</li>
          <li>
            Because lifting isn’t only about muscles—it’s about lifting yourself
            to a higher version of who you were yesterday.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-russo text-xl">
          JP-Lifts is more than a name. It’s a movement. A call to everyone who
          dares to follow their passion, no matter how heavy the weight.
        </h2>
      </div>
    </div>
  );
}

export default Page;
