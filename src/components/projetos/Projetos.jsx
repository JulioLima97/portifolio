"use client";
import "../../blocks/projetos.css";
import React from "react";
import { useGetProjects } from "../../hooks/useGetProjects";

export default function Projetos() {
  const { projetos, loading, error } = useGetProjects();

  if (loading) {
    return (
      <div className="loader"></div>
    );
  }

  if (error) {
    return <div>Erro ao carregar projetos: {error.message}</div>;
  }

  return (
    <section className="projetos__info" id="projetos">
      <h2 className="projetos__info_title">Lista de projetos</h2>
      <ul className="projetos">
        {projetos.map((projeto) => (
          <li className="projeto" key={projeto.id}>
            <div className="projeto__info">
              <h2 className="projeto__info_title">{projeto.name}</h2>
            </div>
            <a
              className="projeto__info_btn"
              href={projeto.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Acessar projeto
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
