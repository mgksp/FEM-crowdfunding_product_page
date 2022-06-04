interface CardProps {
  borderColor?: string;
  px?: string;
  py?: string;
  mdPx?: string;
  mdPy?: string;
  textAlign?: string;
  mdTextAlign?: string;
  custom?: string;
  children: JSX.Element;
}
export default function Card({
  children,
  borderColor = "border-gray-100",
  px = "px-6",
  py = "py-10",
  mdPx = "md:px-12",
  mdPy = "md:px-12",
  textAlign = "text-center",
  mdTextAlign = "md:text-left",
  custom,
}: CardProps) {
  return (
    <div
      className={`relative ${px} ${py} bg-white rounded-lg ${textAlign} ${mdTextAlign} border-1 ${borderColor} ${mdPx} ${mdPy} ${custom}`}
    >
      {children}
    </div>
  );
}
