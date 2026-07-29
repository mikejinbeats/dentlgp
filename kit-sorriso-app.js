"use strict";
"use client";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// jogo-saude-oral-lgp/app/page.jsx
var page_exports = {};
__export(page_exports, {
  default: () => Page
});
module.exports = __toCommonJS(page_exports);
var import_react = require("react");

// jogo-saude-oral-lgp/app/data.js
var themes = [
  {
    id: "clinica",
    number: "01",
    title: "Na cl\xEDnica dent\xE1ria",
    short: "Cl\xEDnica dent\xE1ria",
    description: "Profissionais, pessoas e espa\xE7os da cl\xEDnica.",
    color: "#079eb3",
    light: "#dff8fb",
    items: [
      {
        id: "dentista",
        word: "Dentista",
        image: "imagens/01_dentista.png",
        video: "assets/videos - cartoes de aprendizagem/Dentista.mp4",
        youtubeId: "EBtvL2n6vQ0",
        quizPrompt: "Que profissional observa, previne e trata problemas de sa\xFAde oral?",
        definition: "O dentista \xE9 o profissional de sa\xFAde que observa, previne e trata problemas dos dentes, das gengivas e da boca.",
        sentence: "O dentista observa os dentes do paciente."
      },
      {
        id: "assistente",
        word: "Assistente dent\xE1ria",
        image: "imagens/02_assistente.png",
        video: "assets/videos - cartoes de aprendizagem/Assistente Dentario.mp4",
        youtubeId: "q3FRB3oDFI0",
        quizPrompt: "Quem prepara os instrumentos e apoia o profissional durante a consulta?",
        definition: "A assistente dent\xE1ria apoia o dentista durante a consulta, prepara os materiais e ajuda a manter o consult\xF3rio organizado.",
        sentence: "A assistente dent\xE1ria prepara os instrumentos para a consulta."
      },
      {
        id: "paciente",
        word: "Paciente",
        image: "imagens/03_paciente.png",
        video: "assets/videos - cartoes de aprendizagem/Paciente.mp4",
        youtubeId: "yVDPzVkv6TA",
        quizPrompt: "Como se chama a pessoa que recebe cuidados durante uma consulta?",
        definition: "O paciente \xE9 a pessoa que vai ao dentista para cuidar da sua sa\xFAde oral.",
        sentence: "O paciente est\xE1 na consulta."
      },
      {
        id: "consultorio",
        word: "Consult\xF3rio",
        image: "imagens/04_consultorio.png",
        video: "assets/videos - cartoes de aprendizagem/Consultorio.mp4",
        youtubeId: "2_fmRYFmuGk",
        quizPrompt: "Em que sala da cl\xEDnica s\xE3o realizados os exames e os tratamentos?",
        definition: "O consult\xF3rio \xE9 a sala onde o dentista atende o paciente e realiza os tratamentos.",
        sentence: "O dentista trabalha no consult\xF3rio."
      },
      {
        id: "sala-espera",
        word: "Sala de espera",
        image: "imagens/05_sala_espera.png",
        video: "assets/videos - cartoes de aprendizagem/Sala De Espera.mp4",
        youtubeId: "0THkOgh5bEY",
        quizPrompt: "Em que espa\xE7o da cl\xEDnica as pessoas aguardam at\xE9 serem chamadas?",
        definition: "A sala de espera \xE9 o espa\xE7o onde os pacientes aguardam pela consulta.",
        sentence: "O paciente espera na sala de espera pela sua vez."
      },
      {
        id: "rececionista",
        word: "Rececionista",
        image: "imagens/06_rececionista.png",
        video: "assets/videos - cartoes de aprendizagem/Rececionista.mp4",
        youtubeId: "6Hn6cyRBFOw",
        quizPrompt: "Quem recebe as pessoas, confirma marca\xE7\xF5es e fornece informa\xE7\xF5es \xE0 entrada da cl\xEDnica?",
        definition: "A rececionista \xE9 a profissional que recebe os pacientes, confirma as marca\xE7\xF5es e d\xE1 informa\xE7\xF5es na rece\xE7\xE3o da cl\xEDnica.",
        sentence: "O paciente fala com a rececionista quando chega \xE0 cl\xEDnica."
      }
    ]
  },
  {
    id: "boca",
    number: "02",
    title: "Conhecer a boca",
    short: "Conhecer a boca",
    description: "Partes da boca e estruturas relacionadas.",
    color: "#079eb3",
    light: "#dff8fb",
    items: [
      {
        id: "boca",
        word: "Boca",
        image: "imagens/07_boca.png",
        video: "assets/videos - cartoes de aprendizagem/Boca.mp4",
        youtubeId: "xYKPJSK2EYQ",
        quizPrompt: "Que parte do corpo re\xFAne os dentes, as gengivas e a l\xEDngua?",
        definition: "A boca \xE9 a parte do corpo onde se encontram os dentes, as gengivas e a l\xEDngua.",
        sentence: "Abrimos a boca para o dentista observar os dentes."
      },
      {
        id: "dentes",
        word: "Dentes",
        image: "imagens/08_dentes.png",
        video: "assets/videos - cartoes de aprendizagem/Dentes.mp4",
        youtubeId: "NBdQsBb0TDE",
        quizPrompt: "Que estruturas ajudam a cortar e mastigar os alimentos e tamb\xE9m participam na fala?",
        definition: "Os dentes ajudam a mastigar os alimentos e tamb\xE9m s\xE3o importantes para falar.",
        sentence: "Devemos cuidar dos dentes todos os dias."
      },
      {
        id: "gengivas",
        word: "Gengivas",
        image: "imagens/09_gengivas.png",
        video: "assets/videos - cartoes de aprendizagem/Gengivas.mp4",
        youtubeId: "Y4d81_3XiOQ",
        quizPrompt: "Que tecidos rodeiam e ajudam a proteger a base dos dentes?",
        definition: "As gengivas s\xE3o os tecidos que envolvem e ajudam a proteger os dentes.",
        sentence: "Devemos escovar suavemente junto \xE0s gengivas."
      },
      {
        id: "lingua",
        word: "L\xEDngua",
        image: "imagens/10_lingua.png",
        video: "assets/videos - cartoes de aprendizagem/Lingua.mp4",
        youtubeId: "7q9YAMxogBo",
        quizPrompt: "Que \xF3rg\xE3o muscular permite saborear, engolir e articular a fala?",
        definition: "A l\xEDngua ajuda a saborear os alimentos, a engolir e a falar.",
        sentence: "A l\xEDngua tamb\xE9m deve ser limpa."
      },
      {
        id: "labios",
        word: "L\xE1bios",
        image: "imagens/11_labios.png",
        video: "assets/videos - cartoes de aprendizagem/Labios.mp4",
        youtubeId: "iVVbayajF64",
        quizPrompt: "Que estruturas m\xF3veis ajudam a fechar a boca, a falar e a expressar emo\xE7\xF5es?",
        definition: "Os l\xE1bios ajudam a fechar a boca, a falar e a expressar emo\xE7\xF5es.",
        sentence: "O dentista observa os l\xE1bios e a boca."
      },
      {
        id: "maxilares",
        word: "Maxilares",
        image: "imagens/12_maxilares.png",
        video: "assets/videos - cartoes de aprendizagem/Maxilares.mp4",
        youtubeId: "1cm1h5HOQyE",
        quizPrompt: "Que ossos sustentam os dentes e participam nos movimentos da mastiga\xE7\xE3o?",
        definition: "Os maxilares s\xE3o os ossos que sustentam os dentes e ajudam nos movimentos da boca.",
        sentence: "Os dentes encontram-se nos maxilares."
      }
    ]
  },
  {
    id: "cuidados",
    number: "03",
    title: "Cuidados de sa\xFAde oral",
    short: "Sa\xFAde oral",
    description: "Objetos, a\xE7\xF5es e h\xE1bitos para cuidar da boca.",
    color: "#079eb3",
    light: "#dff8fb",
    items: [
      {
        id: "escova",
        word: "Escova de dentes",
        image: "imagens/13_escova_dentes.png",
        video: "assets/videos - cartoes de aprendizagem/Escova De Dentes.mp4",
        youtubeId: "bSx66fRsqVg",
        quizPrompt: "Que objeto com cabo e cerdas \xE9 usado na limpeza di\xE1ria da boca?",
        definition: "A escova de dentes \xE9 utilizada para remover restos de alimentos e placa bacteriana dos dentes.",
        sentence: "Colocamos pasta dent\xEDfrica na escova de dentes."
      },
      {
        id: "pasta",
        word: "Pasta dent\xEDfrica",
        image: "imagens/14_pasta_dentifrica.png",
        video: "assets/videos - cartoes de aprendizagem/Pasta Dentifrica.mp4",
        youtubeId: "pn1KuRXsILI",
        quizPrompt: "Que produto \xE9 colocado nas cerdas para ajudar a limpar e proteger a superf\xEDcie dent\xE1ria?",
        definition: "A pasta dent\xEDfrica \xE9 um produto usado com a escova para ajudar a limpar e proteger os dentes.",
        sentence: "Usamos uma pequena quantidade de pasta dent\xEDfrica."
      },
      {
        id: "fio",
        word: "Fio dent\xE1rio",
        image: "imagens/15_fio_dentario.png",
        video: "assets/videos - cartoes de aprendizagem/Fio Dentario.mp4",
        youtubeId: "PK8JIpzGigo",
        quizPrompt: "Que recurso fino limpa os espa\xE7os onde as cerdas n\xE3o chegam facilmente?",
        definition: "O fio dent\xE1rio ajuda a limpar os espa\xE7os entre os dentes, onde a escova n\xE3o chega facilmente.",
        sentence: "O fio dent\xE1rio passa suavemente entre os dentes."
      },
      {
        id: "colutorio",
        word: "Colut\xF3rio",
        image: "imagens/16_colutorio.png",
        video: "assets/videos - cartoes de aprendizagem/Colutorio.mp4",
        youtubeId: "oANMlZKHPSM",
        quizPrompt: "Que l\xEDquido pode ser usado para bochechar quando recomendado por um profissional?",
        definition: "O colut\xF3rio \xE9 um l\xEDquido utilizado para bochechar, quando recomendado por um profissional de sa\xFAde oral.",
        sentence: "O colut\xF3rio n\xE3o deve ser engolido."
      },
      {
        id: "escovar",
        word: "Escovar os dentes",
        image: "imagens/17_escovar_dentes.png",
        video: "assets/videos - cartoes de aprendizagem/Escovar Dentes.mp4",
        youtubeId: "mtQhDy-ncVw",
        quizPrompt: "Que a\xE7\xE3o di\xE1ria remove a placa bacteriana das superf\xEDcies dent\xE1rias?",
        definition: "Escovar os dentes ajuda a remover a placa bacteriana e a prevenir problemas de sa\xFAde oral.",
        sentence: "Devemos escovar todas as superf\xEDcies dos dentes."
      },
      {
        id: "consulta-rotina",
        word: "Consulta de rotina",
        image: "imagens/18_consulta_rotina.png",
        video: "assets/videos - cartoes de aprendizagem/Consulta De Rotina.mp4",
        youtubeId: "ODOWZxOyK9s",
        quizPrompt: "Que tipo de visita permite verificar a boca e identificar precocemente poss\xEDveis problemas?",
        definition: "A consulta de rotina permite ao dentista observar a boca, verificar os dentes e identificar poss\xEDveis problemas.",
        sentence: "O paciente vai ao dentista para uma consulta de rotina."
      }
    ]
  }
];
var trueFalseStatements = {
  clinica: [
    {
      id: "clinica-1",
      statement: "O dentista observa e trata problemas dos dentes.",
      answer: true,
      explanation: "O dentista observa, previne e trata problemas dos dentes, das gengivas e da boca."
    },
    {
      id: "clinica-2",
      statement: "A assistente dent\xE1ria espera pela consulta como paciente.",
      answer: false,
      explanation: "A assistente dent\xE1ria apoia o dentista, prepara os materiais e ajuda a organizar o consult\xF3rio."
    },
    {
      id: "clinica-3",
      statement: "O paciente vai \xE0 cl\xEDnica para cuidar da sua sa\xFAde oral.",
      answer: true,
      explanation: "O paciente \xE9 a pessoa que vai ao dentista para cuidar da sua sa\xFAde oral."
    },
    {
      id: "clinica-4",
      statement: "O consult\xF3rio \xE9 a sala onde os pacientes esperam pela sua vez.",
      answer: false,
      explanation: "O consult\xF3rio \xE9 a sala onde o dentista atende o paciente. Os pacientes aguardam na sala de espera."
    },
    {
      id: "clinica-5",
      statement: "A sala de espera \xE9 o local onde os pacientes aguardam.",
      answer: true,
      explanation: "A sala de espera \xE9 o espa\xE7o onde os pacientes aguardam pela consulta."
    },
    {
      id: "clinica-6",
      statement: "A rececionista confirma marca\xE7\xF5es e d\xE1 informa\xE7\xF5es.",
      answer: true,
      explanation: "A rececionista recebe os pacientes, confirma as marca\xE7\xF5es e d\xE1 informa\xE7\xF5es."
    }
  ],
  boca: [
    {
      id: "boca-1",
      statement: "A boca cont\xE9m os dentes, as gengivas e a l\xEDngua.",
      answer: true,
      explanation: "A boca \xE9 a parte do corpo onde se encontram os dentes, as gengivas e a l\xEDngua."
    },
    {
      id: "boca-2",
      statement: "Os dentes servem apenas para sorrir.",
      answer: false,
      explanation: "Os dentes ajudam a mastigar os alimentos e tamb\xE9m s\xE3o muito importantes para falar."
    },
    {
      id: "boca-3",
      statement: "As gengivas envolvem e protegem os dentes.",
      answer: true,
      explanation: "As gengivas envolvem e ajudam a proteger os dentes."
    },
    {
      id: "boca-4",
      statement: "A l\xEDngua ajuda a engolir e a falar.",
      answer: true,
      explanation: "A l\xEDngua ajuda a saborear os alimentos, a engolir e a falar."
    },
    {
      id: "boca-5",
      statement: "Os l\xE1bios ajudam a fechar a boca.",
      answer: true,
      explanation: "Os l\xE1bios ajudam a fechar a boca, a falar e a expressar emo\xE7\xF5es."
    },
    {
      id: "boca-6",
      statement: "Os maxilares s\xE3o m\xFAsculos da l\xEDngua.",
      answer: false,
      explanation: "Os maxilares s\xE3o os ossos que sustentam os dentes."
    }
  ],
  cuidados: [
    {
      id: "cuidados-1",
      statement: "A escova de dentes ajuda a remover placa bacteriana.",
      answer: true,
      explanation: "A escova de dentes remove restos de alimentos e placa bacteriana dos dentes."
    },
    {
      id: "cuidados-2",
      statement: "A pasta dent\xEDfrica \xE9 utilizada sem a escova de dentes.",
      answer: false,
      explanation: "A pasta dent\xEDfrica \xE9 utilizada com a escova para ajudar a limpar e proteger os dentes."
    },
    {
      id: "cuidados-3",
      statement: "O fio dent\xE1rio limpa os espa\xE7os entre os dentes.",
      answer: true,
      explanation: "O fio dent\xE1rio ajuda a limpar os espa\xE7os entre os dentes, onde a escova n\xE3o chega facilmente."
    },
    {
      id: "cuidados-4",
      statement: "O colut\xF3rio deve ser engolido depois de bochechar.",
      answer: false,
      explanation: "O colut\xF3rio \xE9 utilizado para bochechar e n\xE3o deve ser engolido."
    },
    {
      id: "cuidados-5",
      statement: "Escovar os dentes ajuda a prevenir problemas de sa\xFAde oral.",
      answer: true,
      explanation: "Escovar os dentes remove a placa bacteriana e ajuda a prevenir problemas de sa\xFAde oral."
    },
    {
      id: "cuidados-6",
      statement: "A consulta de rotina s\xF3 \xE9 necess\xE1ria quando existe dor.",
      answer: false,
      explanation: "A consulta de rotina permite verificar os dentes e identificar poss\xEDveis problemas, mesmo quando n\xE3o existe dor."
    }
  ]
};

