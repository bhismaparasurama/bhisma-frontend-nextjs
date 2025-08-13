import { HoverEffect } from "../components/Card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="px-30 mt-20 max-[1000px]:px-4 scroll-mt-[150px]" id="about">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Education Skills",
    description:
      "I attended vocational school and studied software development and game development. I really enjoy technology-based subjects and want to continue exploring them.",
  },
  {
    title: "Purpose",
    description:
      "To become a reliable and trusted full-stack developer. Furthermore, I won't stop at web development; I'll likely explore mobile and game development in the future.",
  },
  {
    title: "My Strategy",
    description:
      "I Always be consistent when learning something and immediately put it into practice.",
  },
  {
    title: "Currently Learning",
    description:
      "For now i sometimes study laravel for backend. In the future, I will definitely learn and explore backend and frontend, and currently I am still learning website design, such as UI and UX design using Figma.",
  },
  {
    title: "My Quality",
    description:
      "Designing website UI and implementing it into code, and I also have a concept to always work hard and be consistent in studying something or material.",
  },
  {
    title: "My Project",
    description:
      "I have created several school website projects such as marketplaces and departments.",
  },
];
