"use client";

import { useState } from "react";
import styles from "../../styles/register.module.css";

export default function RegisterPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    password: "",
    genero: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    // api
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.box}>
        <form onSubmit={handleSubmit}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}><b>Cadastro de Usuário</b></legend>

            <div className={styles.inputBox}>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                className={styles.inputUser}
                required
              />
              <label htmlFor="nome" className={styles.labelInput}>Nome</label>
            </div>

            <div className={styles.inputBox}>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={styles.inputUser}
                required
              />
              <label htmlFor="email" className={styles.labelInput}>Email</label>
            </div>

            <div className={styles.inputBox}>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className={styles.inputUser}
                required
              />
              <label htmlFor="password" className={styles.labelInput}>Senha</label>
            </div>

            <p>Sexo:</p>
            <div>
              <label>
                <input
                  type="radio"
                  name="genero"
                  value="feminino"
                  checked={form.genero === "feminino"}
                  onChange={handleChange}
                  required
                />
                Feminino
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="genero"
                  value="masculino"
                  checked={form.genero === "masculino"}
                  onChange={handleChange}
                  required
                />
                Masculino
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="genero"
                  value="outro"
                  checked={form.genero === "outro"}
                  onChange={handleChange}
                  required
                />
                Outro
              </label>
            </div>

            <input type="submit" className={styles.submit} />
          </fieldset>
        </form>
      </div>
    </div>
  );
}
