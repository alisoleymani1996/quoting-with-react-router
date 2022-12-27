import {useParams, Route, Link, useRouteMatch} from "react-router-dom";
import {Fragment, useEffect} from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import {getSingleQuote} from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();
    const {quoteId} = params;
    const {data: quoteData, sendRequest, error, status} = useHttp(getSingleQuote, true)

    useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest])

    if (status === 'pending') {
        return (
            <div className={'centered'}>
                <LoadingSpinner/>
            </div>)
    }

    if (error) {
        return (
            <p className={'centered'}>{error}</p>
        )
    }

    if (!quoteData) {
        return <p>No Quote Found</p>
    }
    // const quoteData = DUMMY_QUOTES.find(q => q.id === params.quoteId)
    return (
        <Fragment>
            <HighlightedQuote author={quoteData.author} text={quoteData.text}/>
            <Route path={`${match.path}`} exact={true}>
                <div className={'centered'}>
                    <Link className={'btn--flat'} to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments/>
            </Route>
        </Fragment>
    )
}

export default QuoteDetail;