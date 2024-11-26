// const axe = require('axe-core');
// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('http://localhost:4200'); // Altere para a URL da sua aplicação

//   // Injeta o axe-core no contexto da página
//   await page.addScriptTag({ path: require.resolve('axe-core') });

//   // Executa o teste de acessibilidade
//   const results = await page.evaluate(async () => {
//     return await axe.run();
//   });

//   console.log(results);
//   await browser.close();
// })();

const axe = require('axe-core');
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4200'); // Altere para a URL da sua aplicação

  // Injeta o axe-core no contexto da página
  await page.addScriptTag({ path: require.resolve('axe-core') });

  // Executa o teste de acessibilidade
  const results = await page.evaluate(async () => {
    return await axe.run();
  });

  // Formata o relatório de acessibilidade em HTML
  let htmlContent = `
    <html>
    <head>
      <title>Accessibility Report</title>
      <style>
        body { font-family: Arial, sans-serif; }
        .violation { margin-bottom: 20px; }
        .violation h2 { color: red; }
        .node { margin-left: 20px; }
      </style>
    </head>
    <body>
      <h1>Accessibility Report</h1>
  `;

  results.violations.forEach(violation => {
    htmlContent += `
      <div class="violation">
        <h2>ID: ${violation.id}</h2>
        <p><strong>Impact:</strong> ${violation.impact}</p>
        <p><strong>Description:</strong> ${violation.description}</p>
        <p><strong>Help:</strong> ${violation.help}</p>
        <p><strong>Help URL:</strong> <a href="${violation.helpUrl}">${violation.helpUrl}</a></p>
        <div class="nodes">
          <h3>Nodes:</h3>
    `;

    violation.nodes.forEach(node => {
      htmlContent += `
        <div class="node">
          <p><strong>HTML:</strong> ${node.html}</p>
          <p><strong>Target:</strong> ${node.target.join(', ')}</p>
          <p><strong>Failure Summary:</strong> ${node.failureSummary}</p>
        </div>
      `;
    });

    htmlContent += `
        </div>
      </div>
    `;
  });

  htmlContent += `
    </body>
    </html>
  `;

  // Escreve o conteúdo HTML em um arquivo
  fs.writeFileSync('accessibility-report.html', htmlContent);

  await browser.close();
})();