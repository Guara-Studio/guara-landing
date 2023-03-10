import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import LastProjects from "../components/lastProjects";
import ContactUs from "../components/contactUs";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  useEffect(() => setTheme('light'), [mounted]);

  return (
    <>
      <Head>
        <title>Guará Studio</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Benefícios"
        title=" Por que nos escolher?">
        “Transforme sua ideia em realidade com a Guará Studio - a história da Carol" <br /> <br />
        Carol sempre sonhou em empreender, mas não sabia muito bem como começar. Foi então que ela descobriu a Guará Studio, uma empresa de desenvolvimento de sites, aplicativos, sistemas e marketing. Com a ajuda da equipe Guará, Carol conseguiu transformar sua ideia em um negócio de sucesso, com um site na primeira página do Google. <br /> <br />
        A Guará Studio não é apenas uma empresa de tecnologia - é uma parceira que ajuda a transformar sonhos em realidade. Se você tem uma ideia que precisa sair do papel, conte com a Guará Studio. Juntos, podemos criar uma história de sucesso como a da Carol. Entre em contato agora mesmo e comece a transformar seus sonhos em realidade! <br /> <br />
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Projetos"
        title="Casos de sucesso">
        Confira nossos últimos projetos e descubra como nossos designs modernos e eficientes podem impulsionar seu negócio. Desde websites responsivos até campanhas de marketing criativas, nossa equipe está pronta para trazer resultados expressivos para sua empresa. Veja agora nossos casos de sucesso!
      </SectionTitle>
      <LastProjects />
      <SectionTitle
        pretitle="Feedbacks"
        title={`O que nossos clientes estão dizendo sobre nós`}>
        A satisfação dos nossos clientes é nossa prioridade. Confira o que eles estão dizendo sobre nossos serviços e descubra por que somos uma escolha confiável para suas necessidades de negócios. Leia agora nossas avaliações e depoimentos de clientes felizes!
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Dúvidas frequentes">
      Reunimos as principais questões para ajudá-lo a entender melhor o que oferecemos. Confira agora mesmo!
      </SectionTitle>
      <Faq />
      <SectionTitle
        pretitle="Contato"
        title="Sinta-se livre para entrar em contato">
      </SectionTitle>
      <ContactUs />
      <Footer />
    </>
  );
}
