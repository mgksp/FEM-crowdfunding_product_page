interface CardProps {
  children: JSX.Element;
}
export default function Card({ children }: CardProps) {
  return (
    <div className="relative px-6 py-10 bg-white rounded-lg text-center border-1 border-gray-100 md:p-12">
      {children}
    </div>
  );
}
