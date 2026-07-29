"use client";

import { useEffect, useMemo, useState } from "react";
import { themes, trueFalseStatements } from "./data";

const allItems = themes.flatMap((theme) => theme.items);
const allCards = themes.flatMap((theme, themeIdx) =>
  theme.items.map((item, itemIdx) => ({
    ...item,
    themeId: theme.id,
    themeTitle: theme.title,
    themeNumber: theme.number,
    themeColor: theme.color,
    themeLight: theme.light,
    cardNumberInTheme: itemIdx + 1,
    globalCardNumber: themeIdx * 6 + itemIdx + 1,
  }))
);
const allTrueFalseStatements = Object.values(trueFalseStatements).flat();
const gameColors = { color: "#079eb3", light: "#dff8fb" };

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function ToothMark({ small = false }) {
  return (
    <span className={small ? "tooth-mark small" : "tooth-mark"} aria-hidden="true">
      <svg viewBox="0 0 64 64" role="img">
        <path d="M32 8c-4.5 0-8.1-3-13.1-2.5C9.5 6.5 5 14.7 7.5 24c1.8 6.7 5.8 9.9 7 18.7C15.8 52.3 19.4 58 24 58c5 0 4.4-15.8 8-15.8S35 58 40 58c4.6 0 8.2-5.7 9.5-15.3 1.2-8.8 5.2-12 7-18.7C59 14.7 54.5 6.5 45.1 5.5 40.1 5 36.5 8 32 8Z" />
      </svg>
    </span>
  );
}

function Header({ onHome, onGuide, compact = false }) {
  return (
    <header className={compact ? "site-header compact" : "site-header"}>
      <button className="brand" onClick={onHome} aria-label="Voltar ao início">
        <img
          className="brand-logo"
          src="imagens/logo-kit-sorriso-bilingue.png"
          alt="Kit Sorriso Bilingue — LGP–Português"
        />
      </button>
      <div className="header-tags">
        <button className="guide-nav-button" onClick={onGuide}>Guia do Professor</button>
        <a className="dentlgp-brand-tag" href="index.html" title="Ir para a página principal da DentLGP" style={{ display: 'inline-flex', alignItems: 'center', background: '#ffffff', padding: '5px 14px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.4)', boxShadow: '0 4px 12px rgba(0,0,0,0.12)', textDecoration: 'none', transition: 'transform 0.2s ease' }}>
          <img src="assets/images/dentlgp/logo dentlgp.png" alt="DentLGP Principal" style={{ height: '30px', width: 'auto', objectFit: 'contain' }} />
        </a>
      </div>
    </header>
  );
}

