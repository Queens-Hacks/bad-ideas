var words = {
  noun: [
    "gerbils",
    "monkeys",
    "textbooks",
    "classes",
    "sexual encounters",
    "taxes",
    "bad ideas",
    "lamps",
    "drink bottles",
    "groceries",
    "cars",
    "apartments",
    "drugs",
    "hitmen",
    "telephones",
    "electronics",
    "iPhones",
    "escorts",
    "restraunts",
    "laptops",
    "televisions",
    "software development confrences"
  ],
  platform: [
    "web app",
    "cloud platform",
    "REST api",
    "framework",
    "SAAS",
    "platform",
    "pebble app",
    "iOS app",
    "Andorid app",
    "Windows Phone app",
    "Blackberry App",
    "frontend",
    "integrated development environment",
    "facebook app",
    "twiiter bot",
    "reddit bot",
    "hacker news bot",
    "esoteric programming language",
    "serious programming language",
    "domain specific langauge"
  ],
  market: [
    "teenagers",
    "students",
    "babies",
    "single moms",
    "married moms",
    "couples",
    "baby boomers",
    "retirees",
    "elderly people",
    "professors",
    "immigrants",
    "socially disadvantaged peoples",
    "geeks",
    "nerds",
    "dorks",
    "facbook addicts"
  ],
  language: [
    "brainfuck",
    "ruby",
    "scala",
    "go",
    "erlang",
    "dart",
    "common lisp",
    "rust",
    "apl",
    "C#",
    "C++",
    "C",
    "java",
    "javascript",
    "clojure",
    "turbo pascal",
    "BASIC",
    "qBASIC",
    "SQL",
    "ASP.net",
    "ASP.net on Asure",
    "Git",
    "python",
    "python 3",
    "lua",
    "TI-BASIC",
    "B",
    "D",
    "F#",
    "clojurescript",
    "ada",
    "pl/i",
    "OS/2",
    "DOS",
    "applescript",
    "actionscript",
    "powershell",
    "bash",
    "perl",
    "zsh",
    "csh",
    "fish",
    "algol",
    "ocaml"
  ],
  verb: [
    "finding",
    "rating",
    "creating",
    "browising",
    "aggregating",
    "croudsourcing",
    "connecting with",
    "selling",
    "buying",
    "trading",
    "fabricating",
    "calling",
    "chatting with",
    "avoiding",
    "generating"
  ]
};

var templates = [
  "A {platform} in {language} for {verb} {noun} designed for {market}",
  "A {platform} for {verb} {noun} designed for {market}, by {market}",
  "A {platform} in {language} for {verb} {noun} designed by {market}",
  "The next {language}",
  "The next big {platform}"
];

function random_item(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generate_bad_idea() {
  var template = random_item(templates);

  return template.replace(/\{([a-z]+)\}/g, function(m, k) {
    return k in words ? random_item(words[k]) : m;
  });
}

function new_bad_idea() {
  document.getElementById('bad-idea').innerHTML = generate_bad_idea();
}
new_bad_idea();
