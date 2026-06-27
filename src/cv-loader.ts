import cvEs from "../cv.json";
import cvEn from "../cv_english.json";

export interface Translations {
  about: string;
  experience: string;
  education: string;
  projects: string;
  skills: string;
  actual: string;
  visitLinkedIn: string;
  visitGitHub: string;
  visitProject: string;
  present: string;
  languageButton: string;
  languageUrl: string;
  titlePrefix: string;
  visitProfile: string;
  pressCmdK: string;
  searchCommand: string;
  printAction: string;
  actionsSection: string;
  socialSection: string;
  projectAlt: string;
}

const base = import.meta.env.BASE_URL || "/";
const normalizedBase = base.endsWith('/') ? base : `${base}/`;

const es: Translations = {
  about: "Sobre mí",
  experience: "Experiencia laboral",
  education: "Educación",
  projects: "Proyectos",
  skills: "Habilidades",
  actual: "Actual",
  visitLinkedIn: "Visitar el perfil de",
  visitGitHub: "Ver código fuente del proyecto",
  visitProject: "Ver el proyecto",
  present: "Actual",
  languageButton: "English",
  languageUrl: `${normalizedBase}en/`,
  titlePrefix: "Portafolio de",
  visitProfile: "Visitar",
  pressCmdK: "Pulsa <kbd>Cmd</kbd> + <kbd>K</kbd> para abrir la paleta de comandos.",
  searchCommand: "Buscar comando",
  printAction: "Imprimir",
  actionsSection: "Acciones",
  socialSection: "Social",
  projectAlt: "Visualización de"
};

const en: Translations = {
  about: "About me",
  experience: "Work Experience",
  education: "Education",
  projects: "Projects",
  skills: "Skills",
  actual: "Present",
  visitLinkedIn: "Visit the profile of",
  visitGitHub: "View project source code",
  visitProject: "View the project",
  present: "Present",
  languageButton: "Español",
  languageUrl: normalizedBase,
  titlePrefix: "Portfolio of",
  visitProfile: "Visit",
  pressCmdK: "Press <kbd>Cmd</kbd> + <kbd>K</kbd> to open the command palette.",
  searchCommand: "Search command",
  printAction: "Print",
  actionsSection: "Actions",
  socialSection: "Social",
  projectAlt: "Visualization of"
};

function checkIsEn(urlPath: string): boolean {
  const relativePath = urlPath.replace(base, "/");
  return relativePath.startsWith("/en") || relativePath.includes("/en/");
}

export function getCV(urlPath: string) {
  return checkIsEn(urlPath) ? cvEn : cvEs;
}

export function getTranslations(urlPath: string): Translations {
  return checkIsEn(urlPath) ? en : es;
}
