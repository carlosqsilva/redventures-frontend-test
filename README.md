# Teste FrontEnd...

## Observação

Tive Problemas com a API, a mesma não envia `Allow-Control-Allow-Origin: *` portanto fiz uso desta [extensão](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) para chrome.

demo: [click here](https://carlosqsilva.github.io/redventures-frontend-test/)

```bash
git clone git@github.com:carlosqsilva/redventures-frontend-test.git
cd redventures-frontend-test
npm install
npm start
```

# Tools and libraries

* Decidi pelo uso do `Preact` por ter mais familiariadade com essa lib.
* Geralmente uso Redux e Thunk, mas aproveitei o teste para aprender `Mobx`.
* Normalmente usaria CRA mas escolhi experimentar o Parcel-bundler, a última versão agora suporta `alias`.
* Usei `styled-components`, nenhum motivo especifico apenas hábito.
* **SCSS** foi usado para customizar os componentes: `React-Day-Picker`, `react-input-range` e `Chartist`.

# Requisitos

* [ ] A lista de hotéis disponíveis deve ter obtida através da API fornecida após o usuário selecionar as datas ou alterar valores/estrelas nos filtros. **Já que por padrão a API envia todos os dados, decidi fazer o filtro no cliente, em vez de fazer outro request**.

**não consegui ser totalmente fiel ao layout fornecido, mais acredito que atendi boa parte dos requisitos..**

# Bônus

* [x] DRY, Evitar side effects e funções anônimas. **Não tenho certeza se atendi todos os requisitos**.
* [x] Code splitting, HMR, Hot Reload CSS.
* [x] Exibir Loaders durante as requests.
