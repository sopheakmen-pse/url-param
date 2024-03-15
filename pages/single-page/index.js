import articles from "../../data/articleData.js";

console.log("Single Page");

const params = window.location.search;
const urlParam = new URLSearchParams(params);

const articleId = urlParam.get("id");
console.log("articleId", articleId);

// filter article by id to display in single page
for (let i = 0; i < articles.length; i++) {
  if (articles[i].id === parseInt(articleId)) {
    const articleCard = createArticleCard(articles[i]);
    document.body.append(articleCard);
  }
}

function createArticleCard(article) {
  const div = document.createElement("div");
  div.innerHTML = `
        <h1>${article.title}</h1>
        <p>${article.category}</p>
    `;
  return div;
}
