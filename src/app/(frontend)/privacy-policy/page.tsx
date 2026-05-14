import { Card } from "@/components/ui/card";

const sections = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly to us, including your name, email address, phone number, and any other information you choose to provide when filling out our contact form or booking a consultation. Users may also visit the website anonymously. We may collect usage data automatically when you visit our site.",
  },
  {
    title: "How We Use Your Information",
    body: "We use the information we collect to personalise your experience and improve our website, improve our customer service, process your consultation requests and enquiries, send periodic emails relating to your request or other products and services we offer, and to better understand how we can serve you.",
  },
  {
    title: "Protection of Your Information",
    body: "We implement a variety of security measures to maintain the safety of your personal information. Any sensitive information transmitted is secured via SSL technology. However, no method of transmission over the internet or method of electronic storage is 100% secure.",
  },
  {
    title: "Cookies",
    body: "We use cookies to understand and save your preferences for future visits, compile aggregate data about site traffic and site interaction, and to enhance your experience on our site. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies via your browser settings.",
  },
  {
    title: "Third Party Disclosure",
    body: "We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.",
  },
];

export default function PrivacyPage() {
  return (
    <section className="bg-background @container pt-44 pb-24">
      <div className="mx-auto max-w-2xl px-6">
        <p className="text-muted-foreground text-sm mb-3">Legal</p>
        <h1 className="font-serif text-5xl font-medium text-balance">
          Privacy Policy
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
          {sections.map((item, i) => (
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
