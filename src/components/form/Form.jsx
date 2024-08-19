"use client"
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let errors = {};

    if (formData.name.trim().length < 2) {
      errors.name = "O nome deve ter pelo menos 2 caracteres.";
    }

    if (formData.email.trim().length < 2 || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Por favor, insira um e-mail válido.";
    }

    if (formData.message.trim().length < 2) {
      errors.message = "A mensagem deve ter pelo menos 2 caracteres.";
    }

    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      alert("Formulário enviado com sucesso!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="contact-form">
      <h2 className="contact-form__heading">Enviar e-mail para Julio Lima</h2>
      <form onSubmit={handleSubmit} className="contact-form__form">
        <div className="contact-form__form-group">
          <label htmlFor="name" className="contact-form__label">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="contact-form__input"
            placeholder="Digite seu nome"
          />
          {errors.name && <span className="contact-form__error">{errors.name}</span>}
        </div>
        <div className="contact-form__form-group">
          <label htmlFor="email" className="contact-form__label">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="contact-form__input"
            placeholder="Digite seu e-mail"
          />
          {errors.email && <span className="contact-form__error">{errors.email}</span>}
        </div>
        <div className="contact-form__form-group">
          <label htmlFor="message" className="contact-form__label">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="contact-form__textarea"
            placeholder="Digite sua mensagem"
          />
          {errors.message && <span className="contact-form__error">{errors.message}</span>}
        </div>
        <button type="submit" className="contact-form__button">Enviar</button>
      </form>
      {isSubmitted && <p className="contact-form__success-message">Seu e-mail foi enviado com sucesso!</p>}
    </div>
  );
}
