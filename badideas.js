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
    "WYSIWYG editor",
    "Widget",
    "Wiki",
    "Distributed cyrptocurrency",
    "website",
    "social media platform",
    "IRC"
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
  ],
  helpingverb: [
    "easing",
    "facilitating",
    "expiditing",
    "monitizing"
  ]
};

var templates = [
  "A {platform} in {language} for {verb} {noun} designed for {market}",
  "A {platform} for {verb} {noun} designed by {market}, for {market}",
  "A {platform} in {language} for {verb} {noun} designed by {market}",
  "The next {language}",
  "The next big {platform}",
  "A {platform} for {market} {helpingverb} the {verb} of {noun}",
  "A {noun} {verb} {platform}"
];

function random_item(array, random) {
  return array[Math.floor((random / 10000) * array.length)];
}

function random_numbers() {
  var numbers = [];
  for (var i=0; i<7; i++) {
    numbers.push((Math.random() * 10000) | 0);
  }

  return numbers;
}

function generate_bad_idea(randoms) {
  var i = 1;
  var template = random_item(templates, randoms[0]);

  return template.replace(/\{([a-z]+)\}/g, function(m, k) {
    return k in words ? random_item(words[k], randoms[i++]) : m;
  });
}

function new_bad_idea() {
  var randoms = random_numbers();
  var bad_idea = generate_bad_idea(randoms);
  location.hash = randoms.join(',');
  document.getElementById('bad-idea').innerHTML = bad_idea;
}

if (location.hash === '')
  new_bad_idea();
else
  read_hash();

function read_hash() {
  var randoms = location.hash.substring(1).split(',');
  for (var i=0; i<randoms.length; i++) {
    randoms[i] = parseInt(randoms[i]);
  }
  document.getElementById('bad-idea').innerHTML = generate_bad_idea(randoms);
}

window.addEventListener('hashchange', function(e) {
  read_hash();
});
