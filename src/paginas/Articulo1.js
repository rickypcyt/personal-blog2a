import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "../css paginas/GlobalArticulos.css"; // Importa los estilos CSS

function Articulo1() {
  const categoria = "Gym"; // Definir la categoría como una constante
  const titulo = "The Smartest Way to Build Muscle in 2024";
  const descripcion =
    "Discover the pinnacle of muscle-building wisdom in The Smartest Way to Build Muscle in 2024 video. With expert insights from renowned professionals like Dr. Mike Israetel and Dr. Brad Schoenfeld, this guide offers clear strategies for optimizing exercise selection, set volume,and training frequency. From rep ranges to advanced techniques, this video equips viewers with actionable knowledge to sculpt their physiquewith precision and effectiveness.";
  
  const articuloAnterior = "/articulo3";
  const articuloSiguiente = "/articulo2";
  return (
    <div className="articulo-global-container">
      <Link to="/" className="back-link">
        <FiArrowLeft /> Home
      </Link>
      <h1 className="articulo-global-title">{titulo}</h1>
      <p className="articulo-global-content">{descripcion}</p>
      <h2 className="articulo-global-content-h1" id="how-many-exercises">
        How many exercises?
      </h2>
      <p className="articulo-global-content">
        <a href="https://urls.grow.me/7e59P90Xe">Dr. Mike Israetel</a>: Suggests
        that 2-4 exercises per muscle group is ideal.
      </p>
      <h2 id="which-are-the-best">Which are the best?</h2>
      <p>
        <a href="https://urls.grow.me/7e59P90Xe">Dr. Mike Israetel</a>:
      </p>
      <p>
        <strong>Chest:</strong> Flat Press, Incline Press, and Chest Fly <br />
        <strong>Back:</strong> Pull Ups, Rows, Deadlifts, and Flexion Rows <br />
        <strong>Biceps:</strong> Behind the back cable curls and Incline dumbbell curls <br />
        <strong>Triceps:</strong> Overhead Extensions, Cable Pushdown, and Close Grip Pressing <br />
        <strong>Shoulders:</strong> Dumbbell Lateral Raises, Upright Rows, and Cable Lateral Raises <br />
        <strong>Calves:</strong> Straight leg calf exercises (Stretch down slowly and come up fast) <br />
        <strong>Quads:</strong> Barbell Squats, Smith Machine Squats, Leg Press, Hack Squats, and Leg Extensions <br />
        <strong>Hamstrings:</strong> Stiff legged deadlift, Lying leg curls, and Seated leg curls
      </p>
      <p>
        <img src="!The Smartest Way to Build Muscle in 2024 (Experts Reveal)-20240203181359991.png" alt="" />
      </p>

      <h2 id="how-often-should-i-change-them">How often should I change them?</h2>
      <p>
        <a href="https://urls.grow.me/7e59P90Xe">Dr. Mike Israetel</a>: Don't change them unless they cause joint pain, lack of muscle pump, or boredom. In such cases, replace them with better alternatives.
      </p>

      <h2 id="how-many-sets-how-often-should-we-train-these-muscles-to-maximize-muscle-growth">How many sets? How often should we train these muscles to maximize muscle growth?</h2>
      <p>
        <a href="https://www.lehman.edu/academics/health-human-services-nursing/health-promotion-nutrition/fac-schoenfeld.php">Dr. Brad Schoenfeld</a>:<br />
        Recommends 10-20 sets per muscle group per week. Beginners should focus on movement rather than volume for hypertrophy.
      </p>
      <p>
        <img src="!The Smartest Way to Build Muscle in 2024 (Experts Reveal)-20240203211634731.png" alt="" />
      </p>

      <h2 id="how-many-reps">How many reps?</h2>
      <p>
        <a href="https://www.linkedin.com/in/daniel-plotkin-6a4a40159">Daniel Plotkin</a>: Advises a range of 5-15 reps.
      </p>

      <h2 id="should-i-increase-reps-or-weight">Should I increase reps or weight?</h2>
      <p>
        <a href="https://www.linkedin.com/in/daniel-plotkin-6a4a40159">Daniel Plotkin</a> conducted a study where both increasing reps and weights showed no significant difference in hypertrophy. Aim for 8-12 reps and utilize Double Progression technique.
      </p>

      <h2 id="should-i-always-train-to-failure">Should I always train to failure?</h2>
      <p>
        <a href="https://www.researchgate.net/profile/Joshua-Pelland">Josh Pelland</a>: Recommends reaching failure on the last set.
      </p>

      <h2 id="lengthen-partials-half-reps-vs-full-rom">Lengthen Partials (Half reps) vs Full ROM.</h2>
      <p>
        <a href="https://wolfcoaching.com/about">Dr. Milo Wolf</a> suggests using half reps either throughout the set or at the end when you're fatigued, but avoid it in risky exercises.
      </p>

      <h2 id="how-often-should-you-use-this-technique">How often should you use this technique?</h2>
      <p>
        <a href="https://wolfcoaching.com/about">Dr. Milo Wolf</a> recommends using it frequently for muscle growth, especially if focusing exclusively on muscle growth.
      </p>

      <h2 id="should-beginners-also-use-this-technique">Should beginners also use this technique?</h2>
      <p>
        <a href="https://wolfcoaching.com/about">Dr. Milo Wolf</a> advises beginners to start with Full ROM for a better understanding of the exercise, gradually incorporating lengthen partials.
      </p>

      <h2 id="summary">Summary:</h2>
      <p>
        <img src="!The Smartest Way to Build Muscle in 2024-20240207192959033.png" alt="" />
      </p>
      <p>Categoría: {categoria}</p> {/* Mostrar la categoría */}
            {/* Banner para navegar al artículo anterior y siguiente */}
      <div className="articulo-navigation">
        {articuloAnterior && (
          <Link to={articuloAnterior} className="back-link">
            <FiArrowLeft /> Anterior
          </Link>
        )}
        {articuloSiguiente && (
          <Link to={articuloSiguiente} className="back-link">
            Siguiente <FiArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Articulo1;
