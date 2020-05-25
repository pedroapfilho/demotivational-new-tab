interface Quote {
  title: string;
  subtitle: string;
}

const quotes: Quote[] = [
  {
    title: "Once you've picked",
    subtitle: "everything only gets worse",
  },
  {
    title: "Be yourself",
    subtitle: "no one wants to be you anyways",
  },
  {
    title: "Talent",
    subtitle:
      "no matter how hard you work, there is always an eight year old prodigy who is better",
  },
  {
    title: "Progress",
    subtitle:
      "each new morning presents a brand new opportunity to fall further behind on your bills",
  },
  {
    title: "Adventure",
    subtitle: "Fortune favors the bold, so does catastrophe, poverty and death",
  },
  {
    title: "Relax",
    subtitle:
      "the worst things in your life probably haven't happened to you yet",
  },
  {
    title: "Automation",
    subtitle: "because robots are better than you",
  },
];

const quote = quotes[Math.floor(Math.random() * quotes.length)];

const block = document.getElementById("block");

const title = document.createElement("h1");
title.classList.add("title");
title.innerText = quote.title;

const subtitle = document.createElement("h2");
subtitle.classList.add("subtitle");
subtitle.innerHTML = quote.subtitle;

block.appendChild(title);
block.appendChild(subtitle);
