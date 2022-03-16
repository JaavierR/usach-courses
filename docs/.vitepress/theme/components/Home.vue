<template>
  <ClientOnly>
    <section id="hero">
      <h1 class="tagline">Cursos <span class="tagline--bold">DII</span></h1>
    </section>

    <section id="highlights" class="vt-box-container">
      <a class="vt-box course-link" href="/dsi/">
        <h2>DSI</h2>
        <p>
          Aqu&iacute; puedes encontrar el material relacionado al curso de
          Dise&ntilde;o de Sistemas de Informaci&oacute;n.
        </p>
      </a>
      <a class="vt-box course-link" href="/iot/">
        <h2>IOT</h2>
        <p>
          Aqu&iacute; puedes encontrar el material relacionado al curso de
          Internet de las cosas.
        </p>
      </a>
    </section>
  </ClientOnly>
</template>

<style scoped>
section {
  padding: 42px 32px;
}
.dark a.vt-box:hover {
  background-color: rgba(158, 158, 158, 0.05) !important;
}
a.vt-box:hover {
  background-color: rgba(158, 158, 158, 0.1) !important;
}
#hero {
  padding: 96px 32px;
  text-align: center;
}
.tagline {
  text-transform: uppercase;
  font-size: 45px;
  line-height: 1.25;
  font-weight: 300;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0px auto;
}
.tagline--bold {
  font-weight: 600;
}
html:not(.dark) .accent,
.dark .tagline {
  background: -webkit-linear-gradient(315deg, #3efe68 25%, #53baff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.description {
  max-width: 960px;
  line-height: 1;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 30px;
  margin: 10px 0px 60px 0px;
}
.actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}
.actions .get-started {
  font-weight: 600;
  background-color: var(--vt-c-brand);
  color: #fff;
  margin-right: 18px;
}
.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
}
.dark .actions .get-started {
  color: var(--vt-c-indigo);
}
.actions .get-started:hover {
  background-color: var(--vt-c-brand-dark);
  transition-duration: 0.2s;
}
.actions .get-started:hover .icon {
  transform: translateX(2px);
}
.dark .actions .get-started:hover {
  background-color: var(--vt-c-brand-light);
}
.actions .setup {
  color: var(--vt-c-text-code);
}
.actions .setup:hover {
  background-color: var(--vt-c-gray-light-4);
  transition-duration: 0.2s;
}
.dark .actions .setup:hover {
  background-color: var(--vt-c-gray-dark-3);
}
#special-sponsor {
  border-top: 1px solid var(--vt-c-divider-light);
  border-bottom: 1px solid var(--vt-c-divider-light);
  padding: 12px 24px;
  text-align: center;
}
#special-sponsor span {
  color: var(--vt-c-text-2);
  font-weight: 500;
  font-size: 13px;
  vertical-align: middle;
  margin: 0 24px;
}
#special-sponsor img {
  display: inline-block;
  vertical-align: middle;
  height: 36px;
}
.dark #special-sponsor img {
  filter: grayscale(1) invert(1);
}
#highlights {
  max-width: 960px;
  margin: 0px auto;
  color: var(--vt-c-text-2);
}
#highlights h2 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}
#highlights p {
  font-weight: 400;
  font-size: 15px;
}
#highlights .vt-box {
  background-color: transparent;
}
#sponsors {
  max-width: 900px;
  margin: 0px auto;
}
#sponsors h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1em;
}
#sponsors .sponsor-container {
  margin-bottom: 3em;
}
@media (max-width: 960px) {
  .tagline {
    font-size: 64px;
    letter-spacing: -0.5px;
  }
  .description {
    font-size: 18px;
    margin-bottom: 48px;
  }
}
@media (max-width: 768px) {
  .tagline {
    font-size: 48px;
    letter-spacing: -0.5px;
  }
}
@media (max-width: 576px) {
  #hero {
    padding: 64px 32px;
  }
  .description {
    font-size: 16px;
    margin: 18px 0 30px;
  }
  #special-sponsor img {
    display: block;
    margin: 2px auto 1px;
  }
  #highlights h3 {
    margin-bottom: 0.6em;
  }
  #highlights .vt-box {
    padding: 20px 36px;
  }
}
@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
}
</style>
