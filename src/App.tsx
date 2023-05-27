import { useState } from "react";
import logo from "./images/landing_logo.png";
import book from "./images/book_2.jpeg";
import person from "./images/women.png";
import stars from "./images/stars.png";
import { HiOutlineArrowSmUp } from "react-icons/hi";
import { motion } from "framer-motion";
import { card_infos } from "./lists/card_infos";
import { depoiment_infos } from "./lists/depoiment_infos";
import { api } from "./services/api";
import styles from "./home.module.scss";

export default function App() {
  const [top, setTop] = useState(false);
  document.addEventListener("scroll", checkTop);

  function checkTop() {
    if (window.scrollY > 15) {
      setTop(true);
    } else {
      setTop(false);
    }
  }

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function goToCheckout() {
    try {
      const response = await api.post("/checkout", { value: 49.9 });
      const checkout = response.data.sessionURL;
      window.open(checkout, "_self");
    } catch (error) {
      alert("Algo deu errado...");
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.action_content}>
        <div>
          <h1>Seu manual de Copywrite</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
            tincidunt eget nullam non.
          </p>
          <button onClick={goToCheckout}>Garantir o meu</button>
        </div>

        <motion.img
          src={book}
          alt="Book"
          className={styles.book}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
        />
      </div>

      <div className={styles.benefits_content}>
        <div className={styles.title_content}>
          <h1>As vantagens que te aguardam</h1>
          <p>Não é só um e-book, você receberá um caminhão de vantagens!</p>
        </div>

        <div className={styles.benefits_cards_content}>
          {card_infos.map((item, index) => {
            return (
              <motion.div
                key={index}
                className={styles.card}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <div className={styles.icon_content}>{item.icon}</div>

                <p>{item.title}</p>
                <span>{item.description}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className={styles.person_content}>
        <img src={person} alt="person" />

        <div>
          <h1>Sobre mim</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
            tincidunt eget nullam non. Elementum curabitur vitae nunc sed velit
            dignissim sodales ut. Netus et malesuada fames ac turpis egestas
            integer. Elit ullamcorper dignissim cras tincidunt lobortis feugiat
            vivamus at.
          </p>
        </div>
      </div>

      <div className={styles.depoiments_content}>
        <div className={styles.depoiments_title_content}>
          <h1>Quem comprou recomenda</h1>
          <p>Confira os depoimentos de alguns aprendizes</p>
        </div>

        <div className={styles.cards_content}>
          {depoiment_infos.map((item, index) => {
            return (
              <motion.div
                key={index}
                className={styles.depoiment_card}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
              >
                <div className={styles.image_content}>
                  <img
                    src={item.image}
                    alt="Author"
                    className={styles.author}
                  />
                </div>

                <div className={styles.text_content}>
                  <p>{item.name}</p>
                  <span>{item.message}</span>

                  <img src={stars} alt="Stars" className={styles.stars} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <footer>
        <div className={styles.content_footer}>
          <div className={styles.infos_content}>
            <h2>Landing page</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
              tincidunt eget nullam non. Elementum curabitur vitae nunc sed
              velit dignissim sodales ut. Netus et malesuada fames ac turpis
              egestas integer. Elit ullamcorper dignissim cras tincidunt
              lobortis feugiat vivamus at.
            </p>
          </div>

          <hr />

          <div className={styles.contact_content}>
            <span>
              <strong>Email:</strong> copywrite@contato.com
            </span>
            <span>
              <strong>WhatsApp:</strong> 49 98353-2934
            </span>
            <span>
              <strong>Instagram:</strong> @aprenda_copywrite
            </span>
          </div>

          <hr />

          <div className={styles.email_content}>
            <h2>Entre em contato</h2>
            <p>Me envie um e-mail caso tenha alguma dúvida</p>
            <input placeholder="Digite aqui" />
          </div>
        </div>

        <div className={styles.bottom_footer}>
          <span>© Copywrite - Todos os direitos reservados</span>
          <img
            src="https://clipground.com/images/cartoes-png-16.png"
            alt="Cards"
          />
        </div>
      </footer>

      {top && (
        <button onClick={goToTop} className={styles.top_button}>
          <HiOutlineArrowSmUp size={30} color="#f0f0f0" />
        </button>
      )}
    </div>
  );
}
