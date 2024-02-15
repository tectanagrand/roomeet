import clsx from "clsx";

export default function MiniBadge({
  color,
  text,
}: {
  color: string;
  text: string;
}) {
  return (
    <div className={clsx("p-2 rounded-full", color)}>
      <p className="my-0 py-0 text-xs text-neutral-50">{text}</p>
    </div>
  );
}
