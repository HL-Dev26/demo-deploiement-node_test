## CI/CD avec GitHub Actions

L'intégration continue (CI) permet de vérifier automatiquement que votre code fonctionne à chaque modification. Pour une app Express, le flux standard est :
1. **Trigger** : On pousse du code sur GitHub.
2. **Runner** : GitHub lance une machine virtuelle (Ubuntu).
3. **Jobs** : La machine installe Node.js, les dépendances, puis lance les tests.

### Structure du fichier de workflow
Les fichiers sont au format YAML et doivent être placés dans `.github/workflows/`.

---

## Automatiser le Test de l'App

Le fichier `.github/workflows/test-app.yml` :

```yaml
name: Node.js CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
    - name: Récupérer le code
      uses: actions/checkout@v4

    - name: Installer Node.js
      uses: actions/setup-node@v4
      with:
        node-version: 20

    - name: Installer les dépendances
      run: npm install

    - name: Lancer les tests
      run: npm test
```

---

## Questions 

1. **Pourquoi utilise-t-on `actions/checkout` ?**

2. **Que se passe-t-il si `npm test` échoue dans le workflow ?**

3. **Comment tester l'app sur plusieurs versions de Node (18, 20, 22) en même temps ?**
