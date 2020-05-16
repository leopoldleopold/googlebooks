import axios from "axios"

export default {
    getGooglebooks: function(title, apiKey){
        let url = "https://www.googleapis.com/books/v1/volumes?q=" + title + "&printType=Books&key=" + apiKey;
        return axios.get(url);
    },

    saveGoogleBooks: function(book) {
        return axios.post("/api", {
            "title": book.title,
            "author": book.author,
            "description": book.description,
            "image": book.image,
            "link": book.link
        });
    }
}