// jogo-saude-oral-lgp/app/page.jsx
var import_jsx_runtime = require("react/jsx-runtime");
var allItems = themes.flatMap((theme) => theme.items);
var allCards = themes.flatMap(
  (theme, themeIdx) => theme.items.map((item, itemIdx) => ({
    ...item,
    themeId: theme.id,
    themeTitle: theme.title,
    themeNumber: theme.number,
    themeColor: theme.color,
    themeLight: theme.light,
    cardNumberInTheme: itemIdx + 1,
    globalCardNumber: themeIdx * 6 + itemIdx + 1
  }))
);
var allTrueFalseStatements = Object.values(trueFalseStatements).flat();
var gameColors = { color: "#079eb3", light: "#dff8fb" };
function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function ToothMark({ small = false }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: small ? "tooth-mark small" : "tooth-mark", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 64 64", role: "img", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 8c-4.5 0-8.1-3-13.1-2.5C9.5 6.5 5 14.7 7.5 24c1.8 6.7 5.8 9.9 7 18.7C15.8 52.3 19.4 58 24 58c5 0 4.4-15.8 8-15.8S35 58 40 58c4.6 0 8.2-5.7 9.5-15.3 1.2-8.8 5.2-12 7-18.7C59 14.7 54.5 6.5 45.1 5.5 40.1 5 36.5 8 32 8Z" }) }) });
}
function Header({ onHome, onGuide, compact = false }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { className: compact ? "site-header compact" : "site-header", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "brand", onClick: onHome, "aria-label": "Voltar ao in\xEDcio", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "img",
      {
        className: "brand-logo",
        src: "imagens/logo-kit-sorriso-bilingue.png",
        alt: "Kit Sorriso Bilingue \u2014 LGP\u2013Portugu\xEAs"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "header-tags", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "guide-nav-button", onClick: onGuide, children: "Guia do Professor" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { className: "dentlgp-brand-tag", href: "index.html", title: "Ir para a p\xE1gina principal da DentLGP", style: { display: "inline-flex", alignItems: "center", background: "#ffffff", padding: "5px 14px", borderRadius: "50px", border: "1px solid rgba(255,255,255,0.4)", boxShadow: "0 4px 12px rgba(0,0,0,0.12)", textDecoration: "none", transition: "transform 0.2s ease" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: "assets/images/dentlgp/logo dentlgp.png", alt: "DentLGP Principal", style: { height: "30px", width: "auto", objectFit: "contain" } }) })
    ] })
  ] });
}
function Home({ onStart, onGuide }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "hero", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "hero-copy", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", { className: "back-to-home-link", href: "index.html", style: { display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 18px", background: "#ffffff", color: "#000000", border: "1.5px solid #000000", borderRadius: "50px", textDecoration: "none", fontWeight: "700", fontSize: "14px", marginTop: "-12px", marginBottom: "20px", boxShadow: "0 4px 12px rgba(0,0,0,0.12)" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": "true", children: "\u2190" }),
          " Voltar \xE0 DentLGP"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "eyebrow", children: "O jogo digital do Kit Sorriso Bilingue" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hero-w1", children: "Aprende " }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hero-w2", children: "sa\xFAde oral " }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { className: "hero-w3", children: "a jogar conosco!" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Explora imagens, palavras em portugu\xEAs e conte\xFAdos em L\xEDngua Gestual Portuguesa atrav\xE9s de desafios claros, visuais e divertidos." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "hero-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", { className: "primary-button", href: "#atividades", children: [
            "Come\xE7ar a jogar ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": "true", children: "\u2192" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", { className: "secondary-link", href: "#como-jogar", children: [
            "Como funciona ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": "true", children: "\u2193" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "hero-notes", "aria-label": "Caracter\xEDsticas do jogo", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "\u2713" }),
            " Visual"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "\u2713" }),
            " Bilingue"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "\u2713" }),
            " Interativo"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "hero-art", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cover-glow", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "cover-card", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "img",
            {
              src: "imagens/kit-sorriso-bilingue.png",
              alt: "Tampa do Kit Sorriso Bilingue, com uma dentista e um aluno numa cl\xEDnica dent\xE1ria"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "O universo do kit, agora tamb\xE9m online." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "floating-pill pill-lgp", children: "LGP" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "floating-pill pill-play", children: "JOGAR" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "quick-facts", "aria-label": "Conte\xFAdos do jogo", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "3" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "temas para explorar" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "18" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "conceitos de sa\xFAde oral" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "5" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "atividades online" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "LGP" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "v\xEDdeos por conceito" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "activities-section", id: "atividades", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "section-heading", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "eyebrow", children: "Do material f\xEDsico ao digital" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Atividades do kit e desafios digitais" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "As regras do kit foram adaptadas a uma utiliza\xE7\xE3o online simples, visual e adequada ao trabalho individual ou acompanhado." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "activity-game-grid", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: "activity-game-card orange", onClick: () => onStart("image-word"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "play-badge", "aria-hidden": "true", children: "\u25B6" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "activity-visual image-word-visual", "aria-hidden": "true", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: "imagens/01_dentista.png", alt: "" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: "imagens/08_dentes.png", alt: "" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DENTISTA" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "activity-card-copy", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "activity-card-label", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "1" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "ATIVIDADE DO KIT" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Imagem\u2013Palavra" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Associa imagens e palavras em tr\xEAs n\xEDveis, com seis pares em cada n\xEDvel." }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "game-cta", children: [
              "Jogar agora ",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { "aria-hidden": "true", children: "\u2192" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: "activity-game-card red", onClick: () => onStart("true-false"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "play-badge", "aria-hidden": "true", children: "\u25B6" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "activity-visual vf-visual", "aria-hidden": "true", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "vf-mini true", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "V" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Verdadeiro" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "vf-mini false", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "F" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Falso" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "activity-card-copy", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "activity-card-label", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "2" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "ATIVIDADE DO KIT" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Verdadeiro ou Falso" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "L\xEA 18 afirma\xE7\xF5es, escolhe V ou F e recebe a explica\xE7\xE3o da resposta." }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "game-cta", children: [
              "Jogar agora ",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { "aria-hidden": "true", children: "\u2192" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: "activity-game-card purple", onClick: () => onStart("sequence"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "play-badge", "aria-hidden": "true", children: "\u25B6" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "activity-visual sequence-visual", "aria-hidden": "true", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: "imagens/sequencia/01-falar-rececionista.png", alt: "" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "1" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "2" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "3" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "4" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "activity-card-copy", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "activity-card-label", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "3" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "ATIVIDADE DO KIT" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Sequ\xEAncia da Consulta" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Organiza quatro etapas pela ordem correta de uma consulta dent\xE1ria." }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "game-cta", children: [
              "Jogar agora ",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { "aria-hidden": "true", children: "\u2192" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: "activity-game-card teal", onClick: () => onStart("knowledge-quiz"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "play-badge", "aria-hidden": "true", children: "\u25B6" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "activity-visual quiz-visual", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: "assets/images/pedro-lgp - Copy.png", alt: "" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "activity-card-copy", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Cart\xF5es de Aprendizagem" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Explora os 18 cart\xF5es com imagem, defini\xE7\xE3o, frase de exemplo e v\xEDdeo em LGP." }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "game-cta", children: [
              "Explorar Cart\xF5es ",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { "aria-hidden": "true", children: "\u2192" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: "activity-game-card blue online", onClick: () => onStart("memory"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "play-badge", "aria-hidden": "true", children: "\u25B6" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "activity-visual memory-visual", "aria-hidden": "true", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: "imagens/13_escova_dentes.png", alt: "" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: "imagens/13_escova_dentes.png", alt: "" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PAR!" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "activity-card-copy", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "activity-card-label", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "+" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "EXCLUSIVO - ONLINE" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Jogo de Mem\xF3ria" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Vira os cart\xF5es e encontra os pares formados por duas imagens iguais." }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "game-cta", children: [
              "Come\xE7ar o jogo ",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { "aria-hidden": "true", children: "\u2192" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "teacher-callout", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "teacher-callout-icon", "aria-hidden": "true", children: "\u25A4" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "\xC1REA DO PROFESSOR" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Objetivos, prepara\xE7\xE3o, acessibilidade e propostas de explora\xE7\xE3o" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "O guia acompanha a utiliza\xE7\xE3o dos cart\xF5es f\xEDsicos e das atividades digitais." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: "primary-button", onClick: onGuide, children: [
          "Consultar o guia ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": "true", children: "\u2192" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "how-section", id: "como-jogar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "how-heading", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "eyebrow light", children: "Aprender passo a passo" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Jogar \xE9 simples" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "O mesmo vocabul\xE1rio \xE9 apresentado de forma visual, escrita e gestual." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "how-steps", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "1" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Escolhe" }),
            "uma das atividades dispon\xEDveis."
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Observa" }),
            "as imagens, palavras ou afirma\xE7\xF5es."
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "3" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Aprende" }),
            "com imagens, palavras e v\xEDdeos em LGP."
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "learning-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "learning-image", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: "imagens/17_escovar_dentes.png", alt: "Crian\xE7a a escovar os dentes" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SA\xDADE ORAL" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "learning-copy", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "eyebrow", children: "Um recurso pedag\xF3gico bilingue" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
          "Ver, ler e aprender",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
          "em LGP"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "O DentLGP complementa os cart\xF5es f\xEDsicos do Kit Sorriso Bilingue e permite trabalhar o vocabul\xE1rio de forma aut\xF3noma, a pares ou com acompanhamento do professor." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "learning-list", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { "aria-hidden": "true", children: "\u25A3" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Imagem" }),
              "Identifica\xE7\xE3o visual do conceito"
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { "aria-hidden": "true", children: "Aa" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Portugu\xEAs" }),
              "Palavra e frase de exemplo"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        className: "scroll-to-top-fab",
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        title: "Voltar ao in\xEDcio",
        "aria-label": "Voltar ao in\xEDcio",
        children: "\u2191"
      }
    )
  ] });
}
function TeacherGuide({ onBack }) {
  const objectives = [
    "Reconhecer 18 conceitos essenciais de sa\xFAde oral.",
    "Relacionar imagem, palavra escrita e v\xEDdeo em LGP.",
    "Distinguir fun\xE7\xF5es, espa\xE7os, partes da boca e cuidados de higiene.",
    "Compreender a sequ\xEAncia b\xE1sica de uma consulta dent\xE1ria.",
    "Usar o vocabul\xE1rio aprendido em pequenas explica\xE7\xF5es e situa\xE7\xF5es do quotidiano."
  ];
  const preparation = [
    "Selecionar um tema adequado aos conhecimentos do grupo.",
    "Testar previamente o acesso aos v\xEDdeos em LGP.",
    "Garantir boa ilumina\xE7\xE3o e contacto visual antes de cada explica\xE7\xE3o.",
    "Apresentar uma informa\xE7\xE3o de cada vez e dar tempo para observar.",
    "Respeitar a variedade e esclarecer variantes da LGP."
  ];
  const activities = [
    {
      number: "1",
      className: "orange",
      title: "Imagem\u2013Palavra",
      objective: "Associar cada imagem \xE0 palavra escrita correspondente.",
      adaptations: "N\xEDvel inicial: 3 pares. N\xEDvel interm\xE9dio: 1 tema. N\xEDvel avan\xE7ado: os 3 temas."
    },
    {
      number: "2",
      className: "red",
      title: "Verdadeiro ou Falso",
      objective: "Verificar a compreens\xE3o dos conte\xFAdos de sa\xFAde oral.",
      adaptations: "Pedir a justifica\xE7\xE3o da escolha e retomar os conceitos que necessitam de apoio."
    },
    {
      number: "3",
      className: "purple",
      title: "Sequ\xEAncia da Consulta",
      objective: "Compreender a ordem das etapas de uma consulta dent\xE1ria.",
      adaptations: "Complementar com uma dramatiza\xE7\xE3o dos pap\xE9is de rececionista, paciente e dentista."
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { className: "teacher-guide-page", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "guide-hero", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "back-button light-back", onClick: onBack, children: "\u2190 Voltar ao jogo" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "guide-hero-copy", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "guide-kicker", children: "KIT SORRISO BILINGUE \xB7 LGP\u2013PORTUGU\xCAS" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Guia do Professor" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Orienta\xE7\xF5es para explorar os conte\xFAdos de sa\xFAde oral com alunos Surdos do 1.\xBA Ciclo, atrav\xE9s dos cart\xF5es f\xEDsicos e das atividades digitais." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "guide-downloads", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { className: "primary-button", href: "assets/Guia_do_Professor_A5.pdf", target: "_blank", rel: "noreferrer", children: "Abrir o guia em PDF" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "guide-hero-mark", style: { width: "240px", height: "320px", padding: "8px", background: "#ffffff", borderRadius: "18px", boxShadow: "0 20px 45px rgba(0,0,0,0.3)", transform: "rotate(2deg)", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: "assets/images/capa guia do professor.png", alt: "Capa Guia do Professor", style: { width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" } }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "guide-content", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { className: "guide-index", "aria-label": "Conte\xFAdos do guia", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "#apresentacao", children: "Apresenta\xE7\xE3o" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "#objetivos", children: "Objetivos" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "#preparacao", children: "Acessibilidade" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "#guia-atividades", children: "Atividades" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "#observacao", children: "Observa\xE7\xE3o" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "guide-intro-grid", id: "apresentacao", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { className: "guide-panel", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "guide-section-number", children: "01" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Apresenta\xE7\xE3o" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "O Kit Sorriso Bilingue \xE9 um recurso educativo em L\xEDngua Gestual Portuguesa e portugu\xEAs escrito. Apoia a aprendizagem de vocabul\xE1rio e de procedimentos b\xE1sicos relacionados com a sa\xFAde oral e a consulta dent\xE1ria." }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "As imagens, as palavras escritas, os v\xEDdeos em LGP e as atividades permitem trabalhar o mesmo conceito por diferentes vias visuais." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { className: "guide-panel principles-panel", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "guide-section-number", children: "02" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Princ\xEDpios do recurso" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A LGP e o portugu\xEAs apresentam fun\xE7\xF5es complementares." }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A informa\xE7\xE3o visual \xE9 clara e organizada por temas." }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "O aluno pode observar, associar, ordenar, responder e explicar." }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "O ritmo e o grau de apoio adaptam-se ao grupo." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "guide-split-section", id: "objetivos", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "eyebrow", children: "P\xFAblico-alvo e objetivos" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Aprender com diferentes n\xEDveis de apoio" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { color: "#000000", fontWeight: "600", opacity: 1 }, children: "Destina-se principalmente a alunos Surdos do 1.\xBA Ciclo. Pode tamb\xE9m apoiar turmas bilingues, fam\xEDlias, docentes, int\xE9rpretes de LGP e a\xE7\xF5es de literacia em sa\xFAde oral." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { className: "check-list plain-list", children: objectives.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "guide-themes", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "guide-section-heading", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "eyebrow", children: "18 conceitos" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Tr\xEAs temas de sa\xFAde oral" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "guide-theme-grid", children: themes.map((theme) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { style: { "--theme": theme.color, "--theme-light": theme.light }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
            "TEMA ",
            theme.number
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: theme.title }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: theme.items.map((item) => item.word).join(" \xB7 ") })
        ] }, theme.id)) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "card-exploration", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Como explorar um cart\xE3o" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Observar a imagem e identificar o que j\xE1 \xE9 conhecido." }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Ler a palavra em portugu\xEAs e relacion\xE1-la com a imagem." }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Ver o v\xEDdeo em LGP associado ao conceito." }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Utilizar o conceito numa frase ou numa situa\xE7\xE3o pr\xE1tica." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "accessibility-section", id: "preparacao", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "accessibility-visual", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: "imagens/02_assistente.png", alt: "Assistente dent\xE1ria numa cl\xEDnica" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "COMUNICA\xC7\xC3O ACESS\xCDVEL" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "eyebrow", children: "Prepara\xE7\xE3o e acessibilidade" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Antes de come\xE7ar" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { className: "check-list compact-list", children: preparation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item)) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "guide-note", style: { color: "#000000", fontWeight: "600", opacity: 1 }, children: "Evite falar ou produzir LGP enquanto o aluno observa outro suporte. Organize o espa\xE7o para que todos vejam as m\xE3os, o rosto e os materiais." })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "guide-activities", id: "guia-atividades", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "guide-section-heading", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "eyebrow", children: "Orienta\xE7\xF5es de utiliza\xE7\xE3o" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "As tr\xEAs atividades" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "guide-activity-grid", children: activities.map((activity) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { className: activity.className, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: activity.number }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "ATIVIDADE" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: activity.title }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: activity.objective }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: activity.adaptations })
        ] }, activity.number)) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "guide-digital-extras", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Cart\xF5es de Aprendizagem" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Vers\xE3o digital interativa dos 18 cart\xF5es com imagem, defini\xE7\xE3o, frase de exemplo e v\xEDdeo em L\xEDngua Gestual Portuguesa (LGP)." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "EXCLUSIVO - ONLINE" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Jogo de Mem\xF3ria" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "O aluno vira dois cart\xF5es de cada vez e procura os pares formados por duas imagens iguais." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "observation-section", id: "observacao", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "eyebrow", children: "Acompanhamento pedag\xF3gico" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Grelha de observa\xE7\xE3o" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { color: "#000000", fontWeight: "600", opacity: 1 }, children: "O professor pode registar o grau de autonomia demonstrado em cada aspeto." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "observation-table", role: "table", "aria-label": "Grelha de observa\xE7\xE3o", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "observation-row header", role: "row", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Aspeto" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Sim" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Com apoio" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Ainda n\xE3o" })
          ] }),
          ["Reconhece a imagem", "Associa a palavra", "Compreende o v\xEDdeo em LGP", "Aplica o conceito"].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "observation-row", role: "row", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
          ] }, item))
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "health-disclaimer", children: "Este recurso \xE9 educativo e n\xE3o substitui a avalia\xE7\xE3o nem as recomenda\xE7\xF5es de um profissional de sa\xFAde oral." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        type: "button",
        className: "scroll-to-top-fab",
        onClick: () => {
          const hero = document.querySelector(".guide-hero") || document.querySelector(".teacher-guide-page");
          if (hero) {
            hero.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        },
        title: "Voltar ao topo",
        "aria-label": "Voltar ao topo",
        children: "\u2191"
      }
    )
  ] });
}
function Progress({ current, total, label }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "progress-wrap", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "progress-label", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
        current,
        " / ",
        total
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "progress-track", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { width: `${Math.min(100, current / total * 100)}%` } }) })
  ] });
}
function ImageWordGame({ onExit, onFinish }) {
  const [levelDecks] = (0, import_react.useState)(() => [0, 1, 2].map((index) => {
    const items = allItems.slice(index * 6, index * 6 + 6);
    return { images: shuffle(items), words: shuffle(items) };
  }));
  const [levelIndex, setLevelIndex] = (0, import_react.useState)(0);
  const [selectedImage, setSelectedImage] = (0, import_react.useState)(null);
  const [matched, setMatched] = (0, import_react.useState)([]);
  const [attempts, setAttempts] = (0, import_react.useState)(0);
  const [feedback, setFeedback] = (0, import_react.useState)(null);
  const [showLgp, setShowLgp] = (0, import_react.useState)(false);
  const complete = matched.length === allItems.length;
  const levelItems = allItems.slice(levelIndex * 6, levelIndex * 6 + 6);
  const levelMatched = levelItems.filter((item) => matched.includes(item.id)).length;
  const levelComplete = levelMatched === levelItems.length;
  const imageCards = levelDecks[levelIndex].images;
  const wordCards = levelDecks[levelIndex].words;
  const selectedItem = allItems.find((item) => item.id === selectedImage);
  function chooseImage(item) {
    if (matched.includes(item.id)) return;
    setSelectedImage(item.id);
    setFeedback(null);
  }
  function chooseWord(item) {
    if (matched.includes(item.id)) return;
    if (!selectedImage) {
      setFeedback({ type: "hint", message: "Seleciona primeiro um cart\xE3o de imagem." });
      return;
    }
    setAttempts((value) => value + 1);
    if (item.id === selectedImage) {
      setMatched((values) => [...values, item.id]);
      setFeedback({ type: "correct", item });
      setSelectedImage(null);
      return;
    }
    setFeedback({ type: "wrong", message: "Ainda n\xE3o corresponde. Observa a imagem e tenta outra palavra." });
  }
  function nextLevel() {
    if (!levelComplete || levelIndex >= 2) return;
    setLevelIndex((value) => value + 1);
    setSelectedImage(null);
    setFeedback(null);
    setShowLgp(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { className: "game-shell match-page", style: { "--theme": gameColors.color, "--theme-light": gameColors.light }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "game-topbar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "back-button", onClick: onExit, children: "\xD7 Sair do jogo" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "score-chip", children: [
        "Tentativas ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: attempts })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { current: matched.length, total: allItems.length, label: "Progresso total" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "match-heading", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "theme-pill", children: [
        "N\xEDvel ",
        levelIndex + 1,
        " de 3 \xB7 6 pares"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Forma os pares Imagem\u2013Palavra" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Seleciona uma imagem e, depois, a palavra correspondente." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "matching-board", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "matching-column image-cards-column", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "1. ESCOLHE UMA IMAGEM" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "matching-card-grid", children: imageCards.map((item) => {
          const isMatched = matched.includes(item.id);
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "button",
            {
              className: `picture-match-card ${selectedImage === item.id ? "selected" : ""} ${isMatched ? "matched" : ""}`,
              onClick: () => chooseImage(item),
              "aria-pressed": selectedImage === item.id,
              disabled: isMatched,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: item.image, alt: `Imagem: ${item.word}` }),
                isMatched && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "\u2713" })
              ]
            },
            item.id
          );
        }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "matching-column word-cards-column", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "2. ESCOLHE A PALAVRA" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "word-match-list", children: wordCards.map((item) => {
          const isMatched = matched.includes(item.id);
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "button",
            {
              className: isMatched ? "matched" : "",
              onClick: () => chooseWord(item),
              disabled: isMatched,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.word }),
                isMatched && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "\u2713" })
              ]
            },
            item.id
          );
        }) }),
        levelComplete && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "level-advance-panel", role: "status", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "\u2713" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: complete ? "Conclu\xEDste os tr\xEAs n\xEDveis!" : `N\xEDvel ${levelIndex + 1} conclu\xEDdo!` }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: complete ? "Os 18 pares est\xE3o corretos." : "Os seis pares est\xE3o corretos." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "button",
            {
              onClick: complete ? () => onFinish({ type: "image-word", score: matched.length, total: allItems.length, attempts }) : nextLevel,
              children: [
                complete ? "Concluir atividade" : "Pr\xF3ximo n\xEDvel",
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { "aria-hidden": "true", children: "\u2192" })
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `match-feedback ${feedback?.type ?? ""}`, role: "status", children: [
      !feedback && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: selectedItem ? `Imagem selecionada: ${selectedItem.word}. Agora escolhe a palavra.` : "Come\xE7a por selecionar um cart\xE3o de imagem." }),
      feedback?.type === "hint" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: feedback.message }),
      feedback?.type === "wrong" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: feedback.message }),
      feedback?.type === "correct" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
            "Muito bem! Formaste o par \xAB",
            feedback.item.word,
            "\xBB."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: feedback.item.definition }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
            "Frase de exemplo: ",
            feedback.item.sentence
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: "lgp-button", onClick: () => setShowLgp(true), children: [
          "LGP ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "\u25B6" })
        ] })
      ] })
    ] }),
    showLgp && feedback?.item && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LgpModal, { word: feedback.item.word, onClose: () => setShowLgp(false) })
  ] });
}
function TrueFalseGame({ onExit, onFinish }) {
  const [questions] = (0, import_react.useState)(() => shuffle(allTrueFalseStatements));
  const [current, setCurrent] = (0, import_react.useState)(0);
  const [score, setScore] = (0, import_react.useState)(0);
  const [selected, setSelected] = (0, import_react.useState)(null);
  const question = questions[current];
  const isCorrect = selected === question?.answer;
  const finished = current === questions.length - 1;
  function answer(value) {
    if (selected !== null) return;
    setSelected(value);
    if (value === question.answer) setScore((result) => result + 1);
  }
  function next() {
    if (selected === null) return;
    if (finished) {
      onFinish({
        type: "true-false",
        score: score + (isCorrect ? 0 : 0),
        total: questions.length
      });
      return;
    }
    setCurrent((value) => value + 1);
    setSelected(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { className: "true-false-game-page", style: { "--theme": gameColors.color, "--theme-light": gameColors.light }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "game-topbar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "back-button", onClick: onExit, children: "\xD7 Sair do jogo" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "score-chip vf-score-chip", children: [
        "Pontos ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: score })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { current: current + (selected !== null ? 1 : 0), total: questions.length, label: "Afirma\xE7\xF5es respondidas" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "true-false-heading", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "vf-pill", children: "ATIVIDADE 2 \xB7 18 afirma\xE7\xF5es" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Verdadeiro ou Falso?" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "L\xEA a afirma\xE7\xE3o e escolhe o cart\xE3o correto." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "true-false-board", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { className: "statement-card", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: current + 1 }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "AFIRMA\xC7\xC3O" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: question.statement })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "vf-answer-grid", "aria-label": "Escolhe verdadeiro ou falso", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "button",
          {
            className: `${selected === true ? "selected" : ""} ${selected !== null && question.answer === true ? "correct" : ""}`,
            onClick: () => answer(true),
            disabled: selected !== null,
            "aria-label": "Verdadeiro",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "V" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Verdadeiro" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "button",
          {
            className: `${selected === false ? "selected" : ""} ${selected !== null && question.answer === false ? "correct" : ""}`,
            onClick: () => answer(false),
            disabled: selected !== null,
            "aria-label": "Falso",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "F" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Falso" })
            ]
          }
        )
      ] })
    ] }),
    selected !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `answer-feedback ${isCorrect ? "correct" : "wrong"}`, role: "status", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: isCorrect ? "Resposta correta!" : `A resposta correta \xE9 ${question.answer ? "Verdadeiro" : "Falso"}.` }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: question.explanation })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { onClick: next, children: [
        finished ? "Ver resultado" : "Pr\xF3xima afirma\xE7\xE3o",
        " \u2192"
      ] })
    ] })
  ] });
}
function NativeLgpVideoPlayer({ src, themeColor }) {
  const [isPlaying, setIsPlaying] = (0, import_react.useState)(false);
  const [hasStarted, setHasStarted] = (0, import_react.useState)(false);
  const videoRef = (0, import_react.useRef)(null);
  const cleanSrc = (0, import_react.useMemo)(() => {
    if (!src) return "";
    return encodeURI(src);
  }, [src]);
  const cleanSrcAlt = (0, import_react.useMemo)(() => {
    if (!src) return "";
    const altPath = src.replace("assets/videos - cartoes de aprendizagem/", "assets/videos/");
    return encodeURI(altPath);
  }, [src]);
  (0, import_react.useEffect)(() => {
    setIsPlaying(false);
    setHasStarted(false);
    if (videoRef.current) {
      videoRef.current.pause();
      try {
        videoRef.current.currentTime = 0;
        videoRef.current.load();
      } catch (e) {
      }
    }
  }, [src]);
  const handleTogglePlay = (e) => {
    if (e) e.stopPropagation();
    if (isPlaying) {
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    } else {
      setIsPlaying(true);
      setHasStarted(true);
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      }
    }
  };
  const handleEnded = () => {
    setIsPlaying(false);
    setHasStarted(false);
    if (videoRef.current) {
      try {
        videoRef.current.currentTime = 0;
      } catch (err) {
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: "lgp-video-player",
      style: { position: "relative", overflow: "hidden", borderRadius: "14px" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "video",
          {
            ref: videoRef,
            src: cleanSrc,
            onEnded: handleEnded,
            onPlay: () => setIsPlaying(true),
            onPause: () => setIsPlaying(false),
            playsInline: true,
            controls: true,
            preload: "metadata",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "contain",
              backgroundColor: "#100a1c",
              borderRadius: "14px",
              display: "block"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", { src: cleanSrc, type: "video/mp4" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", { src: cleanSrcAlt, type: "video/mp4" }),
              "O seu navegador n\xE3o suporta a reprodu\xE7\xE3o deste v\xEDdeo em LGP."
            ]
          },
          cleanSrc
        ),
        !isPlaying && !hasStarted && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "lgp-video-play-overlay", onClick: handleTogglePlay, style: { cursor: "pointer" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "lgp-video-play-btn", style: { backgroundColor: themeColor || "var(--theme, #079eb3)" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", style: { width: "32px", height: "32px", fill: "#ffffff", marginLeft: "3px" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 5v14l11-7z" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "lgp-video-play-text", children: "Ver v\xEDdeo em LGP" })
        ] })
      ]
    }
  );
}
function KnowledgeQuiz({ onExit, onFinish }) {
  const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
  const [showLgp, setShowLgp] = (0, import_react.useState)(false);
  const currentCard = allCards[currentIndex] || allCards[0];
  function scrollToTop() {
    const el = document.querySelector(".learning-cards-page") || document.querySelector(".learning-workspace");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  function nextCard() {
    if (currentIndex < allCards.length - 1) {
      setCurrentIndex((i) => i + 1);
      setShowLgp(false);
      scrollToTop();
    } else {
      onFinish({ type: "knowledge-quiz", score: allCards.length, total: allCards.length });
    }
  }
  function prevCard() {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setShowLgp(false);
      scrollToTop();
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { className: "learning-cards-page", style: { "--theme": currentCard.themeColor, "--theme-light": currentCard.themeLight }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "game-topbar", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "back-button", onClick: onExit, children: "\xD7 Voltar ao menu" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "learning-heading", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "knowledge-pill", children: [
        "VERS\xC3O DIGITAL DOS CART\xD5ES \xB7 CART\xC3O ",
        currentCard.globalCardNumber,
        " DE ",
        allCards.length
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Cart\xF5es de Aprendizagem" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "learning-workspace", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "learning-card-container", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "learning-card-a6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "card-a6-header", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "card-word-title", children: currentCard.word }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "card-number-badge", children: currentCard.globalCardNumber })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "card-a6-image-box", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: currentCard.image, alt: currentCard.word }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "card-a6-content", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "card-section", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "O que \xE9?" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: currentCard.definition })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "card-section", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Frase de exemplo:" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "card-example-sentence", children: currentCard.sentence })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "lgp-video-card", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "lgp-video-header", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "lgp-video-badge", children: "\u25B6 V\xCDDEO EM LGP" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: currentCard.word })
        ] }),
        currentCard.video ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeLgpVideoPlayer, { src: currentCard.video, themeColor: currentCard.themeColor }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "lgp-video-player", style: { position: "relative" }, children: currentCard.youtubeId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "iframe",
            {
              src: `https://www.youtube-nocookie.com/embed/${currentCard.youtubeId}?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=${currentCard.youtubeId}&controls=0&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1&rel=0&playsinline=1&fs=0`,
              title: `V\xEDdeo em LGP: ${currentCard.word}`,
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: true,
              style: { width: "100%", height: "100%", border: 0, borderRadius: "14px", pointerEvents: "none" }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 10, background: "transparent", pointerEvents: "auto" } })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "lgp-video-screen", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "play-icon-large", children: "\u25B6" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "L\xEDngua Gestual Portuguesa" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "lgp-video-note", children: [
          "Demonstra\xE7\xE3o do gesto em L\xEDngua Gestual Portuguesa correspondente a \xAB",
          currentCard.word,
          "\xBB."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "card-pagination-grid", children: allCards.map((card, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        className: `card-nav-dot ${idx === currentIndex ? "active" : ""}`,
        onClick: () => {
          setCurrentIndex(idx);
          setShowLgp(false);
          scrollToTop();
        },
        title: `${card.globalCardNumber}. ${card.word}`,
        children: card.globalCardNumber
      },
      card.id
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "learning-controls", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: "secondary-button", onClick: prevCard, disabled: currentIndex === 0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "btn-label-desktop", children: "\u2190 Cart\xE3o anterior" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "btn-label-mobile", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "btn-word", children: "Anterior" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "btn-arrow", children: "\u2190" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "primary-button", onClick: nextCard, children: currentIndex < allCards.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "btn-label-desktop", children: "Pr\xF3ximo cart\xE3o \u2192" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "btn-label-mobile", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "btn-word", children: "Pr\xF3ximo" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "btn-arrow", children: "\u2192" })
        ] })
      ] }) : "Concluir cart\xF5es \u2713" })
    ] })
  ] });
}
var sequenceCards = [
  { id: "rececionista", label: "Falar com a rececionista", image: "imagens/06_rececionista.png" },
  { id: "espera", label: "Esperar na sala de espera", image: "imagens/05_sala_espera.png" },
  { id: "consultorio", label: "Entrar no consult\xF3rio", image: "imagens/04_consultorio.png" },
  { id: "consulta", label: "Realizar a consulta", image: "imagens/18_consulta_rotina.png" }
];
function SequenceGame({ onExit, onFinish }) {
  const [cards] = (0, import_react.useState)(() => shuffle(sequenceCards));
  const [ordered, setOrdered] = (0, import_react.useState)([]);
  const [attempts, setAttempts] = (0, import_react.useState)(0);
  const [feedback, setFeedback] = (0, import_react.useState)(null);
  const complete = ordered.length === sequenceCards.length;
  function addCard(card) {
    if (ordered.some((item) => item.id === card.id) || feedback?.type === "correct") return;
    setOrdered((items) => [...items, card]);
    setFeedback(null);
  }
  function removeCard(card) {
    if (feedback?.type === "correct") return;
    setOrdered((items) => items.filter((item) => item.id !== card.id));
    setFeedback(null);
  }
  function checkSequence() {
    if (!complete) return;
    setAttempts((value) => value + 1);
    const correct = ordered.every((item, index) => item.id === sequenceCards[index].id);
    setFeedback(correct ? { type: "correct", message: "Muito bem! Organizaste corretamente as quatro etapas da consulta." } : { type: "wrong", message: "A sequ\xEAncia ainda n\xE3o est\xE1 correta. Rev\xEA a ordem e tenta novamente." });
  }
  function resetSequence() {
    setOrdered([]);
    setFeedback(null);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { className: "sequence-game-page", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "game-topbar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "back-button", onClick: onExit, children: "\xD7 Sair do jogo" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "score-chip sequence-chip", children: [
        "Tentativas ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: attempts })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { current: ordered.length, total: sequenceCards.length, label: "Etapas organizadas" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "sequence-heading", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sequence-pill", children: "ATIVIDADE 3" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Sequ\xEAncia da Consulta" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Seleciona os cart\xF5es pela ordem em que os acontecimentos ocorrem." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "sequence-game-board", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "sequence-source", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "CART\xD5ES DISPON\xCDVEIS" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "sequence-source-grid", children: cards.map((card) => {
          const used = ordered.some((item) => item.id === card.id);
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: used ? "used" : "", onClick: () => addCard(card), disabled: used, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: card.image, alt: card.label }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { className: "sequence-card-label", children: card.label })
          ] }, card.id);
        }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "sequence-answer", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "A TUA SEQU\xCANCIA" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "sequence-slots", children: [0, 1, 2, 3].map((index) => {
          const card = ordered[index];
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: card ? "filled" : "", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "slot-number", children: index + 1 }),
            card ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { onClick: () => removeCard(card), "aria-label": `Retirar ${card.label}`, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: card.image, alt: card.label }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { className: "sequence-card-label", children: card.label }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "\xD7" })
            ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Seleciona um cart\xE3o" })
          ] }, index);
        }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "sequence-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "secondary-button", onClick: resetSequence, disabled: ordered.length === 0 || feedback?.type === "correct", children: "Recome\xE7ar" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "sequence-check-button", onClick: checkSequence, disabled: !complete || feedback?.type === "correct", children: "Confirmar a sequ\xEAncia" })
        ] })
      ] })
    ] }),
    feedback && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `sequence-feedback ${feedback.type}`, role: "status", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: feedback.type === "correct" ? "Sequ\xEAncia correta!" : "Vamos tentar novamente." }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: feedback.message }),
      feedback.type === "correct" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: () => onFinish({ type: "sequence", score: 4, total: 4, attempts }), children: "Ver resultado \u2192" })
    ] })
  ] });
}
function LgpModal({ word, onClose }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "modal-backdrop", role: "dialog", "aria-modal": "true", "aria-label": `V\xEDdeo em LGP: ${word}`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "lgp-modal", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "modal-close", onClick: onClose, "aria-label": "Fechar", children: "\xD7" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "video-placeholder", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "\u25B6" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "V\xCDDEO EM LGP" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: word }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Este espa\xE7o est\xE1 preparado para receber o v\xEDdeo em LGP ap\xF3s grava\xE7\xE3o e valida\xE7\xE3o por uma pessoa Surda fluente." }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "primary-button", onClick: onClose, children: "Compreendi" })
  ] }) });
}
function MemoryGame({ onExit, onFinish }) {
  const levelConfigs = [
    { level: 1, name: "N\xEDvel 1 - F\xE1cil", pairs: 6, label: "6 pares \xB7 12 cart\xF5es" },
    { level: 2, name: "N\xEDvel 2 - M\xE9dio", pairs: 6, label: "6 pares \xB7 12 cart\xF5es" },
    { level: 3, name: "N\xEDvel 3 - Desafio", pairs: 6, label: "6 pares \xB7 12 cart\xF5es" }
  ];
  const [currentLevelIdx, setCurrentLevelIdx] = (0, import_react.useState)(0);
  const [accumulatedMoves, setAccumulatedMoves] = (0, import_react.useState)(0);
  const [levelSuccess, setLevelSuccess] = (0, import_react.useState)(false);
  const currentConfig = levelConfigs[currentLevelIdx];
  function selectUniqueMemoryItems(count) {
    const seen = /* @__PURE__ */ new Set();
    const selected = [];
    const shuffled = shuffle(allItems);
    for (const item of shuffled) {
      const key = `${item.id}|${item.image}|${item.word}`.toLowerCase();
      if (!seen.has(key) && !seen.has(item.id) && !seen.has(item.image)) {
        seen.add(key);
        seen.add(item.id);
        seen.add(item.image);
        selected.push(item);
        if (selected.length === count) break;
      }
    }
    return selected;
  }
  const [cards, setCards] = (0, import_react.useState)(() => {
    const items = selectUniqueMemoryItems(currentConfig.pairs);
    return shuffle(items.flatMap((item) => [
      { key: `${item.id}-a`, pair: item.id, item },
      { key: `${item.id}-b`, pair: item.id, item }
    ]));
  });
  const [open, setOpen] = (0, import_react.useState)([]);
  const [matched, setMatched] = (0, import_react.useState)([]);
  const [levelMoves, setLevelMoves] = (0, import_react.useState)(0);
  const [locked, setLocked] = (0, import_react.useState)(false);
  function startLevel(idx, totalMovesSoFar) {
    const config = levelConfigs[idx];
    const items = selectUniqueMemoryItems(config.pairs);
    setCards(shuffle(items.flatMap((item) => [
      { key: `${item.id}-a`, pair: item.id, item },
      { key: `${item.id}-b`, pair: item.id, item }
    ])));
    setOpen([]);
    setMatched([]);
    setLevelMoves(0);
    setLocked(false);
    setLevelSuccess(false);
    setCurrentLevelIdx(idx);
    if (typeof totalMovesSoFar === "number") {
      setAccumulatedMoves(totalMovesSoFar);
    }
  }
  (0, import_react.useEffect)(() => {
    if (open.length !== 2) return void 0;
    const [first, second] = open.map((key) => cards.find((card) => card.key === key));
    const isMatch = first.pair === second.pair;
    const timer = setTimeout(() => {
      if (isMatch) setMatched((values) => [...values, first.pair]);
      setOpen([]);
      setLocked(false);
    }, isMatch ? 600 : 950);
    return () => clearTimeout(timer);
  }, [open, cards]);
  (0, import_react.useEffect)(() => {
    if (cards.length > 0 && matched.length === currentConfig.pairs) {
      setLevelSuccess(true);
      const timer = setTimeout(() => {
        const nextMoves = accumulatedMoves + levelMoves;
        if (currentLevelIdx < levelConfigs.length - 1) {
          startLevel(currentLevelIdx + 1, nextMoves);
        } else {
          onFinish({ type: "memory", moves: nextMoves, total: 18 });
        }
      }, 1200);
      return () => clearTimeout(timer);
    }
    return void 0;
  }, [matched, currentConfig, currentLevelIdx, accumulatedMoves, levelMoves, onFinish, cards]);
  function turn(card) {
    if (locked || open.includes(card.key) || matched.includes(card.pair) || levelSuccess) return;
    if (open.length === 0) setLevelMoves((value) => value + 1);
    if (open.length === 1) setLocked(true);
    setOpen((values) => [...values, card.key]);
  }
  const totalMoves = accumulatedMoves + levelMoves;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { className: "game-shell memory-page", style: { "--theme": gameColors.color, "--theme-light": gameColors.light }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "game-topbar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "back-button", onClick: onExit, children: "\xD7 Sair do jogo" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: "10px", alignItems: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "score-chip", children: [
          "N\xEDvel ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
            currentConfig.level,
            "/3"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "score-chip", children: [
          "Jogadas ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: totalMoves })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { current: matched.length, total: currentConfig.pairs, label: `N\xEDvel ${currentConfig.level} \xB7 Pares encontrados` }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "memory-heading", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "theme-pill", children: [
        "N\xCDVEL ",
        currentConfig.level,
        " DE 3 \xB7 ",
        currentConfig.label
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Encontra as duas imagens iguais" })
    ] }),
    levelSuccess && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "level-toast", style: { margin: "0 auto 16px", padding: "12px 24px", background: "#4caf50", color: "#fff", borderRadius: "12px", fontWeight: "bold", textAlign: "center", maxWidth: "400px" }, children: [
      "\u{1F389} N\xEDvel ",
      currentConfig.level,
      " Conclu\xEDdo! ",
      currentLevelIdx < 2 ? "A preparar o pr\xF3ximo n\xEDvel..." : "Parab\xE9ns!"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { className: `memory-grid level-${currentConfig.level}`, children: cards.map((card) => {
      const visible = open.includes(card.key) || matched.includes(card.pair);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          className: `memory-card ${visible ? "visible" : ""} ${matched.includes(card.pair) ? "matched" : ""}`,
          onClick: () => turn(card),
          "aria-label": visible ? card.item.word : "Cart\xE3o por virar",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "memory-inner", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "memory-back", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToothMark, {}) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "memory-front image", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: card.item.image, alt: card.item.word }),
              matched.includes(card.pair) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "\u2713" })
            ] })
          ] })
        },
        card.key
      );
    }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "memory-tip", children: "Vira dois cart\xF5es de cada vez e encontra as imagens iguais." })
  ] });
}
function Result({ result, onAgain, onActivities, onHome }) {
  const isImageWord = result.type === "image-word";
  const isKnowledgeQuiz = result.type === "knowledge-quiz";
  const isTrueFalse = result.type === "true-false";
  const isSequence = result.type === "sequence";
  const isScoredActivity = isKnowledgeQuiz || isTrueFalse;
  const excellent = isImageWord ? result.attempts <= 22 : isSequence ? result.attempts <= 2 : isScoredActivity ? result.score >= 15 : result.moves <= 26;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "main",
    {
      className: "result-page",
      style: {
        "--theme": isSequence ? "#7653a7" : gameColors.color,
        "--theme-light": isSequence ? "#f1ebfb" : gameColors.light
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "result-card", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "confetti", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "\u25CF" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "\u2726" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "\u25B2" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "\u25CF" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "\u2726" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "result-icon", children: "\u2713" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "ATIVIDADE CONCLU\xCDDA" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: excellent ? "Excelente trabalho!" : "Muito bem!" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isSequence ? "Organizaste as quatro etapas da consulta dent\xE1ria." : isKnowledgeQuiz ? "Exploraste todos os 18 cart\xF5es de aprendizagem de sa\xFAde oral." : "Terminaste esta atividade de sa\xFAde oral." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "result-score", children: [
          isImageWord && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
              result.score,
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
                " / ",
                result.total
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "pares formados" })
          ] }),
          isKnowledgeQuiz && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
              result.total,
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
                " / ",
                result.total
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "cart\xF5es explorados" })
          ] }),
          isTrueFalse && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
              result.score,
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
                " / ",
                result.total
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "respostas corretas" })
          ] }),
          isSequence && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
              "4",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: " / 4" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "etapas ordenadas" })
          ] }),
          !isImageWord && !isKnowledgeQuiz && !isTrueFalse && !isSequence && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: result.moves }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "jogadas" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "result-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "primary-button", onClick: onAgain, children: "Jogar novamente" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "secondary-button", onClick: onActivities, children: "Escolher outra atividade" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "text-button", onClick: onHome, children: "Voltar ao in\xEDcio" })
      ] })
    }
  );
}
function Page() {
  const [screen, setScreen] = (0, import_react.useState)("home");
  const [result, setResult] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    function purgeOverlays() {
      if (typeof document === "undefined") return;
      const targets = document.querySelectorAll(
        '[class*="extension"], [id*="extension"], [class*="toaster"], [class*="sleex"], [class*="be_skin"], [id*="sleex"], [id*="be_skin"]'
      );
      targets.forEach((el) => {
        if (el.id === "root" || el.tagName === "SCRIPT" || el.tagName === "BODY" || el.tagName === "HTML" || el.tagName === "HEAD") return;
        try {
          el.remove();
        } catch (e) {
          el.style.display = "none";
        }
      });
    }
    purgeOverlays();
    const interval = setInterval(purgeOverlays, 60);
    let observer = null;
    if (typeof window !== "undefined" && window.MutationObserver && document.documentElement) {
      observer = new MutationObserver(purgeOverlays);
      observer.observe(document.documentElement, { childList: true, subtree: true });
    }
    return () => {
      clearInterval(interval);
      if (observer) observer.disconnect();
    };
  }, []);
  (0, import_react.useEffect)(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "instant" });
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 60);
    if (screen !== "home") {
      try {
        window.history.pushState({ kitSorrisoScreen: screen }, "", window.location.href);
      } catch (e) {
      }
    }
    const handlePopState = () => {
      if (screen !== "home") {
        setScreen("home");
        setResult(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [screen]);
  const compact = (0, import_react.useMemo)(() => screen !== "home", [screen]);
  function home() {
    setScreen("home");
    setResult(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function startActivity(activity) {
    setResult(null);
    setScreen(activity);
    window.scrollTo(0, 0);
  }
  function finish(value) {
    setResult(value);
    setScreen("result");
    window.scrollTo(0, 0);
  }
  function openGuide() {
    setScreen("guide");
    window.scrollTo(0, 0);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { onHome: home, onGuide: openGuide, compact }),
    screen === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Home, { onStart: startActivity, onGuide: openGuide }),
    screen === "guide" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeacherGuide, { onBack: home }),
    screen === "image-word" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageWordGame, { onExit: home, onFinish: finish }, `image-word-${result?.score ?? "new"}`),
    screen === "true-false" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrueFalseGame, { onExit: home, onFinish: finish }, `true-false-${result?.score ?? "new"}`),
    screen === "knowledge-quiz" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnowledgeQuiz, { onExit: home, onFinish: finish }, `knowledge-quiz-${result?.score ?? "new"}`),
    screen === "sequence" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SequenceGame, { onExit: home, onFinish: finish }, `sequence-${result?.attempts ?? "new"}`),
    screen === "memory" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemoryGame, { onExit: home, onFinish: finish }, `memory-${result?.moves ?? "new"}`),
    screen === "result" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, { result, onAgain: () => setScreen(result.type), onActivities: home, onHome: home }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "footer-brand", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "img",
        {
          className: "footer-logo",
          src: "imagens/logo-kit-sorriso-bilingue.png",
          alt: "Kit Sorriso Bilingue \u2014 LGP\u2013Portugu\xEAs"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "footer-guide-link", onClick: openGuide, children: "Guia do Professor" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Recurso pedag\xF3gico bilingue LGP\u2013portugu\xEAs \xB7 Medicina Dent\xE1ria e sa\xFAde oral" })
    ] })
  ] });
}
