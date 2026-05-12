import Image from "next/image";
import { GridRow } from "@/components/ui/grid";

const members = [
  {
    avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
    name: "Yi Yang",
    role: "Strategy Director",
    gradient: "from-purple-400 via-blue-400 to-amber-500",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
    name: "Viknesh",
    role: "Sales Director",
    gradient: "from-purple-400 via-sky-400 to-emerald-500",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/12345678?v=4",
    name: "Jordan Pinto",
    role: "Marketing Director",
    gradient: "from-rose-400 via-orange-400 to-yellow-500",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/56789012?v=4",
    name: "Aizad Ridzo",
    role: "Web Developer Lead",
    gradient: "from-indigo-400 via-violet-400 to-pink-500",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/34567890?v=4",
    name: "Zaid Saad",
    role: "Digital Strategist",
    gradient: "from-teal-400 via-cyan-400 to-blue-500",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/56789012?v=4",
    name: "Shaun Boey",
    role: "Performance Lead",
    gradient: "from-indigo-400 via-violet-400 to-pink-500",
  },
];

export default function AboutTeam() {
  return (
    <section>
      <GridRow>
        <div className="grid grid-cols-10 gap-px">
          <div aria-hidden="true" className="max-sm:hidden">
            <div data-grid-content="true" />
          </div>
          <div className="@3xl:grid-cols-3 col-span-full grid grid-cols-2 gap-px sm:col-span-8">
            <div
              data-grid-content="true"
              className="@4xl:p-12 col-span-full p-6"
            >
              <h2 className="text-muted-foreground text-balance font-mono">
                Leadership
              </h2>
              <p className="text-foreground mt-6 max-w-2xl text-balance text-xl font-medium">
                A small team of builders obsessed with craft and growth.
              </p>
            </div>
            {members.map((member) => (
              <div
                key={member.name}
                data-grid-content="true"
                className="@4xl:p-12 @max-3xl:last:hidden p-6"
              >
                <div className="shadow-black/3 before:border-foreground/6.5 before:z-1 aspect-5/6 relative w-24 overflow-hidden rounded-2xl shadow-md before:absolute before:inset-0 before:rounded-2xl before:border">
                  <div
                    aria-hidden="true"
                    className={`bg-linear-to-r z-1 pointer-events-none absolute inset-0 size-40 rounded-full opacity-25 mix-blend-overlay blur-2xl will-change-transform md:size-72 ${member.gradient}`}
                  />
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={320}
                    height={540}
                    className="size-full object-cover grayscale"
                  />
                </div>
                <div className="space-y-0.5 pt-3">
                  <p className="text-foreground font-medium">{member.name}</p>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div aria-hidden="true" className="max-sm:hidden">
            <div data-grid-content="true" />
          </div>
        </div>
      </GridRow>
    </section>
  );
}
