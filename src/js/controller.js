import searchView from "./views/searchView";
import * as model from "./model.js";

const controlSearchResults = async function () {
    try {
        //   resultsView.renderSpinner();

        // 1) Get search query
        const query = searchView.getQuery();
        if (!query) return;
        // 2) Load search results
        await model.loadSearchResults(query);

        // 3) Render results
        //   resultsView.render(model.getSearchResultsPage());

        // 4) Render initial pagination buttons
        //   paginationView.render(model.state.search);
    } catch (err) {
        console.log(err);
    }
};

const init = function () {
    searchView.addHandlerSearch(controlSearchResults);
};

init();
