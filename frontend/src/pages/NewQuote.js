import {useHistory} from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import {addQuote} from "../lib/api";
import {useEffect} from "react";

const NewQuote = (props) => {
    const history = useHistory()
    const {status, sendRequest} = useHttp(addQuote)

    useEffect(()=> {
        if (status === 'completed'){
            history.push('/quotes')
        }
    }, [status])

    const quoteAddHandler = (formData) => {
        sendRequest(formData)
        console.log(formData)
    }
    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={quoteAddHandler}/>
    )
}

export default NewQuote;