function Home({ onStart, onGuide }) {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <a className="back-to-home-link" href="index.html" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 18px', background: '#ffffff', color: '#000000', border: '1.5px solid #000000', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', fontSize: '14px', marginTop: '-12px', marginBottom: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.12)' }}>
            <span aria-hidden="true">←</span> Voltar à DentLGP
          </a>
          <span className="eyebrow">O jogo digital do Kit Sorriso Bilingue</span>
          <h1>
            <span className="hero-w1">Aprende </span>
            <span className="hero-w2">saúde oral </span>
            <em className="hero-w3">a jogar conosco!</em>
          </h1>
          <p>Explora imagens, palavras em português e conteúdos em Língua Gestual Portuguesa através de desafios claros, visuais e divertidos.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#atividades">Começar a jogar <span aria-hidden="true">→</span></a>
            <a className="secondary-link" href="#como-jogar">Como funciona <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-notes" aria-label="Características do jogo">
            <span><b>✓</b> Visual</span><span><b>✓</b> Bilingue</span><span><b>✓</b> Interativo</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="cover-glow" aria-hidden="true" />
          <div className="cover-card">
            <img
              src="imagens/kit-sorriso-bilingue.png"
              alt="Tampa do Kit Sorriso Bilingue, com uma dentista e um aluno numa clínica dentária"
            />
            <span>O universo do kit, agora também online.</span>
          </div>
          <span className="floating-pill pill-lgp">LGP</span>
          <span className="floating-pill pill-play">JOGAR</span>
        </div>
      </section>

      <section className="quick-facts" aria-label="Conteúdos do jogo">
        <div><strong>3</strong><span>temas para explorar</span></div>
        <div><strong>18</strong><span>conceitos de saúde oral</span></div>
        <div><strong>5</strong><span>atividades online</span></div>
        <div><strong>LGP</strong><span>vídeos por conceito</span></div>
      </section>

      <section className="activities-section" id="atividades">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Do material físico ao digital</span>
            <h2>Atividades do kit e desafios digitais</h2>
          </div>
          <p>As regras do kit foram adaptadas a uma utilização online simples, visual e adequada ao trabalho individual ou acompanhado.</p>
        </div>
        <div className="activity-game-grid">
          <button className="activity-game-card orange" onClick={() => onStart("image-word")}>
            <span className="play-badge" aria-hidden="true">▶</span>
            <div className="activity-visual image-word-visual" aria-hidden="true">
              <img src="imagens/01_dentista.png" alt="" />
              <img src="imagens/08_dentes.png" alt="" />
              <span>DENTISTA</span>
            </div>
            <div className="activity-card-copy">
              <div className="activity-card-label"><b>1</b><small>ATIVIDADE DO KIT</small></div>
              <h3>Imagem–Palavra</h3>
              <p>Associa imagens e palavras em três níveis, com seis pares em cada nível.</p>
              <span className="game-cta">Jogar agora <b aria-hidden="true">→</b></span>
            </div>
          </button>

          <button className="activity-game-card red" onClick={() => onStart("true-false")}>
            <span className="play-badge" aria-hidden="true">▶</span>
            <div className="activity-visual vf-visual" aria-hidden="true">
              <span className="vf-mini true"><b>V</b><small>Verdadeiro</small></span>
              <span className="vf-mini false"><b>F</b><small>Falso</small></span>
            </div>
            <div className="activity-card-copy">
              <div className="activity-card-label"><b>2</b><small>ATIVIDADE DO KIT</small></div>
              <h3>Verdadeiro ou Falso</h3>
              <p>Lê 18 afirmações, escolhe V ou F e recebe a explicação da resposta.</p>
              <span className="game-cta">Jogar agora <b aria-hidden="true">→</b></span>
            </div>
          </button>

          <button className="activity-game-card purple" onClick={() => onStart("sequence")}>
            <span className="play-badge" aria-hidden="true">▶</span>
            <div className="activity-visual sequence-visual" aria-hidden="true">
              <img src="imagens/sequencia/01-falar-rececionista.png" alt="" />
              <span><b>1</b><b>2</b><b>3</b><b>4</b></span>
            </div>
            <div className="activity-card-copy">
              <div className="activity-card-label"><b>3</b><small>ATIVIDADE DO KIT</small></div>
              <h3>Sequência da Consulta</h3>
              <p>Organiza quatro etapas pela ordem correta de uma consulta dentária.</p>
              <span className="game-cta">Jogar agora <b aria-hidden="true">→</b></span>
            </div>
          </button>

          <button className="activity-game-card teal" onClick={() => onStart("knowledge-quiz")}>
            <span className="play-badge" aria-hidden="true">▶</span>
            <div className="activity-visual quiz-visual" aria-hidden="true">
              <img src="assets/images/pedro-lgp - Copy.png" alt="" />
            </div>
            <div className="activity-card-copy">
              <h3>Cartões de Aprendizagem</h3>
              <p>Explora os 18 cartões com imagem, definição, frase de exemplo e vídeo em LGP.</p>
              <span className="game-cta">Explorar Cartões <b aria-hidden="true">→</b></span>
            </div>
          </button>

          <button className="activity-game-card blue online" onClick={() => onStart("memory")}>
            <span className="play-badge" aria-hidden="true">▶</span>
            <div className="activity-visual memory-visual" aria-hidden="true">
              <img src="imagens/13_escova_dentes.png" alt="" />
              <img src="imagens/13_escova_dentes.png" alt="" />
              <span>PAR!</span>
            </div>
            <div className="activity-card-copy">
              <div className="activity-card-label"><b>+</b><small>EXCLUSIVO - ONLINE</small></div>
              <h3>Jogo de Memória</h3>
              <p>Vira os cartões e encontra os pares formados por duas imagens iguais.</p>
              <span className="game-cta">Começar o jogo <b aria-hidden="true">→</b></span>
            </div>
          </button>
        </div>
        <div className="teacher-callout">
          <div className="teacher-callout-icon" aria-hidden="true">▤</div>
          <div>
            <small>ÁREA DO PROFESSOR</small>
            <h3>Objetivos, preparação, acessibilidade e propostas de exploração</h3>
            <p>O guia acompanha a utilização dos cartões físicos e das atividades digitais.</p>
          </div>
          <button className="primary-button" onClick={onGuide}>Consultar o guia <span aria-hidden="true">→</span></button>
        </div>
      </section>

      <section className="how-section" id="como-jogar">
        <div className="how-heading">
          <span className="eyebrow light">Aprender passo a passo</span>
          <h2>Jogar é simples</h2>
          <p>O mesmo vocabulário é apresentado de forma visual, escrita e gestual.</p>
        </div>
        <div className="how-steps">
          <article><span>1</span><p><strong>Escolhe</strong>uma das atividades disponíveis.</p></article>
          <article><span>2</span><p><strong>Observa</strong>as imagens, palavras ou afirmações.</p></article>
          <article><span>3</span><p><strong>Aprende</strong>com imagens, palavras e vídeos em LGP.</p></article>
        </div>
      </section>

      <section className="learning-section">
        <div className="learning-image">
          <img src="imagens/17_escovar_dentes.png" alt="Criança a escovar os dentes" />
          <span>SAÚDE ORAL</span>
        </div>
        <div className="learning-copy">
          <span className="eyebrow">Um recurso pedagógico bilingue</span>
          <h2>Ver, ler e aprender<br />em LGP</h2>
          <p>O DentLGP complementa os cartões físicos do Kit Sorriso Bilingue e permite trabalhar o vocabulário de forma autónoma, a pares ou com acompanhamento do professor.</p>
          <div className="learning-list">
            <div><b aria-hidden="true">▣</b><span><strong>Imagem</strong>Identificação visual do conceito</span></div>
            <div><b aria-hidden="true">Aa</b><span><strong>Português</strong>Palavra e frase de exemplo</span></div>
          </div>
        </div>
      </section>
      <button
        className="scroll-to-top-fab"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title="Voltar ao início"
        aria-label="Voltar ao início"
      >
        ↑
      </button>
    </main>
  );
}

