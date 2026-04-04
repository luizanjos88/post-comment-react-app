# 💬 Post Comment React App

Um aplicativo moderno e interativo construído em **React** para envio e gerenciamento de comentários em postagens, utilizando a **API de teste da Lume Stack** para obter e validar os dados fictícios. O projeto possui forte foco em estabilidade, contando com testes automatizados para garantir a qualidade da interface.

---

## 🚀 Tecnologias e Ferramentas

- **React** — Biblioteca JavaScript para construção da interface de usuário.
- **Cypress** — Framework de testes End-to-End (E2E) para automação de cenários reais.
- **[Lume Stack API](https://lume.stack/)** — Integrada ao projeto.
  > ⚠️ **Nota Importante:** A Lume Stack atua neste projeto exclusivamente como uma **API de Teste**. O seu objetivo principal é fornecer dados fictícios para validar a usabilidade e garantir que os testes com Cypress reflitam o comportamento esperado.

---

## 🛠️ Pré-requisitos

Antes de começar, é indispensável que você tenha o **Node.js** instalado em seu computador para rodar a aplicação e gerenciar os pacotes.

🔗 [Baixe o Node.js oficial aqui](https://nodejs.org)

---

## 📦 Como rodar o projeto localmente

Siga o passo a passo abaixo para clonar, instalar e rodar a aplicação na sua máquina:

1. **Clone o repositório:**
   ```shell
   git clone <URL do repositório>
   ```

2. **Acesse a raiz do projeto:**
   ```shell
   cd <nome do diretório>
   ```

3. **Instale as dependências necessárias:**
   ```shell
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```shell
   npm run dev
   ```

> **Acesso:** Abra o seu navegador e acesse `http://localhost:5173`. O Vite (ou a ferramenta de build usada) possui hot-reload ativado, o que significa que qualquer alteração feita no código-fonte irá atualizar a página automaticamente.

---

## 🧪 Testes Automatizados (E2E)

Para atestar o pleno funcionamento do fluxo de usuários e garantir que novas atualizações não quebrem a aplicação, o projeto conta com testes automatizados construídos com o **Cypress**.

**Os cenários validados incluem:**
- ✅ Inserção e publicação de comentários com sucesso;
- ✅ Validação em tela confirmando que o comentário digitado aparece corretamente;
- ✅ Fluxo de exclusão do comentário recém-criado na interface.

### Como executar os testes:

Certifique-se de que o ambiente de desenvolvimento esteja rodando no terminal (usando `npm run dev`) e, num segundo terminal, execute o seguinte comando:

```shell
npx cypress open
```
Esse comando irá iniciar o Cypress e abrir uma interface visual para você visualizar interativamente a execução dos testes sendo simulados diretamente num navegador real.

---

## 🏗️ Build para Produção

Se o seu objetivo for hospedar o sistema numa infraestrutura real, você pode gerar a versão de produção otimizada executando:

```shell
npm run build
```

> Esse processo agrupará, otimizará e irá gerar uma pasta `build` (ou as vezes `dist`) contendo a versão super rápida e final da sua aplicação pronta para ser colocada no ar.
