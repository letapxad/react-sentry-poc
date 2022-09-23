import {useEffect, useState} from "react";

const CatFacts = () => {
    const [facts, setFacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('https://catfact.ninja/facts?max_length=500&limit=10')
            .then(results => {
                console.log(results)
                if (results.status !== 200) {
                    setLoading(false);
                    setError(true);
                    throw new Error(results)
                }
                return results.json()
            })
            .then(resp => {
                setFacts(resp.data);
                setLoading(false);
                setError(false);
            }).catch(err => {
                setLoading(false);
                setError(true);
                console.log(
                    "Encountered an error with fetching and parsing data",
                    err
                );
        });
    },[]);

    return (
        <>
            <h1>Cat Facts</h1>
        {loading ?
            (<div>...Data Loading.....</div>):
                (<ul>
                {
                    facts.map(fact =>
                        <li key={fact.fact}>{fact.fact}</li>
                    )
                }
            </ul>)
        }
            {error ? (<div>Error loading cat facts please try again in some time...</div>): <></>}
        </>
    );
};

export default CatFacts;
