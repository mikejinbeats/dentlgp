"use client";

import { useEffect, useMemo, useState } from "react";
import { themes, trueFalseStatements } from "./data";

const allItems = themes.flatMap((theme) => theme.items);
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
        <span className="bilingual-tag"><i /> LGP <b>—</b> PORTUGUÊS</span>
      </div>
    </header>
  );
}

function Home({ onStart, onGuide }) {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">O jogo digital do Kit Sorriso Bilingue</span>
          <h1><span>Aprende saúde oral</span><em>a jogar conosco!</em></h1>
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

          <button className="activity-game-card teal online" onClick={() => onStart("knowledge-quiz")}>
            <span className="play-badge" aria-hidden="true">▶</span>
            <div className="activity-visual quiz-visual" aria-hidden="true">
              <img src="imagens/07_boca.png" alt="" />
              <span>?</span>
            </div>
            <div className="activity-card-copy">
              <div className="activity-card-label"><b>+</b><small>EXCLUSIVO ONLINE</small></div>
              <h3>Quiz de Saúde Oral</h3>
              <p>Responde a 18 perguntas de escolha múltipla sobre os conceitos dos cartões.</p>
              <span className="game-cta">Começar o quiz <b aria-hidden="true">→</b></span>
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
              <div className="activity-card-label"><b>+</b><small>EXCLUSIVO ONLINE</small></div>
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
            <div><b aria-hidden="true">LGP</b><span><strong>Língua Gestual Portuguesa</strong>Vídeo associado ao conceito</span></div>
          </div>
        </div>
      </section>
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
    "Respeitar a variedade linguística da LGP e esclarecer variantes quando necessário.",
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
            <a className="primary-button" href="/documentos/guia-do-professor.pdf" target="_blank" rel="noreferrer">Abrir o guia em PDF</a>
            <a className="guide-outline-button" href="/documentos/instrucoes-das-atividades.pdf" target="_blank" rel="noreferrer">Instruções das atividades</a>
          </div>
        </div>
        <div className="guide-hero-mark" aria-hidden="true"><span>▤</span><b>GUIA</b></div>
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
            <p>Destina-se principalmente a alunos Surdos do 1.º Ciclo. Pode também apoiar turmas bilingues, famílias, docentes, intérpretes de LGP e ações de literacia em saúde oral.</p>
          </div>
          <ul className="check-list">{objectives.map((item) => <li key={item}>{item}</li>)}</ul>
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
            <p className="guide-note">Evite falar ou produzir LGP enquanto o aluno observa outro suporte. Organize o espaço para que todos vejam as mãos, o rosto e os materiais.</p>
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
              <small>ATIVIDADE DIGITAL EXTRA</small>
              <h3>Quiz de Saúde Oral</h3>
              <p>O aluno lê uma definição e escolhe o conceito correto entre quatro opções. A correção apresenta a imagem e uma frase de exemplo.</p>
            </article>
            <article>
              <small>ATIVIDADE DIGITAL EXTRA</small>
              <h3>Jogo de Memória</h3>
              <p>O aluno vira dois cartões de cada vez e procura os pares formados por duas imagens iguais.</p>
            </article>
          </div>
        </section>

        <section className="observation-section" id="observacao">
          <div>
            <span className="eyebrow">Acompanhamento pedagógico</span>
            <h2>Grelha de observação</h2>
            <p>O professor pode registar o grau de autonomia demonstrado em cada aspeto.</p>
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

function KnowledgeQuiz({ onExit, onFinish }) {
  const [questions] = useState(() => shuffle(allItems).map((item) => {
    const itemTheme = themes.find((theme) => theme.items.some((candidate) => candidate.id === item.id));
    const distractors = shuffle(itemTheme.items.filter((candidate) => candidate.id !== item.id)).slice(0, 3);
    return { item, options: shuffle([item, ...distractors]) };
  }));
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showLgp, setShowLgp] = useState(false);
  const question = questions[current];
  const isCorrect = selected === question.item.id;
  const finished = current === questions.length - 1;

  function answer(item) {
    if (selected !== null) return;
    setSelected(item.id);
    if (item.id === question.item.id) setScore((value) => value + 1);
  }

  function next() {
    if (finished) {
      onFinish({ type: "knowledge-quiz", score, total: questions.length });
      return;
    }
    setCurrent((value) => value + 1);
    setSelected(null);
    setShowLgp(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="knowledge-quiz-page" style={{ "--theme": gameColors.color, "--theme-light": gameColors.light }}>
      <div className="game-topbar">
        <button className="back-button" onClick={onExit}>× Sair do jogo</button>
        <span className="score-chip quiz-score-chip">Pontos <b>{score}</b></span>
      </div>
      <Progress current={current + (selected !== null ? 1 : 0)} total={questions.length} label="Perguntas respondidas" />
      <div className="knowledge-heading">
        <span className="knowledge-pill">QUIZ DIGITAL · 18 CONCEITOS</span>
        <h1>Quiz de Saúde Oral</h1>
        <p>Lê a pista e escolhe o conceito correto.</p>
      </div>

      <section className="knowledge-card">
        <div className="question-number">PERGUNTA {current + 1} DE {questions.length}</div>
        <div className="knowledge-question-layout">
          <figure>
            <img src={question.item.image} alt="Imagem do conceito apresentado na pergunta" />
            <figcaption>Pista visual</figcaption>
          </figure>
          <div className="knowledge-question-copy">
            <h2>Escolhe a resposta correta</h2>
            <blockquote>{question.item.quizPrompt}</blockquote>
            <div className="knowledge-options">
              {question.options.map((item, index) => {
                const chosen = selected === item.id;
                const correct = selected !== null && item.id === question.item.id;
                const wrong = chosen && !correct;
                return (
                  <button
                    key={item.id}
                    className={`${chosen ? "selected" : ""} ${correct ? "correct" : ""} ${wrong ? "wrong" : ""}`}
                    onClick={() => answer(item)}
                    disabled={selected !== null}
                  >
                    <span>{String.fromCharCode(65 + index)}</span>
                    {item.word}
                    {correct && <b>✓</b>}
                    {wrong && <b>×</b>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {selected !== null && (
        <div className={`knowledge-feedback ${isCorrect ? "correct" : "wrong"}`} role="status">
          <div>
            <strong>{isCorrect ? "Resposta correta!" : `A resposta correta é «${question.item.word}».`}</strong>
            <p>{question.item.definition}</p>
            <small>Exemplo: {question.item.sentence}</small>
          </div>
          <button className="lgp-button" onClick={() => setShowLgp(true)}>LGP <span>▶</span></button>
          <button className="next-question-button" onClick={next}>{finished ? "Ver resultado" : "Próxima pergunta"} →</button>
        </div>
      )}
      {showLgp && <LgpModal word={question.item.word} onClose={() => setShowLgp(false)} />}
    </main>
  );
}

const sequenceCards = [
  { id: "rececionista", label: "Falar com a rececionista", image: "imagens/sequencia/01-falar-rececionista.png" },
  { id: "espera", label: "Esperar na sala de espera", image: "imagens/sequencia/02-sala-espera.png" },
  { id: "consultorio", label: "Entrar no consultório", image: "imagens/sequencia/03-consultorio.png" },
  { id: "consulta", label: "Realizar a consulta", image: "imagens/sequencia/04-consulta.png" },
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
                  <span>{used ? "Adicionado ✓" : "Adicionar à sequência"}</span>
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
  const [memoryItems] = useState(() => shuffle(allItems).slice(0, 9));
  const [cards] = useState(() => shuffle(memoryItems.flatMap((item) => [
    { key: `${item.id}-a`, pair: item.id, item },
    { key: `${item.id}-b`, pair: item.id, item },
  ])));
  const [open, setOpen] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);

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
    if (matched.length === memoryItems.length) {
      const timer = setTimeout(() => onFinish({ type: "memory", moves, total: memoryItems.length }), 500);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [matched, memoryItems, moves, onFinish]);

  function turn(card) {
    if (locked || open.includes(card.key) || matched.includes(card.pair)) return;
    if (open.length === 0) setMoves((value) => value + 1);
    if (open.length === 1) setLocked(true);
    setOpen((values) => [...values, card.key]);
  }

  return (
    <main className="game-shell memory-page" style={{ "--theme": gameColors.color, "--theme-light": gameColors.light }}>
      <div className="game-topbar">
        <button className="back-button" onClick={onExit}>× Sair do jogo</button>
        <span className="score-chip">Jogadas <b>{moves}</b></span>
      </div>
      <Progress current={matched.length} total={memoryItems.length} label="Pares encontrados" />
      <div className="memory-heading">
        <span className="theme-pill">9 pares · 18 cartões</span>
        <h1>Encontra as duas imagens iguais</h1>
      </div>
      <section className="memory-grid">
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
        <p>{isSequence ? "Organizaste as quatro etapas da consulta dentária." : "Terminaste esta atividade de saúde oral."}</p>
        <div className="result-score">
          {isImageWord && <><strong>{result.score}<small> / {result.total}</small></strong><span>pares formados</span></>}
          {isScoredActivity && <><strong>{result.score}<small> / {result.total}</small></strong><span>respostas corretas</span></>}
          {isSequence && <><strong>4<small> / 4</small></strong><span>etapas ordenadas</span></>}
          {!isImageWord && !isScoredActivity && !isSequence && <><strong>{result.moves}</strong><span>jogadas</span></>}
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
