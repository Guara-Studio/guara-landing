import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Nossas qualidades e benefícios!",
  desc: "Ao fechar um projeto conosco, você terá acesso a uma equipe de especialistas altamente qualificados que trabalharão para garantir que seu projeto seja concluído com excelência. Você terá a tranquilidade de saber que está trabalhando com profissionais comprometidos em oferecer o melhor serviço possível",
  image: benefitOneImg,
  bullets: [
    {
      title: "Presença online sólida",
      desc: "Garantia que sua marca se destaque e seja percebida pelos clientes em potencial",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Produtos que performam",
      desc: "Desenvolvemos sites e aplicativos que são rápidos, responsivos e fáceis de usar",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Expertise em SEO",
      desc: "Podemos colocar sua empresa na primeira página do Google",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "E não para por aí!",
  desc: "Trabalhar com a Guará é escolher uma parceria estratégica, baseada em comprometimento, qualidade e excelência em cada etapa do projeto.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Experiências digitais únicas",
      desc: "Experiências que conectam marcas e pessoas",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Compromisso com a excelência",
      desc: "Projetos personalizados e com qualidade excepcional",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Designs atuais e modernos",
      desc: "Garantia resultados expressivos para o seu negócio",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
