// Initialisation ---------------------------------------------------------------
// p element --------------------------------------------------------------------
let pEl = document.querySelectorAll("#spin p");
// H1 H2 element ----------------------------------------------------------------
let presentationEl = document.querySelectorAll(".presentation");
let photoEl = document.getElementById("carouselImage");
// A propos ---------------------------------------------------------------------
let secAProposEl = document.getElementById("aPropos");
// Compétence ---------------------------------------------------------------------
let competenceEl = document.getElementById("competence");
// Parcours ---------------------------------------------------------------------
let parcoursEl = document.getElementById("parcours");
// Experiences ---------------------------------------------------------------------
let experiencesEl = document.getElementById("experiences");
// Loisirs ---------------------------------------------------------------------
let loisirsEl = document.getElementById("loisirs");
// Infos ---------------------------------------------------------------------
let infosEl = document.getElementById("infos");
// Variable ---------------------------------------------------------------------

// Fonctions --------------------------------------------------------------------

// Fonction invisible -----------------------------------------------------------
function invisible() {
  for (i = 0; i < pEl.length; i++) {
    pEl[i].style.display = "none";
  }
  for (i = 0; i < presentationEl.length; i++) {
    presentationEl[i].style.display = "none";
  }
  photoEl.style.display = "none";
}
// Fonction visible -------------------------------------------------------------
function visible() {
  for (i = 0; i < pEl.length; i++) {
    pEl[i].style.display = "flex";
  }
  for (i = 0; i < presentationEl.length; i++) {
    presentationEl[i].style.display = "flex";
  }
  photoEl.style.display = "flex";
}
// Fonction retour acceuil ------------------------------------------------------
function accueil() {
  visible();
  secAProposEl.style.display = "none";
  competenceEl.style.display = "none";
  parcoursEl.style.display = "none";
  experiencesEl.style.display = "none";
  loisirsEl.style.display = "none";
  infosEl.style.display = "none";
}

// Fonction a propos visible ----------------------------------------------------
function aPropos() {
  invisible();
  secAProposEl.style.display = "flex";
}

// Fonction competence visible --------------------------------------------------
function competence() {
  invisible();
  competenceEl.style.display = "flex";
}

// Fonction Parcours visible --------------------------------------------------
function parcours() {
  invisible();
  parcoursEl.style.display = "flex";
}

// Fonction Experiences visible --------------------------------------------------
function experiences() {
  invisible();
  experiencesEl.style.display = "flex";
}

// Fonction loisirs visible --------------------------------------------------
function loisirs() {
  invisible();
  loisirsEl.style.display = "flex";
}

// Fonction Infos visible --------------------------------------------------
function infos() {
  invisible();
  infosEl.style.display = "flex";
}
