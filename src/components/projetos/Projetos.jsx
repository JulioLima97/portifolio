"use client";
import "../../blocks/projetos.css";
import Api from "../../utils/Api.js";
import React, { useEffect, useState } from "react";

export default function Projetos() {
  const [projetos, setProjetos] = useState([]);
  useEffect(() => {
    const getProjetos = async () => {
      const servicosRes = await Api();
      setProjetos(servicosRes);
    };

    getProjetos();
  }, []);

  return (
    <section className="projetos__info" id="projetos">
      <h2 className="projetos__info_title">Lista de projetos</h2>
      <ul className="projetos">
        {projetos.map((projeto) => {
          return (
            <li className="projeto" key={projeto.id}>
              <div className="projeto__info">
                <h2 className="projeto__info_title">{projeto.name}</h2>
              </div>
              <a
                className="projeto__info_btn"
                href={projeto.html_url}
                target="_blank"
              >
                Acessar projeto
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
