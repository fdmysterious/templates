%%%%%%%%%%%%%%%%%%
%-=mst-base.cls=-%
%%%%%%%%%%%%%%%%%%

%Auteur : Florian Dupeyron (My?terious)
%Description : Classe de base pour les documents de M.Dupeyron ;)

\ProvidesClass{msg-poly}
\LoadClass[a4paper,10pt]{report}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Packages 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\RequirePackage[utf8]{inputenc}
\RequirePackage[T1]{fontenc}
\RequirePackage[francais]{babel}
%\RequirePackage[quiet]{fontspec}
\RequirePackage{geometry}
\RequirePackage{lmodern}
\RequirePackage[pdfusetitle]{hyperref}
\RequirePackage{graphicx}
\RequirePackage[babel=true]{csquotes}
\RequirePackage[export]{adjustbox}
\RequirePackage{xcolor}
\RequirePackage{amsthm}

%\RequirePackage{fancyhdr}
%\RequirePackage{titlesec}
%\RequirePackage{titling}
\RequirePackage{pdfpages}
%\RequirePackage{multicol}
%\RequirePackage{etoolbox}
%\RequirePackage{eso-pic}
%\RequirePackage{microtype}
%\RequirePackage{tikz}
%\RequirePackage{calc}
%\RequirePackage[absolute, overlay]{textpos}
%\RequirePackage{listings}
%\RequirePackage{pifont}
%\RequirePackage{enumitem}
%\RequirePackage[document]{ragged2e}
\input{tex/colors.tex}
\input{tex/commands.tex}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Config pages de garde
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\AtBeginDocument{%
    \input{tex/frontpage.tex}
}
%
%\AtEndDocument{%
%    \input{tex/backpage.tex}
%}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% Marges et dimensions
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%\geometry{margin=3cm}
%%\renewcommand{\baselinestretch}{1.1}
%\setlength{\baselineskip}{0.8mm}
%\setlength{\parskip}{1.5mm}
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% Typographie
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%\newfontfamily\fa[]{FontAwesome}
%\newfontfamily\TitleFont[SizeFeatures={Size=47}, LetterSpace=5]{Assistant Light}
%\setmainfont{Assistant}
%
%%\newfontfamily\inc[]{Inconsolata}
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% En têtes et Pied de pages
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%\makeatletter
%\lhead{\@title}
%\chead{}
%\rhead{\thedate}
%
%\lfoot{\theauthor --- Licence CC BY-NC}
%\cfoot{}
%\rfoot{\thepage}
%
%\patchcmd{\chapter}{\thispagestyle{plain}}{\thispagestyle{fancy}}{}{}
%\renewcommand{\footrulewidth}{0.4pt}% default is 0pt
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% Titres sections
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%\titleformat{\section}
%  {\bfseries\Large}
%  {\thesection}{1em}{}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Config hyperref
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\hypersetup{%
    unicode=true,
    %pdfborder={0 0 0 []},
    colorlinks=true,
    linkcolor=darkblue,
    urlcolor=blue
}
%\urlstyle{same}


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Config listings
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%\lstset{
%  basicstyle=\ttfamily\small
%}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Théorèmes et définitions
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\theoremstyle{plain}% default
\newtheorem{thm}{Théorème}[section]
\newtheorem{lem}[thm]{Lemme}
\newtheorem{prop}[thm]{Proposition}
\newtheorem*{cor}{Corrolaire}

\theoremstyle{definition}
\newtheorem{defn}{Définition}[section]
\newtheorem{conj}{Conjecture}[section]
\newtheorem{ex}{Exemple}[section]

\theoremstyle{remark}
\newtheorem*{rem}{Remarque}
\newtheorem*{note}{Note}
\newtheorem{case}{Cas particulier}
