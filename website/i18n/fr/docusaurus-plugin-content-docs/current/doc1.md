---
id: doc1
title: Style Guide
sidebar_label: Style Guide
slug: /
---

Tu peux écrire du contenu avec [la syntaxe Markdown de GitHub](https://github.github.com/gfm/).

## Syntaxe Markdown

Pour servir de page d'exemple lors de la mise en page des sites Docusaurus basés sur markdown.

## En-têtes

# H1 - Créer la meilleure documentation

## H2 - Créer la meilleure documentation

### H3 - Créer la meilleure documentation

#### H4 - Créer la meilleure documentation

##### H5 - Créer la meilleure documentation

###### H6 - Créer la meilleure documentation

---

## Emphasis

Emphasis, alias italique, avec *astérisques* ou _tirets bas_.

Soulignement fort, alias gras, avec **astérisques** ou __traits de soulignement__.

Mise en valeur combinée avec **astérisques et _underscore_**.

Barrés utilise double tildes. ~~~Scratch ceci.~~

---

## Listes

1. Premier élément de la liste ordonnée
1. Un autre élément
   - Sous-liste non ordonnée.
1. Les nombres réels n'ont pas d'importance, juste qu'il s'agit d'un nombre
   1. Sous-liste ordonnée
1. Et un autre élément.

* La liste non ordonnée peut utiliser des astérisques

- Ou moins

+ Ou plus

---

## Liens

[I'm an inline-style link](https://www.google.com/)

[Je suis un lien de style en ligne avec le titre](https://www.google.com/ "Page d'accueil de Google")

[Je suis un lien de style de référence][arbitrary case-insensitive reference text]

[Vous pouvez utiliser des numéros pour les définitions de liens de style de référence][1]

Ou laissez-le vide et utilisez le texte du lien [lui-même][].

Les URLs et les URL entre parenthèses seront automatiquement transformées en liens. http://www.example.com/ ou <http://www.example.com/> et parfois example.com (mais pas sur GitHub, par exemple).

Un texte pour montrer que les liens de référence peuvent suivre plus tard.

---

## Images

Voici notre logo (survolez pour voir le texte du titre) :

Style en ligne : ![texte alt](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Texte du titre du logo 1")

Style de référence : !\[texte alt\]\[logo\] [logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 2' Les images de n'importe quel dossier peuvent être utilisées en fournissant le chemin vers le fichier.
Les images de n'importe quel dossier peuvent être utilisées en fournissant le chemin vers le fichier.

Images from any folder can be used by providing path to file.

![img](/img/logo.svg)

---

## Code

```javascript
var s = 'Coloration de syntaxe JavaScript' ;
alerte(s) ;
```

```python
s = "Coloration syntaxique Python"
print(s)
```

```
Aucune langue indiquée, donc aucune coloration syntaxique.
Mais jetons un <b>tag</b>.
```

```js {2}
function highlightMe() {
  console.log('Cette ligne peut être surlignée !');
}
```

---

## Tables

Les deux points peuvent être utilisés pour aligner les colonnes.

| Tables         |      Sont       |    Cool |
| -------------- |:---------------:| -------:|
| le col 3 est   | aligné à droite | \$1600 |
| le col 2 est   |     centré      |   \$12 |
| rayures zèbres |  sont soignés   |    \$1 |

Il doit y avoir au moins 3 tirets séparant chaque cellule d'en-tête. Les tuyaux extérieurs (|) sont optionnels, et vous n'avez pas besoin de faire monter la ligne Markdown brute. Vous pouvez également utiliser le Markdown en ligne.

| Markdown   | Moins     | Jolie        |
| ---------- | --------- | ------------ |
| _En cours_ | `renders` | **joliment** |
| 1          | 2         | 3            |

---

## Guillemets

> Les citations sont très pratiques dans les e-mails pour émuler le texte de réponse. Cette ligne fait partie du même guillemet.

Cette ligne est séparée de celle ci-dessus par deux nouvelles lignes, donc ce sera un _paragraphe séparé_.

> Il s'agit d'une ligne très longue qui sera toujours citée correctement lorsqu'elle sera incluse. Oh garçon continuons à écrire pour s'assurer que c'est assez long pour vraiment envelopper pour tout le monde. Oh, vous pouvez _mettre_ **Markdown** dans un blockquote.

---

## HTML en ligne

<dl>
  <dt>Liste des définitions</dt>
  <dd>Est quelque chose que les gens utilisent parfois.</dd>

  <dt>Markdown en HTML</dt>
  <dd>Ne fonctionne *pas* **très** bien. Utilisez les balises HTML <em></em>.</dd>
</dl>

---

## Interruptions de ligne

Cette ligne est séparée de celle ci-dessus par deux nouvelles lignes, donc ce sera un _paragraphe séparé_.

This line is separated from the one above by two newlines, so it will be a _separate paragraph_.

Cette ligne est également un paragraphe séparé, mais... Cette ligne n'est séparée que par une seule nouvelle ligne, donc c'est une ligne séparée dans le _même paragraphe_.

---

## Admonitions

:::note

Ceci est une note

:::

:::tip

Ceci est une astuce

:::

:::important

Ceci est important

:::

:::caution

Ceci est une précaution

:::

:::warning

Ceci est un avertissement

:::

[arbitrary case-insensitive reference text]: https://www.mozilla.org/
[1]: http://slashdot.org/
[lui-même]: http://www.reddit.com/
