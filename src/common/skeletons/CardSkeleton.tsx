"use client";

export function CardSkeleton() {
  return (
    <div className="h-[21rem] w-[16rem] mr-4 bg-neutral-600 rounded-3xl animate-pulse shrink-0"></div>
  );
}

export function CardBookSkeleton() {
  return (
    <div className="h-[208px] w-[176px] mr-4 mt-4 bg-neutral-600 rounded-3xl animate-pulse shrink-0"></div>
  );
}

function CardListBookSkeleton() {
  return (
    <div className="h-36 rounded-xl bg-neutral-500 px-4 py-4 mx-6 my-2 flex animate-pulse">
      <div className="w-full">
        <div className="h-4 w-52 rounded-full my-4 bg-neutral-700"></div>
        <div className="h-4 w-28 rounded-full my-4 bg-neutral-700"></div>
        <div className="h-4 w-28 rounded-full my-4 bg-neutral-700"></div>
      </div>
      <div>
        <div className="h-8 w-24 rounded-full my-4 bg-neutral-700"></div>
        <div className="flex justify-evenly">
          <div className="h-8 w-8 rounded-full my-4 bg-neutral-700"></div>
          <div className="h-8 w-8 rounded-full my-4 bg-neutral-700"></div>
        </div>
      </div>
    </div>
  );
}
export function CardsSkeleton() {
  return (
    <div className="flex w-full overflow-hidden">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}

export function CardsBookSkeleton() {
  return (
    <div className="flex w-full overflow-hidden">
      <CardBookSkeleton />
      <CardBookSkeleton />
      <CardBookSkeleton />
    </div>
  );
}

export function CardsListBookSkeleton() {
  let comp = [];
  for (let i = 0; i <= 10; i++) {
    comp.push(<CardListBookSkeleton key={i} />);
  }

  return <div>{comp.map((item) => item)}</div>;
}