function TeacherGuide({ onBack }) {
  const objectives = [
    "Reconhecer 18 conceitos essenciais de saúde oral.",
    "Relacionar imagem, palavra escrita e vídeo em LGP.",
    "Distinguir funções, espaços, partes da boca e cuidados de higiene.",
    "Compreender a sequência básica de uma consulta dentária.",
    "Usar o vocabulário aprendido em pequenas explicações e situações do quotidiano.",
  ];
  const preparation = [
    "Selecionar um tema adequado aos conhecimentos do grupo.",
    "Testar previamente o acesso aos vídeos em LGP.",
    "Garantir boa iluminação e contacto visual antes de cada explicação.",
    "Apresentar uma informação de cada vez e dar tempo para observar.",
    "Respeitar a variedade e esclarecer variantes da LGP.",
  ];
  const activities = [
    {
      number: "1",
      className: "orange",
      title: "Imagem–Palavra",
      objective: "Associar cada imagem à palavra escrita correspondente.",
      adaptations: "Nível inicial: 3 pares. Nível intermédio: 1 tema. Nível avançado: os 3 temas.",
    },
    {
      number: "2",
      className: "red",
      title: "Verdadeiro ou Falso",
      objective: "Verificar a compreensão dos conteúdos de saúde oral.",
      adaptations: "Pedir a justificação da escolha e retomar os conceitos que necessitam de apoio.",
    },
    {
      number: "3",
      className: "purple",
      title: "Sequência da Consulta",
      objective: "Compreender a ordem das etapas de uma consulta dentária.",
      adaptations: "Complementar com uma dramatização dos papéis de rececionista, paciente e dentista.",
    },
  ];

  return (
    <main className="teacher-guide-page">
      <section className="guide-hero">
        <button className="back-button light-back" onClick={onBack}>← Voltar ao jogo</button>
        <div className="guide-hero-copy">
          <span className="guide-kicker">KIT SORRISO BILINGUE · LGP–PORTUGUÊS</span>
          <h1>Guia do Professor</h1>
          <p>Orientações para explorar os conteúdos de saúde oral com alunos Surdos do 1.º Ciclo, através dos cartões físicos e das atividades digitais.</p>
          <div className="guide-downloads">
            <a className="primary-button" href="assets/Guia_do_Professor_A5.pdf" target="_blank" rel="noreferrer">Abrir o guia em PDF</a>
          </div>
        </div>
        <div className="guide-hero-mark" style={{ width: '240px', height: '320px', padding: '8px', background: '#ffffff', borderRadius: '18px', boxShadow: '0 20px 45px rgba(0,0,0,0.3)', transform: 'rotate(2deg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="assets/images/capa guia do professor.png" alt="Capa Guia do Professor" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
        </div>
      </section>

      <section className="guide-content">
        <nav className="guide-index" aria-label="Conteúdos do guia">
          <a href="#apresentacao">Apresentação</a>
          <a href="#objetivos">Objetivos</a>
          <a href="#preparacao">Acessibilidade</a>
          <a href="#guia-atividades">Atividades</a>
          <a href="#observacao">Observação</a>
        </nav>

        <section className="guide-intro-grid" id="apresentacao">
          <article className="guide-panel">
            <span className="guide-section-number">01</span>
            <h2>Apresentação</h2>
            <p>O Kit Sorriso Bilingue é um recurso educativo em Língua Gestual Portuguesa e português escrito. Apoia a aprendizagem de vocabulário e de procedimentos básicos relacionados com a saúde oral e a consulta dentária.</p>
            <p>As imagens, as palavras escritas, os vídeos em LGP e as atividades permitem trabalhar o mesmo conceito por diferentes vias visuais.</p>
          </article>
          <article className="guide-panel principles-panel">
            <span className="guide-section-number">02</span>
            <h2>Princípios do recurso</h2>
            <ul>
              <li>A LGP e o português apresentam funções complementares.</li>
              <li>A informação visual é clara e organizada por temas.</li>
              <li>O aluno pode observar, associar, ordenar, responder e explicar.</li>
              <li>O ritmo e o grau de apoio adaptam-se ao grupo.</li>
            </ul>
          </article>
        </section>

        <section className="guide-split-section" id="objetivos">
          <div>
            <span className="eyebrow">Público-alvo e objetivos</span>
            <h2>Aprender com diferentes níveis de apoio</h2>
            <p style={{ color: "#000000", fontWeight: "600", opacity: 1 }}>Destina-se principalmente a alunos Surdos do 1.º Ciclo. Pode também apoiar turmas bilingues, famílias, docentes, intérpretes de LGP e ações de literacia em saúde oral.</p>
          </div>
          <ul className="check-list plain-list">{objectives.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="guide-themes">
          <div className="guide-section-heading">
            <span className="eyebrow">18 conceitos</span>
            <h2>Três temas de saúde oral</h2>
          </div>
          <div className="guide-theme-grid">
            {themes.map((theme) => (
              <article key={theme.id} style={{ "--theme": theme.color, "--theme-light": theme.light }}>
                <span>TEMA {theme.number}</span>
                <h3>{theme.title}</h3>
                <p>{theme.items.map((item) => item.word).join(" · ")}</p>
              </article>
            ))}
          </div>
          <div className="card-exploration">
            <strong>Como explorar um cartão</strong>
            <ol>
              <li>Observar a imagem e identificar o que já é conhecido.</li>
              <li>Ler a palavra em português e relacioná-la com a imagem.</li>
              <li>Ver o vídeo em LGP associado ao conceito.</li>
              <li>Utilizar o conceito numa frase ou numa situação prática.</li>
            </ol>
          </div>
        </section>

        <section className="accessibility-section" id="preparacao">
          <div className="accessibility-visual">
            <img src="imagens/02_assistente.png" alt="Assistente dentária numa clínica" />
            <span>COMUNICAÇÃO ACESSÍVEL</span>
          </div>
          <div>
            <span className="eyebrow">Preparação e acessibilidade</span>
            <h2>Antes de começar</h2>
            <ul className="check-list compact-list">{preparation.map((item) => <li key={item}>{item}</li>)}</ul>
            <p className="guide-note" style={{ color: "#000000", fontWeight: "600", opacity: 1 }}>Evite falar ou produzir LGP enquanto o aluno observa outro suporte. Organize o espaço para que todos vejam as mãos, o rosto e os materiais.</p>
          </div>
        </section>

        <section className="guide-activities" id="guia-atividades">
          <div className="guide-section-heading">
            <span className="eyebrow">Orientações de utilização</span>
            <h2>As três atividades</h2>
          </div>
          <div className="guide-activity-grid">
            {activities.map((activity) => (
              <article className={activity.className} key={activity.number}>
                <span>{activity.number}</span>
                <small>ATIVIDADE</small>
                <h3>{activity.title}</h3>
                <p>{activity.objective}</p>
                <b>{activity.adaptations}</b>
              </article>
            ))}
          </div>
          <div className="guide-digital-extras">
            <article>
              <h3>Cartões de Aprendizagem</h3>
              <p>Versão digital interativa dos 18 cartões com imagem, definição, frase de exemplo e vídeo em Língua Gestual Portuguesa (LGP).</p>
            </article>
            <article>
              <small>EXCLUSIVO - ONLINE</small>
              <h3>Jogo de Memória</h3>
              <p>O aluno vira dois cartões de cada vez e procura os pares formados por duas imagens iguais.</p>
            </article>
          </div>
        </section>

        <section className="observation-section" id="observacao">
          <div>
            <span className="eyebrow">Acompanhamento pedagógico</span>
            <h2>Grelha de observação</h2>
            <p style={{ color: "#000000", fontWeight: "600", opacity: 1 }}>O professor pode registar o grau de autonomia demonstrado em cada aspeto.</p>
          </div>
          <div className="observation-table" role="table" aria-label="Grelha de observação">
            <div className="observation-row header" role="row"><span>Aspeto</span><b>Sim</b><b>Com apoio</b><b>Ainda não</b></div>
            {["Reconhece a imagem", "Associa a palavra", "Compreende o vídeo em LGP", "Aplica o conceito"].map((item) => (
              <div className="observation-row" role="row" key={item}><span>{item}</span><i /><i /><i /></div>
            ))}
          </div>
        </section>

        <p className="health-disclaimer">Este recurso é educativo e não substitui a avaliação nem as recomendações de um profissional de saúde oral.</p>
      </section>
      <button
        type="button"
        className="scroll-to-top-fab"
        onClick={() => {
          const hero = document.querySelector(".guide-hero") || document.querySelector(".teacher-guide-page");
          if (hero) {
            hero.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        title="Voltar ao topo"
        aria-label="Voltar ao topo"
      >
        ↑
      </button>
    </main>
  );
}

function Progress({ current, total, label }) {
  return (
    <div className="progress-wrap">
      <div className="progress-label"><span>{label}</span><b>{current} / {total}</b></div>
      <div className="progress-track"><i style={{ width: `${Math.min(100, (current / total) * 100)}%` }} /></div>
    </div>
  );
}

function ImageWordGame({ onExit, onFinish }) {
  const [levelDecks] = useState(() => [0, 1, 2].map((index) => {
    const items = allItems.slice(index * 6, index * 6 + 6);
    return { images: shuffle(items), words: shuffle(items) };
  }));
  const [levelIndex, setLevelIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [matched, setMatched] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [showLgp, setShowLgp] = useState(false);
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
      setFeedback({ type: "hint", message: "Seleciona primeiro um cartão de imagem." });
      return;
    }
    setAttempts((value) => value + 1);
    if (item.id === selectedImage) {
      setMatched((values) => [...values, item.id]);
      setFeedback({ type: "correct", item });
      setSelectedImage(null);
      return;
    }
    setFeedback({ type: "wrong", message: "Ainda não corresponde. Observa a imagem e tenta outra palavra." });
  }

  function nextLevel() {
    if (!levelComplete || levelIndex >= 2) return;
    setLevelIndex((value) => value + 1);
    setSelectedImage(null);
    setFeedback(null);
    setShowLgp(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="game-shell match-page" style={{ "--theme": gameColors.color, "--theme-light": gameColors.light }}>
      <div className="game-topbar">
        <button className="back-button" onClick={onExit}>× Sair do jogo</button>
        <span className="score-chip">Tentativas <b>{attempts}</b></span>
      </div>
      <Progress current={matched.length} total={allItems.length} label="Progresso total" />
      <div className="match-heading">
        <span className="theme-pill">Nível {levelIndex + 1} de 3 · 6 pares</span>
        <h1>Forma os pares Imagem–Palavra</h1>
        <p>Seleciona uma imagem e, depois, a palavra correspondente.</p>
      </div>
      <section className="matching-board">
        <div className="matching-column image-cards-column">
          <small>1. ESCOLHE UMA IMAGEM</small>
          <div className="matching-card-grid">
            {imageCards.map((item) => {
              const isMatched = matched.includes(item.id);
              return (
                <button
                  className={`picture-match-card ${selectedImage === item.id ? "selected" : ""} ${isMatched ? "matched" : ""}`}
                  key={item.id}
                  onClick={() => chooseImage(item)}
                  aria-pressed={selectedImage === item.id}
                  disabled={isMatched}
                >
                  <img src={item.image} alt={`Imagem: ${item.word}`} />
                  {isMatched && <span>✓</span>}
                </button>
              );
            })}
          </div>
        </div>
        <div className="matching-column word-cards-column">
          <small>2. ESCOLHE A PALAVRA</small>
          <div className="word-match-list">
            {wordCards.map((item) => {
              const isMatched = matched.includes(item.id);
              return (
                <button
                  className={isMatched ? "matched" : ""}
                  key={item.id}
                  onClick={() => chooseWord(item)}
                  disabled={isMatched}
                >
                  <span>{item.word}</span>
                  {isMatched && <b>✓</b>}
                </button>
              );
            })}
          </div>
          {levelComplete && (
            <div className="level-advance-panel" role="status">
              <span>✓</span>
              <div>
                <strong>{complete ? "Concluíste os três níveis!" : `Nível ${levelIndex + 1} concluído!`}</strong>
                <small>{complete ? "Os 18 pares estão corretos." : "Os seis pares estão corretos."}</small>
              </div>
              <button
                onClick={complete
                  ? () => onFinish({ type: "image-word", score: matched.length, total: allItems.length, attempts })
                  : nextLevel}
              >
                {complete ? "Concluir atividade" : "Próximo nível"} <b aria-hidden="true">→</b>
              </button>
            </div>
          )}
        </div>
      </section>

      <div className={`match-feedback ${feedback?.type ?? ""}`} role="status">
        {!feedback && (
          <p>{selectedItem ? `Imagem selecionada: ${selectedItem.word}. Agora escolhe a palavra.` : "Começa por selecionar um cartão de imagem."}</p>
        )}
        {feedback?.type === "hint" && <p>{feedback.message}</p>}
        {feedback?.type === "wrong" && <p>{feedback.message}</p>}
        {feedback?.type === "correct" && (
          <>
            <div>
              <strong>Muito bem! Formaste o par «{feedback.item.word}».</strong>
              <p>{feedback.item.definition}</p>
              <small>Frase de exemplo: {feedback.item.sentence}</small>
            </div>
            <button className="lgp-button" onClick={() => setShowLgp(true)}>LGP <span>▶</span></button>
          </>
        )}
      </div>

      {showLgp && feedback?.item && <LgpModal word={feedback.item.word} onClose={() => setShowLgp(false)} />}
    </main>
  );
}

function TrueFalseGame({ onExit, onFinish }) {
  const [questions] = useState(() => shuffle(allTrueFalseStatements));
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
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
        total: questions.length,
      });
      return;
    }
    setCurrent((value) => value + 1);
    setSelected(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="true-false-game-page" style={{ "--theme": gameColors.color, "--theme-light": gameColors.light }}>
      <div className="game-topbar">
        <button className="back-button" onClick={onExit}>× Sair do jogo</button>
        <span className="score-chip vf-score-chip">Pontos <b>{score}</b></span>
      </div>
      <Progress current={current + (selected !== null ? 1 : 0)} total={questions.length} label="Afirmações respondidas" />
      <div className="true-false-heading">
        <span className="vf-pill">ATIVIDADE 2 · 18 afirmações</span>
        <h1>Verdadeiro ou Falso?</h1>
        <p>Lê a afirmação e escolhe o cartão correto.</p>
      </div>

      <section className="true-false-board">
        <article className="statement-card">
          <span>{current + 1}</span>
          <small>AFIRMAÇÃO</small>
          <h2>{question.statement}</h2>
        </article>
        <div className="vf-answer-grid" aria-label="Escolhe verdadeiro ou falso">
          <button
            className={`${selected === true ? "selected" : ""} ${selected !== null && question.answer === true ? "correct" : ""}`}
            onClick={() => answer(true)}
            disabled={selected !== null}
            aria-label="Verdadeiro"
          >
            <span>V</span>
            <strong>Verdadeiro</strong>
          </button>
          <button
            className={`${selected === false ? "selected" : ""} ${selected !== null && question.answer === false ? "correct" : ""}`}
            onClick={() => answer(false)}
            disabled={selected !== null}
            aria-label="Falso"
          >
            <span>F</span>
            <strong>Falso</strong>
          </button>
        </div>
      </section>

      {selected !== null && (
        <div className={`answer-feedback ${isCorrect ? "correct" : "wrong"}`} role="status">
          <div>
            <strong>{isCorrect ? "Resposta correta!" : `A resposta correta é ${question.answer ? "Verdadeiro" : "Falso"}.`}</strong>
            <p>{question.explanation}</p>
          </div>
          <button onClick={next}>{finished ? "Ver resultado" : "Próxima afirmação"} →</button>
        </div>
      )}
    </main>
  );
}

function NativeLgpVideoPlayer({ src, themeColor }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsPlaying(false);
    setHasStarted(false);
    if (videoRef.current) {
      videoRef.current.pause();
      try {
        videoRef.current.currentTime = 0;
      } catch (e) {}
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
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setHasStarted(false);
    if (videoRef.current) {
      try {
        videoRef.current.currentTime = 0;
      } catch (err) {}
    }
  };

  return (
    <div
      className="lgp-video-player"
      style={{ position: "relative", overflow: "hidden", borderRadius: "14px", cursor: "pointer" }}
      onClick={handleTogglePlay}
    >
      <video
        ref={videoRef}
        key={src}
        src={src}
        onEnded={handleEnded}
        muted
        playsInline
        preload="auto"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          backgroundColor: "#100a1c",
          borderRadius: "14px",
          display: "block",
          pointerEvents: "none"
        }}
      />
      {!isPlaying && (
        <div className="lgp-video-play-overlay" onClick={handleTogglePlay}>
          <div className="lgp-video-play-btn" style={{ backgroundColor: themeColor || "var(--theme, #079eb3)" }}>
            ▶
          </div>
          <span className="lgp-video-play-text">
            {hasStarted ? "Clique para continuar a ver" : "Ver vídeo em LGP"}
          </span>
        </div>
      )}
    </div>
  );
}

function KnowledgeQuiz({ onExit, onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLgp, setShowLgp] = useState(false);

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

  return (
    <main className="learning-cards-page" style={{ "--theme": currentCard.themeColor, "--theme-light": currentCard.themeLight }}>
      <div className="game-topbar">
        <button className="back-button" onClick={onExit}>× Voltar ao menu</button>
      </div>

      <div className="learning-heading">
        <span className="knowledge-pill">VERSÃO DIGITAL DOS CARTÕES · CARTÃO {currentCard.globalCardNumber} DE {allCards.length}</span>
        <h1>Cartões de Aprendizagem</h1>
      </div>

      <div className="learning-workspace">
        <div className="learning-card-container">
          <div className="learning-card-a6">
            <div className="card-a6-header">
              <h2 className="card-word-title">{currentCard.word}</h2>
              <span className="card-number-badge">{currentCard.globalCardNumber}</span>
            </div>

            <div className="card-a6-image-box">
              <img src={currentCard.image} alt={currentCard.word} />
            </div>

            <div className="card-a6-content">
              <div className="card-section">
                <h3>O que é?</h3>
                <p>{currentCard.definition}</p>
              </div>

              <div className="card-section">
                <h3>Frase de exemplo:</h3>
                <p className="card-example-sentence">{currentCard.sentence}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lgp-video-card">
          <div className="lgp-video-header">
            <span className="lgp-video-badge">▶ VÍDEO EM LGP</span>
            <h3>{currentCard.word}</h3>
          </div>
          {currentCard.video ? (
            <NativeLgpVideoPlayer src={currentCard.video} themeColor={currentCard.themeColor} />
          ) : (
            <div className="lgp-video-player" style={{ position: "relative" }}>
              {currentCard.youtubeId ? (
                <>
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${currentCard.youtubeId}?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=${currentCard.youtubeId}&controls=0&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1&rel=0&playsinline=1&fs=0`}
                    title={`Vídeo em LGP: ${currentCard.word}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: "100%", height: "100%", border: 0, borderRadius: "14px", pointerEvents: "none" }}
                  />
                  <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 10, background: "transparent", pointerEvents: "auto" }} />
                </>
              ) : (
                <div className="lgp-video-screen">
                  <span className="play-icon-large">▶</span>
                  <p>Língua Gestual Portuguesa</p>
                </div>
              )}
            </div>
          )}
          <p className="lgp-video-note">Demonstração do gesto em Língua Gestual Portuguesa correspondente a «{currentCard.word}».</p>
        </div>
      </div>

      <div className="card-pagination-grid">
        {allCards.map((card, idx) => (
          <button
            key={card.id}
            className={`card-nav-dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => {
              setCurrentIndex(idx);
              setShowLgp(false);
              scrollToTop();
            }}
            title={`${card.globalCardNumber}. ${card.word}`}
          >
            {card.globalCardNumber}
          </button>
        ))}
      </div>

      <div className="learning-controls">
        <button className="secondary-button" onClick={prevCard} disabled={currentIndex === 0}>
          <span className="btn-label-desktop">← Cartão anterior</span>
          <span className="btn-label-mobile">
            <span className="btn-word">Anterior</span>
            <span className="btn-arrow">←</span>
          </span>
        </button>

        <button className="primary-button" onClick={nextCard}>
          {currentIndex < allCards.length - 1 ? (
            <>
              <span className="btn-label-desktop">Próximo cartão →</span>
              <span className="btn-label-mobile">
                <span className="btn-word">Próximo</span>
                <span className="btn-arrow">→</span>
              </span>
            </>
          ) : (
            "Concluir cartões ✓"
          )}
        </button>
      </div>
    </main>
  );
}

const sequenceCards = [
  { id: "rececionista", label: "Falar com a rececionista", image: "imagens/06_rececionista.png" },
  { id: "espera", label: "Esperar na sala de espera", image: "imagens/05_sala_espera.png" },
  { id: "consultorio", label: "Entrar no consultório", image: "imagens/04_consultorio.png" },
  { id: "consulta", label: "Realizar a consulta", image: "imagens/18_consulta_rotina.png" },
];

function SequenceGame({ onExit, onFinish }) {
  const [cards] = useState(() => shuffle(sequenceCards));
  const [ordered, setOrdered] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState(null);
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
    setFeedback(correct
      ? { type: "correct", message: "Muito bem! Organizaste corretamente as quatro etapas da consulta." }
      : { type: "wrong", message: "A sequência ainda não está correta. Revê a ordem e tenta novamente." });
  }

  function resetSequence() {
    setOrdered([]);
    setFeedback(null);
  }

  return (
    <main className="sequence-game-page">
      <div className="game-topbar">
        <button className="back-button" onClick={onExit}>× Sair do jogo</button>
        <span className="score-chip sequence-chip">Tentativas <b>{attempts}</b></span>
      </div>
      <Progress current={ordered.length} total={sequenceCards.length} label="Etapas organizadas" />
      <div className="sequence-heading">
        <span className="sequence-pill">ATIVIDADE 3</span>
        <h1>Sequência da Consulta</h1>
        <p>Seleciona os cartões pela ordem em que os acontecimentos ocorrem.</p>
      </div>

      <section className="sequence-game-board">
        <div className="sequence-source">
          <small>CARTÕES DISPONÍVEIS</small>
          <div className="sequence-source-grid">
            {cards.map((card) => {
              const used = ordered.some((item) => item.id === card.id);
              return (
                <button key={card.id} className={used ? "used" : ""} onClick={() => addCard(card)} disabled={used}>
                  <img src={card.image} alt={card.label} />
                  <strong className="sequence-card-label">{card.label}</strong>
                </button>
              );
            })}
          </div>
        </div>

        <div className="sequence-answer">
          <small>A TUA SEQUÊNCIA</small>
          <div className="sequence-slots">
            {[0, 1, 2, 3].map((index) => {
              const card = ordered[index];
              return (
                <div className={card ? "filled" : ""} key={index}>
                  <span className="slot-number">{index + 1}</span>
                  {card ? (
                    <button onClick={() => removeCard(card)} aria-label={`Retirar ${card.label}`}>
                      <img src={card.image} alt={card.label} />
                      <strong className="sequence-card-label">{card.label}</strong>
                      <i>×</i>
                    </button>
                  ) : <p>Seleciona um cartão</p>}
                </div>
              );
            })}
          </div>
          <div className="sequence-actions">
            <button className="secondary-button" onClick={resetSequence} disabled={ordered.length === 0 || feedback?.type === "correct"}>Recomeçar</button>
            <button className="sequence-check-button" onClick={checkSequence} disabled={!complete || feedback?.type === "correct"}>Confirmar a sequência</button>
          </div>
        </div>
      </section>

      {feedback && (
        <div className={`sequence-feedback ${feedback.type}`} role="status">
          <strong>{feedback.type === "correct" ? "Sequência correta!" : "Vamos tentar novamente."}</strong>
          <p>{feedback.message}</p>
          {feedback.type === "correct" && (
            <button onClick={() => onFinish({ type: "sequence", score: 4, total: 4, attempts })}>Ver resultado →</button>
          )}
        </div>
      )}
    </main>
  );
}

function LgpModal({ word, onClose }) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`Vídeo em LGP: ${word}`}>
      <div className="lgp-modal">
        <button className="modal-close" onClick={onClose} aria-label="Fechar">×</button>
        <span className="video-placeholder"><i>▶</i></span>
        <small>VÍDEO EM LGP</small>
        <h2>{word}</h2>
        <p>Este espaço está preparado para receber o vídeo em LGP após gravação e validação por uma pessoa Surda fluente.</p>
        <button className="primary-button" onClick={onClose}>Compreendi</button>
      </div>
    </div>
  );
}

function MemoryGame({ onExit, onFinish }) {
  const levelConfigs = [
    { level: 1, name: "Nível 1 - Fácil", pairs: 6, label: "6 pares · 12 cartões" },
    { level: 2, name: "Nível 2 - Médio", pairs: 6, label: "6 pares · 12 cartões" },
    { level: 3, name: "Nível 3 - Desafio", pairs: 6, label: "6 pares · 12 cartões" },
  ];

  const [currentLevelIdx, setCurrentLevelIdx] = useState(0);
  const [accumulatedMoves, setAccumulatedMoves] = useState(0);
  const [levelSuccess, setLevelSuccess] = useState(false);

  const currentConfig = levelConfigs[currentLevelIdx];

  function selectUniqueMemoryItems(count) {
    const seen = new Set();
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

  const [cards, setCards] = useState(() => {
    const items = selectUniqueMemoryItems(currentConfig.pairs);
    return shuffle(items.flatMap((item) => [
      { key: `${item.id}-a`, pair: item.id, item },
      { key: `${item.id}-b`, pair: item.id, item },
    ]));
  });

  const [open, setOpen] = useState([]);
  const [matched, setMatched] = useState([]);
  const [levelMoves, setLevelMoves] = useState(0);
  const [locked, setLocked] = useState(false);

  function startLevel(idx, totalMovesSoFar) {
    const config = levelConfigs[idx];
    const items = selectUniqueMemoryItems(config.pairs);
    setCards(shuffle(items.flatMap((item) => [
      { key: `${item.id}-a`, pair: item.id, item },
      { key: `${item.id}-b`, pair: item.id, item },
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

  useEffect(() => {
    if (open.length !== 2) return undefined;
    const [first, second] = open.map((key) => cards.find((card) => card.key === key));
    const isMatch = first.pair === second.pair;
    const timer = setTimeout(() => {
      if (isMatch) setMatched((values) => [...values, first.pair]);
      setOpen([]);
      setLocked(false);
    }, isMatch ? 600 : 950);
    return () => clearTimeout(timer);
  }, [open, cards]);

  useEffect(() => {
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
    return undefined;
  }, [matched, currentConfig, currentLevelIdx, accumulatedMoves, levelMoves, onFinish, cards]);

  function turn(card) {
    if (locked || open.includes(card.key) || matched.includes(card.pair) || levelSuccess) return;
    if (open.length === 0) setLevelMoves((value) => value + 1);
    if (open.length === 1) setLocked(true);
    setOpen((values) => [...values, card.key]);
  }

  const totalMoves = accumulatedMoves + levelMoves;

  return (
    <main className="game-shell memory-page" style={{ "--theme": gameColors.color, "--theme-light": gameColors.light }}>
      <div className="game-topbar">
        <button className="back-button" onClick={onExit}>× Sair do jogo</button>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <span className="score-chip">Nível <b>{currentConfig.level}/3</b></span>
          <span className="score-chip">Jogadas <b>{totalMoves}</b></span>
        </div>
      </div>
      <Progress current={matched.length} total={currentConfig.pairs} label={`Nível ${currentConfig.level} · Pares encontrados`} />
      <div className="memory-heading">
        <span className="theme-pill">NÍVEL {currentConfig.level} DE 3 · {currentConfig.label}</span>
        <h1>Encontra as duas imagens iguais</h1>
      </div>
      {levelSuccess && (
        <div className="level-toast" style={{ margin: "0 auto 16px", padding: "12px 24px", background: "#4caf50", color: "#fff", borderRadius: "12px", fontWeight: "bold", textAlign: "center", maxWidth: "400px" }}>
          🎉 Nível {currentConfig.level} Concluído! {currentLevelIdx < 2 ? "A preparar o próximo nível..." : "Parabéns!"}
        </div>
      )}
      <section className={`memory-grid level-${currentConfig.level}`}>
        {cards.map((card) => {
          const visible = open.includes(card.key) || matched.includes(card.pair);
          return (
            <button
              key={card.key}
              className={`memory-card ${visible ? "visible" : ""} ${matched.includes(card.pair) ? "matched" : ""}`}
              onClick={() => turn(card)}
              aria-label={visible ? card.item.word : "Cartão por virar"}
            >
              <span className="memory-inner">
                <span className="memory-back"><ToothMark /></span>
                <span className="memory-front image">
                  <img src={card.item.image} alt={card.item.word} />
                  {matched.includes(card.pair) && <i>✓</i>}
                </span>
              </span>
            </button>
          );
        })}
      </section>
      <p className="memory-tip">Vira dois cartões de cada vez e encontra as imagens iguais.</p>
    </main>
  );
}

function Result({ result, onAgain, onActivities, onHome }) {
  const isImageWord = result.type === "image-word";
  const isKnowledgeQuiz = result.type === "knowledge-quiz";
  const isTrueFalse = result.type === "true-false";
  const isSequence = result.type === "sequence";
  const isScoredActivity = isKnowledgeQuiz || isTrueFalse;
  const excellent = isImageWord
    ? result.attempts <= 22
    : isSequence
      ? result.attempts <= 2
      : isScoredActivity
        ? result.score >= 15
        : result.moves <= 26;
  return (
    <main
      className="result-page"
      style={{
        "--theme": isSequence ? "#7653a7" : gameColors.color,
        "--theme-light": isSequence ? "#f1ebfb" : gameColors.light,
      }}
    >
      <div className="result-card">
        <div className="confetti" aria-hidden="true"><i>●</i><b>✦</b><i>▲</i><b>●</b><i>✦</i></div>
        <span className="result-icon">✓</span>
        <small>ATIVIDADE CONCLUÍDA</small>
        <h1>{excellent ? "Excelente trabalho!" : "Muito bem!"}</h1>
        <p>
          {isSequence
            ? "Organizaste as quatro etapas da consulta dentária."
            : isKnowledgeQuiz
              ? "Exploraste todos os 18 cartões de aprendizagem de saúde oral."
              : "Terminaste esta atividade de saúde oral."}
        </p>
        <div className="result-score">
          {isImageWord && <><strong>{result.score}<small> / {result.total}</small></strong><span>pares formados</span></>}
          {isKnowledgeQuiz && <><strong>{result.total}<small> / {result.total}</small></strong><span>cartões explorados</span></>}
          {isTrueFalse && <><strong>{result.score}<small> / {result.total}</small></strong><span>respostas corretas</span></>}
          {isSequence && <><strong>4<small> / 4</small></strong><span>etapas ordenadas</span></>}
          {!isImageWord && !isKnowledgeQuiz && !isTrueFalse && !isSequence && <><strong>{result.moves}</strong><span>jogadas</span></>}
        </div>
        <div className="result-actions">
          <button className="primary-button" onClick={onAgain}>Jogar novamente</button>
          <button className="secondary-button" onClick={onActivities}>Escolher outra atividade</button>
        </div>
        <button className="text-button" onClick={onHome}>Voltar ao início</button>
      </div>
    </main>
  );
}

export default function Page() {
  const [screen, setScreen] = useState("home");
  const [result, setResult] = useState(null);

  useEffect(() => {
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

  const compact = useMemo(() => screen !== "home", [screen]);

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

  return (
    <>
      <Header onHome={home} onGuide={openGuide} compact={compact} />
      {screen === "home" && <Home onStart={startActivity} onGuide={openGuide} />}
      {screen === "guide" && <TeacherGuide onBack={home} />}
      {screen === "image-word" && <ImageWordGame key={`image-word-${result?.score ?? "new"}`} onExit={home} onFinish={finish} />}
      {screen === "true-false" && <TrueFalseGame key={`true-false-${result?.score ?? "new"}`} onExit={home} onFinish={finish} />}
      {screen === "knowledge-quiz" && <KnowledgeQuiz key={`knowledge-quiz-${result?.score ?? "new"}`} onExit={home} onFinish={finish} />}
      {screen === "sequence" && <SequenceGame key={`sequence-${result?.attempts ?? "new"}`} onExit={home} onFinish={finish} />}
      {screen === "memory" && <MemoryGame key={`memory-${result?.moves ?? "new"}`} onExit={home} onFinish={finish} />}
      {screen === "result" && <Result result={result} onAgain={() => setScreen(result.type)} onActivities={home} onHome={home} />}
      <footer>
        <div className="footer-brand">
          <img
            className="footer-logo"
            src="imagens/logo-kit-sorriso-bilingue.png"
            alt="Kit Sorriso Bilingue — LGP–Português"
          />
        </div>
        <button className="footer-guide-link" onClick={openGuide}>Guia do Professor</button>
        <p>Recurso pedagógico bilingue LGP–português · Medicina Dentária e saúde oral</p>
      </footer>
    </>
  );
}
