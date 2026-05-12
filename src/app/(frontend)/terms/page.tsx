import { Card } from "@/components/ui/card";

const terms = [
  {
    title: "Acceptance of Terms",
    body: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
  },
  {
    title: "Use License",
    body: "Permission is granted to temporarily download one copy of the materials on Toggle Solutions' website for personal, non-commercial transitory viewing only. Under this licence you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on the website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or 'mirror' the materials on any other server.",
  },
  {
    title: "Disclaimer",
    body: "The materials on Toggle Solutions' website are provided on an 'as is' basis. Toggle Solutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
  },
  {
    title: "Limitations",
    body: "In no event shall Toggle Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Toggle Solutions' website, even if Toggle Solutions or a Toggle Solutions authorised representative has been notified orally or in writing of the possibility of such damage.",
  },
  {
    title: "Revisions and Errata",
    body: "The materials appearing on Toggle Solutions' website could include technical, typographical, or photographic errors. Toggle Solutions does not warrant that any of the materials on its website are accurate, complete or current. Toggle Solutions may make changes to the materials contained on its website at any time without notice.",
  },
];

export default function TermsPage() {
  return (
    <section className="bg-background @container pt-44 pb-24">
      <div className="mx-auto max-w-2xl px-6">
        <p className="text-muted-foreground text-sm mb-3">Legal</p>
        <h1 className="font-serif text-5xl font-medium text-balance">
          Terms & Conditions
        </h1>
        <p className="text-muted-foreground mt-4 text-sm">
          For questions, contact{" "}
          <a
            href="mailto:hello@togglesolutions.com"
            className="text-foreground hover:underline"
          >
            hello@togglesolutions.com
          </a>
        </p>

        <div className="mt-12 space-y-4">
          {terms.map((item, i) => (
            <Card key={i} variant="outline" className="p-6">
              <h2 className="text-foreground font-medium mb-2">
                {i + 1}. {item.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.body}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
