import { Users, Shield, Leaf } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Comunidade Unida",
    description: "Reunimos moradores e produtores para fortalecer os interesses do nosso setor.",
  },
  {
    icon: Shield,
    title: "Representação",
    description: "Atuamos junto ao poder público para garantir melhorias e direitos da comunidade.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Valorizamos o meio ambiente e promovemos práticas sustentáveis nas chácaras.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Sobre a APROMEL
        </h2>
        <p className="font-body text-muted-foreground text-center max-w-4xl mx-auto mb-14 whitespace-pre-line">
          Juntos Construímos o Amanhã:
          {"\n\n"}
          Seja Parte da Mudança na Nossa Comunidade!
          {"\n\n"}
          Quem Somos:
          {"\n"}
          Mais que uma representação, somos a união de forças que transforma realidades.
          {"\n\n"}
          A APROMEL (Associação Pro-Melhoramento dos Setores de Chácaras Benvinda, Brasil, Santa Maria, Santa Marina e Adjacências) nasce do coração de nossa gente. Nosso propósito é cuidar de cada rua, de cada família e do futuro coletivo. Lutamos por infraestrutura digna, mobilidade que aproxima e qualidade de vida real.
          {"\n\n"}
          Nossa História e Renascimento
          {"\n\n"}
          Nossa semente foi plantada em 15 de março de 1998. Ganhamos voz oficial em 25 de maio de 2001, impulsionados pela união de moradores pioneiros. Hoje, diante de um crescimento acelerado e de novos desafios urgentes, a APROMEL ressurge com força renovada. Desde 18 de julho de 2024, resgatamos nossa essência humanitária para guiar nossa comunidade rumo ao progresso.
          {"\n\n"}
          Por Que Nos Cuidamos Juntos?
          {"\n"}
          Olhar Humano: Colocamos as necessidades das pessoas em primeiro lugar.
          {"\n"}
          Voz Ativa: Transformamos demandas isoladas em conquistas coletivas.
          {"\n"}
          Ação Renovadora: Trabalhamos por melhorias visíveis nos bairros.
          {"\n"}
          Futuro Seguro: Preparamos a região para crescer com dignidade.
          {"\n\n"}
          A Mudança Começa Com Você. Filie-se!
          {"\n\n"}
          Nenhum de nós é tão forte quanto todos nós juntos. Cada nova filiação é mais força para cobrar soluções e realizar melhorias. Venha fazer parte desta nova era de transformação e orgulho local.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card rounded-lg p-8 text-center shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-5">
                <f.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
