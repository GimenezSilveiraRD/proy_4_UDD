import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <section className="blog-section">
      <h2>Noticias del Restaurante</h2>
      <article>
        <h3>Nuestro nuevo menú de primavera</h3>
        <p>Estamos emocionados de presentar nuestro nuevo menú de primavera, lleno de sabores frescos y platos innovadores. Ven y descubre por qué somos el restaurante más hablado de la ciudad.</p>
      </article>
      <article>
        <h3>El secreto detrás de nuestra paella</h3>
        <p>La paella es uno de nuestros platos estrella y muchos se preguntan cuál es el secreto de su sabor inigualable. Te invitamos a descubrirlo en nuestro próximo evento culinario.</p>
      </article>
      <article>
        <h3>Reconocidos como el mejor restaurante de 2023</h3>
        <p>Gracias a la pasión y dedicación de nuestro equipo, hemos sido reconocidos como el mejor restaurante de 2023 por la revista Gourmet Today. ¡Gracias por su apoyo!</p>
      </article>
    </section>
  );
};

export default Blog;
