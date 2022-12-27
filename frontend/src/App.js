import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import AllQuotes from "./pages/AllQuotes";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";


const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path={'/'} exact={true}>
                    <Redirect to={'/quotes'}/>
                </Route>
                <Route path={'/quotes'} exact>
                    <AllQuotes/>
                </Route>
                <Route path={'/quotes/:quoteId/'}>
                    <QuoteDetail/>
                </Route>
                <Route path={'/new-quote'}>
                    <NewQuote/>
                </Route>
                <Route path={'*'}>
                    <NotFound/>
                </Route>
            </Switch>
        </Layout>
    )
}

export default App;