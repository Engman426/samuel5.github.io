// Define an array of news articles
let newsArticles = [
    {
      title: "Breaking News: Earthquake Hits City",
      description: "A 6.0 magnitude earthquake struck the city early this morning, causing widespread damage and multiple injuries.",
      image: "https://example.com/images/earthquake.jpg",
      date: "2023-04-21",
      category: "Breaking News"
    },
    {
      title: "Politics: President Announces New Tax Plan",
      description: "In a press conference today, the President announced a new tax plan aimed at reducing the tax burden on middle-class families.",
      image: "https://example.com/images/tax-plan.jpg",
      date: "2023-04-20",
      category: "Politics"
    },
    {
      title: "Sports: Local High School Wins State Championship",
      description: "The local high school's football team won the state championship in a thrilling game against their rivals.",
      image: "https://example.com/images/high-school-football.jpg",
      date: "2023-04-19",
      category: "Sports"
    }
  ];
  
  // Define a function to display the news articles on the website
  function displayNewsArticles() {
    let newsList = document.getElementById("news-list");
  
    // Clear any existing articles from the list
    while (newsList.firstChild) {
      newsList.removeChild(newsList.firstChild);
    }
  
    // Loop through the news articles and create HTML elements to display them
    for (let i = 0; i < newsArticles.length; i++) {
      let article = newsArticles[i];
  
      let articleContainer = document.createElement("div");
      articleContainer.className = "news-article";
  
      let articleImage = document.createElement("img");
      articleImage.src = article.image;
      articleContainer.appendChild(articleImage);
  
      let articleTitle = document.createElement("h2");
      articleTitle.innerHTML = article.title;
      articleContainer.appendChild(articleTitle);
  
      let articleDate = document.createElement("p");
      articleDate.innerHTML = article.date;
      articleContainer.appendChild(articleDate);
  
      let articleDescription = document.createElement("p");
      articleDescription.innerHTML = article.description;
      articleContainer.appendChild(articleDescription);
  
      newsList.appendChild(articleContainer);
    }
  }
  
  // Call the displayNewsArticles function to display the news articles on the website
  displayNewsArticles();
  