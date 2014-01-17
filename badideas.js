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
    "software development confrences",
    "IP addresses",
    "bitcoin",
    "hard drugs",
    "perscriptions",
    "love"
  ],
  platform: [
    "web app",
    "cloud platform",
    "REST api",
    "framework",
    "SaaS",
    "platform",
    "Pebble watch face",
    "iOS app",
    "Andorid app",
    "Windows Phone app",
    "BlackBerry app",
    "frontend",
    "integrated development environment",
    "Facebook app",
    "Twiter bot",
    "Reddit bot",
    "Hacker News bot",
    "esoteric programming language",
    "serious programming language",
    "domain specific langauge",
    "DOS program",
    "GUI",
    "Gooey",
    "WYSIWYG editor",
    "Widget",
    "Wikipedia clone",
    "Facebook clone",
    "Distributed cyrptocurrency"
  ],
  market: [
    "teenagers",
    "students",
    "toddlers",
    "single moms",
    "married moms",
    "couples",
    "baby boomers",
    "retirees",
    "elderly people",
    "professors",
    "immigrants",
    "socially disadvantaged people",
    "geeks",
    "nerds",
    "dorks",
    "Facebook addicts",
    "everyone"
  ],
  language: [
    "Brainfuck",
    "Ruby",
    "Scala",
    "Go",
    "Erlang",
    "Dart",
    "Common Lisp",
    "Rust",
    "APL",
    "C#",
    "C++",
    "C",
    "Java",
    "JavaScript",
    "Clojure",
    "Turbo Pascal",
    "BASIC",
    "QBasic",
    "SQL",
    "ASP.net",
    "ASP.net on Asure",
    "Git",
    "Python 3.4",
    "Lua",
    "TI-BASIC",
    "F#",
    "ClojureScript",
    "Ada",
    "PL/I",
    "AppleScript",
    "ActionScript",
    "PowerShell",
    "Bash",
    "Perl",
    "Zsh",
    "Csh",
    "Algol",
    "OCaml",
    "Visual Basic"
  ],
  verb: [
    "finding",
    "rating",
    "creating",
    "browsing",
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
    "generating",
    "tracking"
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
