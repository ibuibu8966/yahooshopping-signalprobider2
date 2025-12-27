export default function Partners() {
  // プレースホルダーパートナー（実際のロゴはクライアントから支給）
  const partners = [
    { name: "Partner 1", placeholder: true },
    { name: "Partner 2", placeholder: true },
    { name: "Partner 3", placeholder: true },
    { name: "Partner 4", placeholder: true },
    { name: "Partner 5", placeholder: true },
    { name: "Partner 6", placeholder: true },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 text-sm mb-8">
          多くの企業様にご利用いただいています
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-24 h-12 md:w-32 md:h-16 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-xs"
            >
              {partner.placeholder ? "LOGO" : partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
