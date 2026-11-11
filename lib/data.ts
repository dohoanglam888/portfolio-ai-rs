export const profile = {
  name: "Do Hoang Lam",
  title: "AI Researcher",
  tagline:
    "I study how large models learn, reason, and fail — and build methods to make them more reliable, efficient, and aligned.",
  affiliation: "FPT University",
  location: "Ho Chi Minh City, Vietnam",
  email: "dohoanglam2902@gmail.com",
  about: [
    "I'm an AI researcher working at the intersection of machine learning, natural language processing, and interpretability. My work asks why modern neural networks generalize, and how we can make their behavior more predictable.",
    "Previously, I completed my degree at FPT University, and have interned at Some Lab. Outside of research I enjoy open-source, teaching, and long hikes.",
  ],
  links: [
    { label: "Facebook", href: "https://www.facebook.com/dohoanglam.dev" },
    { label: "Phone", href: "tel:+84385482406" }
  ],
};

export const interests = [
  { title: "LLM Reasoning", text: "Chain-of-thought, planning, and test-time compute scaling." },
  { title: "Interpretability", text: "Mechanistic analysis of circuits and representations in transformers." },
  { title: "Alignment & Safety", text: "Robustness, evaluation, and scalable oversight of foundation models." },
  { title: "Efficient Learning", text: "Data-efficient training, distillation, and sparse architectures." },
];

export const news = [
  { date: "Oct 2026", text: "Paper accepted at NeurIPS 2026 as a spotlight." },
  { date: "Jul 2026", text: "Started a research internship at Some Lab." },
  { date: "Mar 2026", text: "Gave an invited talk at the ML Reading Group." },
];

export const publications = [
  {
    title: "Paper Title: A Catchy Subtitle About AI Agent Contribution",
    authors: "Hoang Lam",
    venue: "NeurIPS 2026",
    tag: "Spotlight",
    links: [
      { label: "PDF", href: "#" },
      { label: "Code", href: "#" },
      { label: "arXiv", href: "#" },
    ],
  },
  {
    title: "Understanding In-Context Learning Through Sparse Circuits",
    authors: "Hoang Lam",
    venue: "ICLR 2026",
    tag: "",
    links: [
      { label: "PDF", href: "#" },
      { label: "Code", href: "#" },
    ],
  },
  {
    title: "Scaling Laws for Reasoning Under Limited Supervision",
    authors: "Hoang Lam",
    venue: "ACL 2025",
    tag: "Best Paper Nominee",
    links: [{ label: "PDF", href: "#" }],
  },
];

export const projects = [
  {
    name: "open-interp",
    description: "An open-source toolkit for probing and visualizing transformer internals.",
    stack: ["Python", "PyTorch", "JAX"],
    href: "https://github.com/",
  },
  {
    name: "reason-bench",
    description: "A benchmark suite for multi-step reasoning with verifiable answers.",
    stack: ["Python", "HuggingFace", "Evals"],
    href: "https://github.com/",
  },
  {
    name: "tiny-lm",
    description: "A minimal, readable implementation of a GPT-style language model for teaching.",
    stack: ["PyTorch", "Education"],
    href: "https://github.com/",
  },
];
