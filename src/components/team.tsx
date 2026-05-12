import Image from "next/image";

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

export default function Team() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-foreground max-w-xs text-balance text-4xl font-semibold">
          Our incredible leadership team
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-y-12 md:mt-24 lg:grid-cols-3">
          {members.map((member, index) => (
            <div key={index}>
              <div className="shadow-black/3 before:border-foreground/10 before:z-1 relative aspect-square overflow-hidden rounded-2xl shadow-md before:absolute before:inset-0 before:rounded-2xl before:border">
                <div
                  aria-hidden="true"
                  className={`bg-linear-to-r z-1 opacity-6.5 pointer-events-none absolute inset-0 size-40 rounded-full mix-blend-overlay blur-2xl will-change-transform md:size-72 ${member.gradient}`}
                />
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={320}
                  height={540}
                  className="size-full object-cover object-top grayscale"
                />
              </div>
              <div className="space-y-0.5 pt-3">
                <p className="text-foreground font-medium font-display">
                  {member.name}
                </p>
                <p className="text-muted-foreground text-sm font-body">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
