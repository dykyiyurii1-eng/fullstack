import './styles/base.css'
import { getSettings, getPage } from "./api.js"
import { renderBlocks } from './renderBlocks.js'

function renderHeader(setting) {
  return `
    <header class="header">
      <a class="header__logo" href="/">${setting.siteName}</a>
      <nav class="header__nav">
        ${setting.menu.map(({ label, link }) => `
          <a class="header__link" href="${link}">${label}</a>
        `).join('')}
      </nav>
    </header>
  `
}

function renderFooter(setting) {
  return `
    <footer class="footer">
      <p>${setting.footer.text}</p>
      <p>&copy; ${new Date().getFullYear()} ${setting.siteName}</p>
    </footer>
  `
}

async function start() {
  const app = document.querySelector("#app")
  try {
    const [setting, page] = await Promise.all([
      getSettings(),
      getPage(location.pathname)
    ])

    document.title = `${page.title} - ${setting.siteName}`

    app.innerHTML = `
      ${renderHeader(setting)}
      <main>
        ${renderBlocks(page.blocks)}
      </main>
      ${renderFooter(setting)}
    `
  } catch (error) {
    app.textContent = `Error ${error.message}`
  }
}

start()