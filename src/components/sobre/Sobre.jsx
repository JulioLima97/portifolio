import React from 'react';

export default function Sobre() {
  return (
    <div className="sobre">
      <img src="https://avatars.githubusercontent.com/u/112826748?v=4" alt="Júlio Lima" className="sobre__imagem" />
      <h1 className="sobre__titulo">Olá! Eu sou o Júlio Lima 👋</h1>
      <div className="sobre__jornada">
        <h2 className="sobre__subtitulo">Minha Jornada</h2>
        <ul className="sobre__lista">
          <li className="sobre__item">Sou formado em Engenharia civil pela Universidade de São Judas Tadeu (USJT), e hoje estou estudando desenvolvimento web e dados.</li>
          <li className="sobre__item">Atualmente estou participando do bootcamp de Desenvolvimento Web da TripleTen.</li>
          <li className="sobre__item">Trabalho em diversos projetos web, incluindo sites, aplicativos e análise de dados.</li>
          <li className="sobre__item">Sempre em busca de aprender novas tecnologias e tendências do desenvolvimento web.</li>
          <li className="sobre__item">📊 Sempre fui muito interessado por estatísticas, gráficos, planilhas e tabelas.</li>
          <li className="sobre__item">Mais informações de contato disponíveis no meu <a href="https://www.linkedin.com/in/j%C3%BAlio-lima-445562148/" className="sobre__link">LinkedIn</a>.</li>
        </ul>
      </div>
      <div className="sobre__projetos">
        <h2 className="sobre__subtitulo">Meus Projetos</h2>
        <ul className="sobre__lista">
          <li className="sobre__item">O meus projetos da área de desenvolvimento web estão disponíveis em: <a href="https://github.com/JulioLima97/Web-Projects" className="sobre__link">Web Projects</a></li>
          <li className="sobre__item">O meus projetos da área dados estão disponíveis em: <a href="https://github.com/JulioLima97/Data-Projects" className="sobre__link">Data Projects</a></li>
        </ul>
      </div>
    </div>
  );
};
