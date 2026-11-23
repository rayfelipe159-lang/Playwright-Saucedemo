Projeto de Automação de Testes – Desafio QA Pleno

Este projeto foi desenvolvido como parte do desafio do processo seletivo para a vaga de Analista de Testes Pleno.

Para a implementação da automação, foi utilizado o Playwright, aplicando o padrão de projeto POM (Page Object Model) para organizar e facilitar a manutenção dos testes.

## Estrutura e implementação

- POM (Page Object Model): utilizado para separar os elementos e as ações de cada página da lógica dos testes.
- Fixtures do Playwright: utilizadas para compartilhar e disponibilizar instâncias das páginas e objetos necessários durante a execução dos testes, evitando duplicação de código.
- Organização dos testes: as interações com a aplicação ficam centralizadas nas respectivas classes de páginas, enquanto os cenários de teste ficam responsáveis pelas validações e regras de negócio.

## Credenciais

Por questões de segurança, as credenciais utilizadas nos testes foram armazenadas em um arquivo .env, evitando que informações sensíveis sejam expostas diretamente no código ou enviadas ao repositório.

As credenciais também estão disponíveis na própria página do [Sauce Demo](https://www.saucedemo.com/), caso seja necessário consultá-las ou utilizá-las manualmente.



## Como executar

Siga os passos abaixo para configurar o ambiente e executar o projeto:

1. Clonar o repositório: faça o clone do repositório ou baixe o projeto compactado.
2. Descompactar: caso tenha baixado o projeto compactado, extraia os arquivos.
3. Abrir o projeto: abra a pasta do projeto no Visual Studio Code ou em outra IDE de sua preferência.
4. Instalar as dependências: abra o terminal na pasta raiz do projeto e execute:

 npm i

5. Executar os testes: após a instalação das dependências, execute:


   npx playwright test


## Comandos do Playwright

Os principais comandos disponíveis para execução e análise dos testes são:

| Comando | Descrição |
|---|---|
| `npx playwright test` | Executa todos os testes. |
| `npx playwright test --ui` | Abre a interface visual do Playwright para executar e acompanhar os testes. |
| `npx playwright test --headed` | Executa os testes exibindo o navegador. |
| `npx playwright test --debug` | Executa os testes em modo de depuração. |
| `npx playwright test --project=chromium` | Executa os testes utilizando o projeto Chromium. |
| `npx playwright show-report` | Abre o relatório da última execução. |
| `npx playwright codegen` | Abre o navegador com a ferramenta de geração de código. |
| `npx playwright test --last-failed` | Executa novamente os testes que falharam na última execução. |

Comandos encontrados em: https://playwright.dev/docs/test-cli

## Dependências e pré-requisitos

Para executar o projeto, é necessário ter instalado:

- Node.js: ambiente de execução JavaScript. Recomenda-se utilizar uma versão LTS compatível com a versão do Playwright utilizada no projeto.
- NPM: gerenciador de pacotes utilizado para instalar as dependências. Geralmente é instalado junto com o Node.js.
- Playwright: framework utilizado para automação dos testes.
- Navegadores do Playwright: Chromium, Firefox ou WebKit, conforme os navegadores utilizados na configuração do projeto.

Após instalar as dependências com npm install, caso os navegadores ainda não estejam instalados, execute:


npx playwright install


Para instalar apenas o Chromium:


npx playwright install chromium


Observação: não é necessário instalar o Playwright globalmente. Os comandos npx utilizam a versão instalada nas dependências do próprio projeto.