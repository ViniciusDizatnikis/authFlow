import React from "react";
import { useNavigate } from "react-router-dom";

import { ReactIcon, SpringBoot, Postgress } from "../utils/icons";

const Home = () => {
    const navigate = useNavigate();

    return (
        <main className="home-container container-background">

            <section className="home_af-card">

                {/* BRAND */}
                <header className="home_af-logo">

                    <div className="home_af-icon">

                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <rect
                                x="3"
                                y="11"
                                width="18"
                                height="11"
                                rx="2"
                            />

                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />

                        </svg>

                    </div>

                    <span className="home_af-name">
                        AuthFlow
                    </span>

                </header>

                {/* CONTENT */}
                <div className="home-content">

                    <h1 className="home-title">
                        Autenticação moderna,
                        simples e segura.
                    </h1>

                    {/* TECHNOLOGIES */}
                    <div className="home-technologies">

                        {/* REACT */}
                        <div className="home-technologies__item">
                            <ReactIcon />
                        </div>

                        {/* spring boot */}
                        <div className="home-technologies__item">
                            <SpringBoot />
                        </div>

                        <div className="home-technologies__item">
                            <Postgress />
                        </div>

                    </div>

                </div>

                {/* ACTIONS */}
                <div className="home_af-btns">

                    <button
                        type="button"
                        className="home_btn"
                        onClick={() => navigate("/auth/login")}
                    >
                        Entrar
                    </button>

                    <button
                        type="button"
                        className="home_btn home_btn--create-account"
                        onClick={() => navigate("/auth/register")}
                    >
                        Criar conta
                    </button>

                </div>

                {/* FOOTER */}
                <footer className="home-footer">

                    <p className="home_af-tagline">
                        Projeto desenvolvido para fins educacionais e demonstração de autenticação segura. Todas as informações utilizadas na plataforma podem ser removidas a qualquer momento pelo usuário.
                    </p>

                </footer>

            </section>

        </main>
    );
};

export default Home;