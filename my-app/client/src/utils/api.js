import axios from "axios";

const api = {

    searchNYT: function(topic, startYear, endYear) {
        const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
        const queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
        authKey + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
        return axios.get(queryURL);
      },

      //gets searched articles

      getArticle: function() {
          return axios.get("/api/saved");
      },

      //Sends searched articles to the db
      searchedArticle: function(articleObj) {
          return axios.post("/api/searched", articleObj);
      }
    };

export default api; 