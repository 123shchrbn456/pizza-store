import { API_URL, RES_PER_PAGE } from "./config.js";
import { AJAX } from "./helpers.js";

export const state = {
    recipe: {},
    search: {
        query: "",
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE,
    },
    bookmarks: [],
};

export const loadSearchResults = async function (query) {
    try {
        state.search.query = query;

        const data = await AJAX(`${API_URL}?q=${query}`);
        console.log(data);

        state.search.results = data.recipes.map((rec) => {
            return {
                // id: rec.id,
                id: rec.recipe_id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
                ...(rec.key && { key: rec.key }),
            };
        });
        state.search.page = 1;
    } catch (err) {
        console.error(`${err} 💥💥💥💥`);
        throw err;
    }
};
